const Hero = () => {
  return (
    <section id="top" style={{
      position: "relative",
      paddingTop: 56, paddingBottom: 80,
      overflow: "hidden",
    }}>
      {/* decorative grid background */}
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--line-2) 1px, transparent 0)`,
        backgroundSize: "28px 28px",
        maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 95%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 95%)",
        opacity: .6,
        pointerEvents: "none",
      }} />

      <div className="wrap" style={{ position: "relative" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.25fr 1fr",
          gap: 64, alignItems: "center",
        }}>
          {/* left: copy */}
          <div>
            <SocketBadge>made with entry · since 2015</SocketBadge>

            <h1 style={{
              fontFamily: "var(--sans)",
              fontSize: 68, lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: "-0.035em",
              margin: "22px 0 18px",
            }}>
              엔트리를 더<br />
              <span style={{ position: "relative", display: "inline-block" }}>
                <span style={{ position: "relative", zIndex: 1 }}>즐겁게, 편리하게.</span>
                <span aria-hidden style={{
                  position: "absolute", left: -4, right: -4, bottom: 6, height: 18,
                  background: "var(--brand-soft)", zIndex: 0, borderRadius: 3,
                }} />
              </span>
            </h1>
            <p style={{
              fontSize: 18, lineHeight: 1.55,
              color: "var(--ink-2)", maxWidth: 520,
              margin: "0 0 32px",
            }}>
              10년 넘게 엔트리를 쓰며, 필요한 도구가 없을 땐 직접 만들어 왔습니다.
              EntryMerge·Save Manager·CODE 205 같은 확장과 웹 서비스, 다락원에서 낸 도서까지 — <strong style={{ color: "var(--ink)", fontWeight: 700 }}>205가 만든 엔트리 도구 모음</strong>입니다.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="#extensions" style={{
                padding: "14px 22px",
                background: "var(--ink)", color: "var(--bg)",
                borderRadius: 10, fontWeight: 600, fontSize: 15,
                display: "inline-flex", alignItems: "center", gap: 8,
              }}>
                도구 둘러보기
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#books" style={{
                padding: "14px 22px",
                background: "var(--surface)", color: "var(--ink)",
                border: "1px solid var(--line)",
                borderRadius: 10, fontWeight: 600, fontSize: 15,
              }}>
                출간 도서 보기
              </a>
            </div>

            {/* stats */}
            <div style={{
              marginTop: 44,
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              paddingTop: 28,
              borderTop: "1px solid var(--line-2)",
            }}>
              {[
                { k: "4", v: "웹 서비스" },
                { k: "3", v: "크롬 확장" },
                { k: "2", v: "출간 도서" },
                { k: "10y", v: "엔트리 활동" },
              ].map(s => (
                <div key={s.v}>
                  <div style={{ fontFamily: "var(--display)", fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)" }}>{s.k}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2, letterSpacing: "0.02em" }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right: abstract block stack motif */}
          <HeroMotif />
        </div>
      </div>
    </section>
  );
};

const HeroMotif = () => {
  const blocks = [
    { label: "엔트리가 시작되면", color: "#e89b3c", w: 230 },
    { label: "도구를 하나 만든다", color: "#1fb25a", w: 250 },
    { label: "사람들이 쓰기 시작한다", color: "#1fb25a", w: 270 },
    { label: "반복하기", color: "#7a62e0", w: 190 },
  ];

  return (
    <div style={{ position: "relative", height: 420 }}>
      {/* perspective card */}
      <div style={{
        position: "absolute",
        top: 20, right: 0,
        width: 440, padding: "32px 28px 48px",
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: 18,
        boxShadow: "var(--shadow-m)",
        transform: "rotate(-1.2deg)",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: 20,
        }}>
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.04em" }}>
            WORKSPACE · 205
          </span>
          <div style={{ display: "flex", gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--line)" }} />
            <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--line)" }} />
            <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--brand)" }} />
          </div>
        </div>

        <BlockStack items={blocks} />

        <div style={{ marginTop: 28, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["도서", "크롬 확장", "웹툴", "유튜브", "컨퍼런스"].map(t => (
            <span key={t} style={{
              fontSize: 11, padding: "4px 9px",
              background: "var(--bg-2)", color: "var(--ink-2)",
              borderRadius: 100,
              fontFamily: "var(--mono)",
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* author character floating */}
      <div style={{
        position: "absolute",
        bottom: -10, left: -20,
        width: 170, height: 180,
        transform: "rotate(-4deg)",
        filter: "drop-shadow(0 12px 18px rgba(0,0,0,.14))",
      }}>
        <img src="assets/author-thumbs.png" alt="이영호" style={{ width: "100%", height: "100%", objectFit: "contain" }}/>
      </div>

      {/* small secondary card */}
      <div style={{
        position: "absolute",
        bottom: 10, left: 140,
        width: 210,
        padding: 14,
        background: "var(--brand)",
        color: "white",
        borderRadius: 14,
        transform: "rotate(3deg)",
        boxShadow: "var(--shadow-m)",
      }}>
        <div className="mono" style={{ fontSize: 10, opacity: .85, letterSpacing: "0.08em" }}>BETA · 2026</div>
        <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4, lineHeight: 1.3 }}>
          CODE 205 · 블록으로 푸는 알고리즘
        </div>
        <div style={{ fontSize: 11, opacity: .9, marginTop: 2 }}>code.205.kr</div>
      </div>
    </div>
  );
};

Object.assign(window, { Hero });
