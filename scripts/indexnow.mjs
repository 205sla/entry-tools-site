import { readFile } from "node:fs/promises";
import { site } from "../data/site.js";

const key = (await readFile(new URL("../indexnow-key.txt", import.meta.url), "utf8")).trim();
const keyLocation = new URL("indexnow-key.txt", site.url).href;
const verification = await fetch(keyLocation, { signal: AbortSignal.timeout(30000), cache: "no-store" });
if (!verification.ok || (await verification.text()).trim() !== key) throw new Error("The public verification file does not match; deploy first.");
const result = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST", signal: AbortSignal.timeout(30000),
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(site.url).host, key, keyLocation, urlList: [site.url] }),
});
if (![200, 202].includes(result.status)) throw new Error(`IndexNow returned ${result.status}: ${await result.text()}`);
console.log(`IndexNow received the update notification (HTTP ${result.status}). This confirms receipt, not indexing.`);
