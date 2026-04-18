const SectionCollab = () => {
  const items = [
    {
      kind: "CHALLENGE",
      title: "엔트리 넥스트 챌린지 제작자 참여",
      desc: "\"AI와 SW로 도전하며 함께 성장해요\"라는 슬로건의 엔트리 넥스트 챌린지에 제작자로 참여. 공식 챌린지 페이지에서 작품을 확인할 수 있습니다.",
      url: "https://playentry.org/challenge/author/6859eeac18669a890e7ed79b",
      meta: "playentry.org",
      year: "2025",
    },
    {
      kind: "TALK",
      title: "EDC 2023 — 10년 전 엔둥이, 멘토가 되다",
      desc: "엔트리 개발자 컨퍼런스(EDC) 2023 발표 영상. 10년 동안 엔트리와 함께 성장해온 이야기를 나눴습니다.",
      url: "https://www.youtube.com/watch?v=5mXDyEdVn4E",
      meta: "youtube.com",
      year: "2023",
    },
  ];

  return (
    <section id="collab" style={{ padding: "56px 0", background: "var(--bg-2)" }}>
      <div className="wrap">
        <SectionHeader
          eyebrow="05 · collaboration & talks"
          title="협업과 발표"
          desc="혼자 만든 도구들을 넘어서, 엔트리 공식 채널과 함께 한 활동들."
          count={items.length}
        />

        <div style={{ display: "grid", gap: 14 }}>
          {items.map(it => <CollabRow key={it.url} it={it} />)}
        </div>
      </div>
    </section>
  );
};

const CollabRow = ({ it }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={it.url} target="_blank" rel="noreferrer"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
      display: "grid",
      gridTemplateColumns: "120px 100px 1fr auto",
      alignItems: "center", gap: 24,
      padding: "22px 28px",
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: 16,
      transition: "transform 200ms, box-shadow 200ms, border-color 200ms",
      transform: hover ? "translateX(4px)" : "none",
      boxShadow: hover ? "var(--shadow-m)" : "none",
      borderColor: hover ? "var(--brand)" : "var(--line)",
    }}>
      <span className="mono" style={{
        padding: "4px 10px", fontSize: 10, fontWeight: 700,
        background: "var(--brand-soft)", color: "var(--brand-ink)",
        borderRadius: 4, justifySelf: "start", letterSpacing: "0.08em",
      }}>{it.kind}</span>
      <span className="mono" style={{ fontSize: 14, color: "var(--ink)", fontWeight: 700 }}>{it.year}</span>
      <div>
        <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>{it.title}</div>
        <div style={{ fontSize: 13, color: "var(--ink-2)" }}>{it.desc}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ink-3)" }}>
        <span className="mono" style={{ fontSize: 12 }}>{it.meta}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
             style={{ transform: hover ? "translate(2px,-2px)" : "none", transition: "transform 200ms" }}>
          <path d="M4 10 L10 4 M5 4h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
};

Object.assign(window, { SectionCollab });
