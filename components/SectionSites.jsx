const SectionSites = () => {
  const sites = [
    {
      name: "EntryMerge — 엔트리 작품 합치기 (웹)",
      url: "https://entry.205.kr/",
      host: "entry.205.kr",
      desc: "확장 설치 없이 브라우저에서 바로 .ent 파일을 합치는 웹 버전. 드래그앤드롭으로 최대 10개(전체 150MB)까지, 리메이크 표시·대답·초시계 숨김 옵션도 함께 제공합니다.",
      category: "도구",
      accent: "#1fb25a",
    },
    {
      name: "CODE 205 — 블록 코딩으로 푸는 알고리즘 문제",
      url: "https://code.205.kr/",
      host: "code.205.kr",
      desc: "엔트리 블록으로 알고리즘 문제를 풀어보는 베타 서비스. 자유 모드에서 누구나 연습할 수 있고, 풀이 기록은 브라우저 로컬에만 저장됩니다. 오픈소스로 공개 중.",
      category: "학습",
      accent: "#1fb25a",
      featured: true,
      badge: "BETA",
    },
    {
      name: "짧은 엔트리 — Short ENT",
      url: "https://xn--oy2b95t44j.org/",
      host: "엔트리.org",
      desc: "엔트리 작품·마이페이지·탐험하기 같은 긴 URL을 엔트리.org 한글 도메인 기반 짧은 주소로 만들어주는 비공식 단축 도구. 별명으로 기억하기 쉬운 주소도 만들 수 있습니다.",
      category: "유틸리티",
      accent: "#7a62e0",
    },
  ];

  return (
    <section id="sites" style={{ padding: "96px 0 56px" }}>
      <div className="wrap">
        <SectionHeader
          eyebrow="03 · web services"
          title="웹 서비스"
          desc="설치 없이 브라우저에서 바로 쓰는 도구들. 각각의 도메인으로 독립 운영됩니다."
          count={sites.length}
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 20,
        }}>
          {/* featured (알고리즘 테스트) */}
          {sites.filter(s => s.featured).map(s => (
            <div key={s.url} style={{ gridColumn: "span 12" }}>
              <FeaturedSite site={s} />
            </div>
          ))}
          {/* others */}
          {sites.filter(s => !s.featured).map(s => (
            <div key={s.url} style={{ gridColumn: "span 6" }}>
              <SiteCard site={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedSite = ({ site }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={site.url} target="_blank" rel="noreferrer"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
      display: "block",
      position: "relative",
      borderRadius: 22,
      overflow: "hidden",
      background: "var(--ink)",
      color: "var(--bg)",
      padding: 44,
      transition: "transform 200ms",
      transform: hover ? "translateY(-2px)" : "none",
    }}>
      {/* background grid */}
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(var(--brand) 1px, transparent 1px), linear-gradient(90deg, var(--brand) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        opacity: .08,
      }} />

      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 40, alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{
              padding: "4px 10px", borderRadius: 100,
              background: "var(--brand)", color: "var(--ink)",
              fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
            }}>
              {site.badge}
            </span>
            <span className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.08em" }}>
              {site.host}
            </span>
          </div>
          <h3 style={{
            fontSize: 40, fontWeight: 800, letterSpacing: "-0.03em",
            margin: "14px 0 14px", lineHeight: 1.08,
          }}>{site.name}</h3>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", margin: 0, maxWidth: 420, lineHeight: 1.55 }}>
            {site.desc}
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 28, flexWrap: "wrap" }}>
            {[
              ["상태", "Beta 운영 중"],
              ["저장", "브라우저 로컬"],
              ["언어", "엔트리 블록"],
            ].map(([k, v]) => (
              <div key={k} style={{ paddingRight: 20, borderRight: "1px solid rgba(255,255,255,0.15)" }}>
                <div className="mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>{k.toUpperCase()}</div>
                <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 32,
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 18px", borderRadius: 10,
            background: "var(--brand)", color: "var(--ink)",
            fontSize: 14, fontWeight: 700,
          }}>
            code.205.kr 방문하기
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                 style={{ transform: hover ? "translateX(3px)" : "none", transition: "transform 200ms" }}>
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* fake judge preview */}
        <JudgePreview />
      </div>
    </a>
  );
};

const JudgePreview = () => {
  return (
    <div style={{
      background: "var(--bg)",
      color: "var(--ink)",
      borderRadius: 14,
      padding: 20,
      fontFamily: "var(--mono)",
      fontSize: 12,
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 30px 60px -30px rgba(0,0,0,.5)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ display: "flex", gap: 5 }}>
          <span style={{ width: 10, height: 10, borderRadius: 5, background: "#ff5f57" }} />
          <span style={{ width: 10, height: 10, borderRadius: 5, background: "#febc2e" }} />
          <span style={{ width: 10, height: 10, borderRadius: 5, background: "#28c840" }} />
        </div>
        <span style={{ color: "var(--ink-3)", fontSize: 10 }}>problem · 001_sum</span>
      </div>

      <div style={{ color: "var(--ink-3)" }}>// 입력 두 수 A, B의 합을 출력하세요</div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 2 }}>
        <BlockShape w={220} color="#e89b3c" variant="event">시작하기 버튼을 클릭했을 때</BlockShape>
        <div style={{ marginTop: -7 }}>
          <BlockShape w={240} color="#7a62e0" variant="action">입력값 A, B 를 받는다</BlockShape>
        </div>
        <div style={{ marginTop: -7 }}>
          <BlockShape w={200} color="#1fb25a" variant="action">A + B 를 출력</BlockShape>
        </div>
        <div style={{ marginTop: -7 }}>
          <BlockShape w={140} color="#4a6db0" variant="cap">멈추기</BlockShape>
        </div>
      </div>
      <div style={{
        marginTop: 16, padding: "8px 10px", borderRadius: 6,
        background: "var(--brand-soft)", color: "var(--brand-ink)",
        display: "flex", justifyContent: "space-between",
      }}>
        <span>✓ 10 / 10 testcases passed</span>
        <span>0.08s</span>
      </div>
    </div>
  );
};

const SiteCard = ({ site }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={site.url} target="_blank" rel="noreferrer"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
      display: "block",
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: 18,
      padding: 26,
      height: "100%",
      position: "relative",
      transition: "transform 200ms, box-shadow 200ms",
      transform: hover ? "translateY(-2px)" : "none",
      boxShadow: hover ? "var(--shadow-m)" : "var(--shadow-s)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
        <span style={{
          width: 40, height: 40, borderRadius: 10,
          background: `color-mix(in oklab, ${site.accent} 14%, var(--surface))`,
          border: `1px solid color-mix(in oklab, ${site.accent} 30%, var(--line))`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ width: 14, height: 14, borderRadius: 4, background: site.accent }}/>
        </span>
        <div>
          <div className="mono" style={{ fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.06em" }}>{site.category.toUpperCase()}</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-2)" }}>{site.host}</div>
        </div>
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 10px", lineHeight: 1.2 }}>
        {site.name}
      </h3>
      <p style={{ fontSize: 14, color: "var(--ink-2)", margin: 0, lineHeight: 1.55 }}>{site.desc}</p>

      <div style={{
        marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--line-2)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        fontSize: 13, fontWeight: 600, color: "var(--ink-2)",
      }}>
        사이트 열기
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
             style={{ transform: hover ? "translate(2px,-2px)" : "none", transition: "transform 200ms" }}>
          <path d="M4 10 L10 4 M5 4h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
};

Object.assign(window, { SectionSites });
