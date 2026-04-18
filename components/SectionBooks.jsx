// Reusable section header
const SectionHeader = ({ eyebrow, title, desc, count }) => (
  <div style={{
    display: "flex", alignItems: "flex-end", justifyContent: "space-between",
    marginBottom: 32, gap: 40,
  }}>
    <div>
      <SocketBadge>{eyebrow}</SocketBadge>
      <h2 style={{
        fontSize: 40, fontWeight: 800, letterSpacing: "-0.03em",
        margin: "14px 0 10px", lineHeight: 1.1,
      }}>
        {title}
      </h2>
      <p style={{ fontSize: 16, color: "var(--ink-2)", margin: 0, maxWidth: 620 }}>
        {desc}
      </p>
    </div>
    {count != null && (
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <div className="mono" style={{ fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.08em" }}>ITEMS</div>
        <div style={{ fontFamily: "var(--display)", fontSize: 48, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>
          {String(count).padStart(2, "0")}
        </div>
      </div>
    )}
  </div>
);

const SectionBooks = () => {
  const books = [
    {
      title: "원큐패스 나는야 엔트리 게임 개발자",
      subtitle: "스태프 선정 & 인기 작품 따라 만들기. 엔트리 기초부터 게임 제작까지, 코딩도 하고 게임도 하는 입문서.",
      publisher: "다락원",
      date: "2024.09.10",
      pages: 260,
      isbn: "9788927774280",
      cover: "assets/book-game.jpg",
      accent: "#9ad82e",
      tag: "GAME",
      authors: "이영호 · 최홍송",
    },
    {
      title: "원큐패스 나는야 엔트리 화가",
      subtitle: "코딩으로 만드는 예술작품. 블록코딩으로 디지털 아트·애니메이션·인터랙티브 작품을 완성합니다.",
      publisher: "다락원",
      date: "2023.10.10",
      pages: 260,
      isbn: "9788927773375",
      cover: "assets/book-art.jpg",
      accent: "#ff4d4d",
      tag: "ART",
      authors: "이영호 · 이채은",
    },
  ];

  return (
    <section id="books" style={{ padding: "96px 0 56px" }}>
      <div className="wrap">
        <SectionHeader
          eyebrow="01 · books"
          title="엔트리 도서"
          desc="엔트리로 창작을 시작하려는 친구들을 위한 원큐패스 시리즈 입문서. 다락원에서 두 권을 출간했습니다."
          count={books.length}
        />

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20,
        }}>
          {books.map(b => <BookCard key={b.isbn} {...b} />)}
        </div>
      </div>
    </section>
  );
};

const BookCard = ({ title, subtitle, publisher, date, pages, isbn, cover, accent, tag, authors }) => {
  return (
    <article style={{
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: 18,
      padding: 28,
      display: "grid",
      gridTemplateColumns: "170px 1fr",
      gap: 28,
      alignItems: "flex-start",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* accent glow */}
      <div aria-hidden style={{
        position: "absolute", top: -30, right: -30, width: 160, height: 160,
        borderRadius: "50%",
        background: `radial-gradient(circle, color-mix(in oklab, ${accent} 18%, transparent) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* real book cover */}
      <div style={{
        position: "relative",
        width: 170, height: 232,
        borderRadius: "3px 8px 8px 3px",
        overflow: "hidden",
        boxShadow: `-2px 4px 0 0 color-mix(in oklab, ${accent} 40%, black), 0 14px 30px -12px rgba(0,0,0,.3)`,
      }}>
        <img src={cover} alt={title} style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
        }} />
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 5,
          background: "rgba(0,0,0,.18)",
          boxShadow: "inset -1px 0 0 rgba(255,255,255,0.08)",
        }} />
      </div>

      {/* info */}
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span className="mono" style={{
            fontSize: 10, padding: "3px 7px", borderRadius: 4,
            background: `color-mix(in oklab, ${accent} 18%, var(--bg-2))`,
            color: "var(--ink)",
            fontWeight: 700, letterSpacing: "0.06em",
          }}>{tag}</span>
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>· {publisher} · {authors}</span>
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 6px" }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: "var(--ink-2)", margin: "0 0 20px", lineHeight: 1.55 }}>{subtitle}</p>

        <dl style={{
          display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 16, rowGap: 6,
          fontSize: 13, margin: 0,
        }}>
          <dt style={{ color: "var(--ink-3)" }}>발매일</dt><dd style={{ margin: 0, color: "var(--ink)" }} className="mono">{date}</dd>
          <dt style={{ color: "var(--ink-3)" }}>쪽수</dt><dd style={{ margin: 0, color: "var(--ink)" }} className="mono">{pages}p</dd>
          <dt style={{ color: "var(--ink-3)" }}>ISBN</dt><dd style={{ margin: 0, color: "var(--ink)" }} className="mono">{isbn}</dd>
        </dl>

        <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
          <a href={`https://www.google.com/search?q=${encodeURIComponent(title + " 다락원")}`} target="_blank" rel="noreferrer" style={{
            padding: "8px 14px", fontSize: 13, fontWeight: 600,
            border: "1px solid var(--line)", borderRadius: 8,
            color: "var(--ink)",
          }}>서점에서 찾기 →</a>
        </div>
      </div>
    </article>
  );
};

Object.assign(window, { SectionBooks, SectionHeader });
