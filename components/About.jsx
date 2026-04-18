const About = () => {
  return (
    <section id="about" style={{ padding: "96px 0" }}>
      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 40,
          alignItems: "center",
          background: "var(--surface)",
          border: "1px solid var(--line)",
          borderRadius: 22,
          padding: 56,
          position: "relative",
          overflow: "hidden",
        }}>
          {/* decorative stack behind */}
          <div aria-hidden style={{
            position: "absolute", right: -40, top: -40,
            opacity: .08,
          }}>
            <BlockStack items={[
              { label: "205", color: "var(--brand)", w: 220 },
              { label: "making tools", color: "var(--brand)", w: 240 },
              { label: "for entry", color: "var(--brand)", w: 200 },
            ]} scale={1.2} />
          </div>

          <div style={{ position: "relative" }}>
            <SocketBadge>about · author</SocketBadge>
            <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", margin: "16px 0 16px", lineHeight: 1.15 }}>
              안녕하세요,<br/>이영호입니다.
            </h2>
            <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.65, margin: 0 }}>
              엔트리를 쓰다가 "이런 도구가 있었으면 좋겠다"는 순간이 쌓였습니다. 그래서 하나씩 만들었어요.
              작품을 합쳐주는 EntryMerge, 변수·리스트를 들여다보는 디버깅 툴, 세이브용 Save Manager,
              짧은 엔트리 URL, 블록으로 푸는 알고리즘 CODE 205까지 — 엔트리와 함께 할 수 있는 것들을 계속 실험하고 있습니다.
              다락원에서 낸 《나는야 엔트리 게임 개발자》·《나는야 엔트리 화가》 두 권도 같은 마음으로 썼습니다.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="https://205.kr" target="_blank" rel="noreferrer" style={linkBtnPrimary}>205.kr ↗</a>
              <a href="mailto:205@205.kr" style={linkBtnSecondary}>205@205.kr</a>
              <a href="https://playentry.org/profile/56136825dadc91e1235b460d/project?sort=created&term=all&isOpen=all" target="_blank" rel="noreferrer" style={linkBtnSecondary}>엔트리 프로필 ↗</a>
            </div>
          </div>

          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AuthorStage />
          </div>
        </div>
      </div>
    </section>
  );
};

const AuthorStage = () => {
  const [variant, setVariant] = React.useState("thumbs");
  const src = variant === "thumbs" ? "assets/author-thumbs.png" : "assets/author-ok.png";
  return (
    <div style={{ position: "relative", width: 360, height: 380 }}>
      {/* background disc */}
      <div aria-hidden style={{
        position: "absolute", inset: "8% 8% 8% 8%",
        borderRadius: "50%",
        background: "radial-gradient(circle at 50% 40%, var(--brand-soft), var(--bg-2) 70%)",
      }} />
      {/* dotted ring */}
      <svg aria-hidden viewBox="0 0 360 380" style={{ position: "absolute", inset: 0 }}>
        <circle cx="180" cy="190" r="155" fill="none" stroke="var(--brand)" strokeWidth="1.5" strokeDasharray="2 8" opacity=".5"/>
      </svg>
      <img src={src} alt="이영호" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "contain",
        filter: "drop-shadow(0 14px 20px rgba(0,0,0,.12))",
      }}/>
      {/* toggle */}
      <div style={{
        position: "absolute", bottom: 4, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: 4, padding: 3,
        background: "var(--surface)", border: "1px solid var(--line)",
        borderRadius: 100, boxShadow: "var(--shadow-s)",
      }}>
        {[["thumbs","👍"],["ok","👌"]].map(([k, l]) => (
          <button key={k} onClick={() => setVariant(k)} style={{
            padding: "6px 14px", fontSize: 12, fontWeight: 600,
            border: "none", borderRadius: 100,
            background: variant === k ? "var(--ink)" : "transparent",
            color: variant === k ? "var(--bg)" : "var(--ink-2)",
            cursor: "pointer",
          }}>{l}</button>
        ))}
      </div>
    </div>
  );
};

const linkBtnPrimary = {
  padding: "11px 18px",
  background: "var(--ink)", color: "var(--bg)",
  borderRadius: 9, fontSize: 14, fontWeight: 600,
};
const linkBtnSecondary = {
  padding: "11px 18px",
  background: "var(--surface)", color: "var(--ink)",
  border: "1px solid var(--line)",
  borderRadius: 9, fontSize: 14, fontWeight: 600,
};

const ProfileCard = () => {
  const stats = [
    { k: "PERSONAL", v: "205.kr" },
    { k: "EMAIL", v: "205@205.kr" },
    { k: "ENTRY SINCE", v: "2015" },
    { k: "LOCATION", v: "Republic of Korea" },
  ];
  return (
    <div style={{
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 16,
      padding: 24,
      fontFamily: "var(--mono)",
      fontSize: 13,
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: 18,
      }}>
        <span style={{ color: "var(--ink-3)", fontSize: 11, letterSpacing: "0.06em" }}>// profile.yaml</span>
        <span style={{
          width: 8, height: 8, borderRadius: 4, background: "var(--brand)",
          boxShadow: "0 0 0 3px color-mix(in oklab, var(--brand) 30%, transparent)",
        }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "10px 16px" }}>
        {stats.map(s => (
          <React.Fragment key={s.k}>
            <span style={{ color: "var(--ink-3)" }}>{s.k}:</span>
            <span style={{ color: "var(--ink)", fontWeight: 500 }}>{s.v}</span>
          </React.Fragment>
        ))}
      </div>

      <div style={{
        marginTop: 20, paddingTop: 16, borderTop: "1px dashed var(--line)",
        color: "var(--ink-3)", fontSize: 12, lineHeight: 1.6,
      }}>
        &gt; make --tools --for entry<br/>
        &gt; commit --often<br/>
        &gt; <span style={{ color: "var(--brand-ink)" }}>build (in progress...)</span>
        <span style={{
          display: "inline-block", width: 6, height: 12, background: "var(--ink)",
          marginLeft: 4, verticalAlign: "middle",
          animation: "blink 1s steps(2) infinite",
        }} />
      </div>
      <style>{`@keyframes blink { 50% { opacity: 0 } }`}</style>
    </div>
  );
};

Object.assign(window, { About });
