import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";
import { createHash } from "node:crypto";
import { sites, exts, books } from "../data/catalog.js";
import { site, questions, choices } from "../data/site.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const published = name => resolve(root, "dist", name);
const html = await readFile(published("index.html"), "utf8");
const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "").replace(/<[^>]*>/g, "");
const decode = value => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])["@graph"];

test("initial HTML contains the full catalogue and answers without executing JavaScript", () => {
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.match(html, /<main id="main"/);
  for (const tool of [...sites, ...exts, ...books]) {
    assert.ok(decode(visible).includes(tool.name || tool.title), tool.id);
    assert.ok(decode(visible).includes(tool.desc || tool.subtitle), tool.id + " description");
  }
  for (const item of questions) assert.ok(decode(visible).includes(item.answer), item.id);
  assert.doesNotMatch(html, /text\/babel|unpkg\.com|<div id="root"><\/div>/);
});

test("all fragment links resolve to unique, rendered IDs", () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, "duplicate element ID");
  for (const [, href] of html.matchAll(/\bhref="#([^"]+)"/g)) assert.ok(ids.includes(href), "missing #" + href);
  for (const item of choices) assert.ok(ids.includes(item.href.slice(1)));
});

test("structured data and text guide agree with visible tool and FAQ content", async () => {
  const catalogue = graph.find(item => item["@type"] === "ItemList");
  const items = [...sites, ...exts, ...books];
  assert.equal(catalogue.numberOfItems, items.length);
  assert.deepEqual(catalogue.itemListElement.map(item => item.position), items.map((_, i) => i + 1));
  assert.deepEqual(catalogue.itemListElement.map(item => item.name), items.map(item => item.name || item.title));
  const faq = graph.find(item => item["@type"] === "FAQPage");
  assert.deepEqual(faq.mainEntity.map(item => item.acceptedAnswer.text), questions.map(item => item.answer));
  const textGuide = await readFile(published("llms.txt"), "utf8");
  for (const item of items) assert.ok(textGuide.includes(item.name || item.title));
  for (const item of questions) assert.ok(textGuide.includes(item.answer));
  assert.ok(textGuide.includes(site.updated));
});

test("canonical, sitemap and preview metadata describe the actual public page", async () => {
  assert.match(html, /<html lang="ko"/);
  assert.ok(html.includes(`<link rel="canonical" href="${site.url}"`));
  assert.ok(html.includes(`<title>${site.title}</title>`));
  assert.match(html, /name="robots" content="index, follow, max-image-preview:large"/);
  const sitemap = await readFile(published("sitemap.xml"), "utf8");
  assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]), [site.url]);
  assert.ok(sitemap.includes(`<lastmod>${site.updated}</lastmod>`));
  assert.match(await readFile(published("robots.txt"), "utf8"), /User-agent: \*\s+Allow: \//);
  assert.match(await readFile(published("404.html"), "utf8"), /name="robots" content="noindex"/);
});

test("published assets exist and the artifact excludes source and dependencies", async () => {
  for (const [, raw] of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:|#)/.test(raw)) continue;
    const path = decode(raw).split("?")[0].replace(/^\//, "");
    assert.ok((await stat(published(path))).isFile(), raw);
  }
  const names = await readdir(resolve(root, "dist"));
  for (const excluded of ["page.html", "node_modules", "components", "data", "package.json", "tests"]) assert.ok(!names.includes(excluded));
  for (const name of (await readdir(root)).filter(name => /^naver[a-z0-9]+\.html$/.test(name))) {
    assert.equal(await readFile(published(name), "utf8"), await readFile(resolve(root, name), "utf8"));
  }
  const js = await readFile(published("assets/site.js"));
  assert.ok(gzipSync(js).length < 85000, "production JavaScript exceeds 85 KB gzipped");
  const css = await readFile(published("style.css"));
  const version = createHash("sha256").update(js).update(css).digest("hex").slice(0, 12);
  assert.ok(html.includes(`assets/site.js?v=${version}`), "script cache version differs from published assets");
  assert.ok(html.includes(`style.css?v=${version}`), "stylesheet cache version differs from published assets");
  assert.ok(!html.includes("\r"), "generated HTML must use consistent line endings");
});
