const SectionExtensions = () => {
  const exts = [
    {
      name: "EntryMerge — 엔트리 작품 합치기",
      short: "EntryMerge",
      desc: "엔트리(playentry.org) 작품 파일(.ent)을 하나로 합쳐주는 무료 도구. 여러 명이 각자 만든 오브젝트·코드·변수를 한 작품으로 병합해, 합작이나 백업 통합이 편해집니다.",
      url: "https://chromewebstore.google.com/detail/entrymerge-%EC%97%94%ED%8A%B8%EB%A6%AC-%EC%9E%91%ED%92%88-%ED%95%A9%EC%B9%98%EA%B8%B0/afkojcdofphbphfalnjgidbefbmndgjm",
      platform: "Chrome",
      tags: ["작품 병합", "합작"],
      featured: true,
    },
    {
      name: "엔트리 디버깅 툴",
      short: "Entry Debug",
      desc: "엔트리 코딩 플랫폼의 변수와 리스트를 실시간으로 모니터링하고 값을 직접 수정할 수 있는 디버깅 도구. 작품을 만드는 중 데이터 흐름을 눈으로 확인하며 오류를 잡아냅니다.",
      url: "https://chromewebstore.google.com/detail/%EC%97%94%ED%8A%B8%EB%A6%AC-%EB%94%94%EB%B2%84%EA%B9%85-%ED%88%B4/meginahneajajhniecgebilpldnabkob",
      platform: "Chrome",
      tags: ["변수·리스트", "디버깅"],
    },
    {
      name: "Entry Save Manager",
      short: "Save Manager",
      desc: "이름 앞에 '@'를 붙인 변수·리스트를 브라우저 로컬에 자동 저장·복원해주는 확장. RPG나 타이쿤처럼 오래 즐기는 작품에 세이브 기능을 넣을 때 유용합니다.",
      url: "https://chromewebstore.google.com/detail/entry-save-manager/cdfhajcmlmldegpgnhpeihmhifhkengd",
      platform: "Chrome",
      tags: ["세이브", "로컬 저장"],
    },
  ];

  return (
    <section id="extensions" style={{ padding: "56px 0", background: "var(--bg-2)" }}>
      <div className="wrap">
        <SectionHeader
          eyebrow="02 · chrome extensions"
          title="크롬 확장프로그램"
          desc="브라우저 위에 설치하는 도구들. 엔트리 편집기의 기능을 확장해, 일상적인 작업 흐름을 더 빠르고 안전하게 만들어줍니다."
          count={exts.length}
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 20,
        }}>
          {exts.map((e, i) => (
            <div key={e.name} style={{
              gridColumn: e.featured ? "span 12" : (i === 1 ? "span 6" : "span 6"),
            }}>
              <ExtensionCard ext={e} wide={e.featured} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExtensionCard = ({ ext, wide }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={ext.url} target="_blank" rel="noreferrer"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
      display: "block",
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: 18,
      padding: wide ? 36 : 28,
      position: "relative",
      overflow: "hidden",
      height: "100%",
      transition: "transform 200ms, box-shadow 200ms",
      transform: hover ? "translateY(-2px)" : "none",
      boxShadow: hover ? "var(--shadow-m)" : "var(--shadow-s)",
    }}>
      {/* platform chip */}
      <div style={{
        position: "absolute", top: wide ? 28 : 22, right: wide ? 28 : 22,
        display: "flex", alignItems: "center", gap: 6,
        padding: "4px 10px", borderRadius: 100,
        background: "var(--bg-2)", color: "var(--ink-2)",
        fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.06em",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 3, background: "var(--brand)" }} />
        {ext.platform.toUpperCase()}
      </div>

      <div style={{
        display: wide ? "grid" : "block",
        gridTemplateColumns: wide ? "1fr 1fr" : undefined,
        gap: 40,
        alignItems: "center",
      }}>
        <div>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.06em" }}>
            {ext.short.toUpperCase()}
          </div>
          <h3 style={{
            fontSize: wide ? 32 : 22,
            fontWeight: 800, letterSpacing: "-0.025em",
            margin: "6px 0 12px", lineHeight: 1.15,
          }}>{ext.name}</h3>
          <p style={{ fontSize: 14, color: "var(--ink-2)", margin: 0, lineHeight: 1.6 }}>
            {ext.desc}
          </p>

          <div style={{ display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap" }}>
            {ext.tags.map(t => (
              <span key={t} style={{
                fontSize: 11, padding: "3px 9px",
                border: "1px solid var(--line)", borderRadius: 100,
                color: "var(--ink-2)",
              }}>{t}</span>
            ))}
          </div>

          <div style={{
            marginTop: 20, display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 13, fontWeight: 600, color: "var(--brand-ink)",
          }}>
            Chrome Web Store에서 설치
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                 style={{ transform: hover ? "translateX(2px)" : "none", transition: "transform 200ms" }}>
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* preview / illustration for the featured one */}
        {wide && <ExtensionVisual name={ext.short} />}
      </div>
    </a>
  );
};

const ExtensionVisual = ({ name }) => {
  // abstract visualization of "merging" two entry works
  return (
    <div style={{
      position: "relative",
      height: 220,
      background: "var(--bg)",
      borderRadius: 14,
      border: "1px solid var(--line-2)",
      overflow: "hidden",
      padding: 22,
    }}>
      {/* left stack */}
      <div style={{ position: "absolute", top: 26, left: 22 }}>
        <BlockStack items={[
          { label: "작품 A", color: "#1fb25a", w: 120 },
          { label: "오브젝트 3개", color: "#1fb25a", w: 120 },
        ]} scale={0.85} />
      </div>
      {/* right stack */}
      <div style={{ position: "absolute", top: 26, right: 22 }}>
        <BlockStack items={[
          { label: "작품 B", color: "#e89b3c", w: 120 },
          { label: "오브젝트 2개", color: "#e89b3c", w: 120 },
        ]} scale={0.85} />
      </div>
      {/* arrow / plus */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 48, height: 48, borderRadius: 24,
        background: "var(--ink)", color: "var(--bg)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 24, fontWeight: 300,
        boxShadow: "0 8px 20px -6px rgba(0,0,0,.25)",
      }}>+</div>
      {/* bottom merged result */}
      <div style={{
        position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)",
      }}>
        <div className="mono" style={{
          fontSize: 10, color: "var(--ink-3)", textAlign: "center", marginBottom: 4,
        }}>MERGED</div>
        <BlockShape w={180} color="var(--brand-ink)" variant="cap">작품 A + B · 5 오브젝트</BlockShape>
      </div>
    </div>
  );
};

Object.assign(window, { SectionExtensions });
