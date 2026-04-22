const SectionChannels = () => {
  const channels = [
    {
      name: "205와 엔트리",
      handle: "@205",
      host: "youtube.com",
      url: "https://www.youtube.com/channel/UC8_yUqU2HnNkWBYfXhlWcWQ",
      desc: "엔트리 사용법, 작품 제작 과정, 확장프로그램·웹 서비스 소개, EDC 발표까지 — 도구를 만드는 이야기를 영상으로 남깁니다.",
      brand: "#ff0033",
      ico: "YT",
    },
    {
      name: "엔트리 유튜버들",
      handle: "discord.gg/Ps7m8QrKn6",
      host: "discord.gg",
      url: "https://discord.gg/Ps7m8QrKn6",
      desc: "엔트리로 영상을 만드는 유튜버·크리에이터들이 모여 이야기 나누는 디스코드 서버. 작품·도구·편집 이야기가 오갑니다.",
      brand: "#5865f2",
      ico: "DC",
    },
    {
      name: "엔트리 밴드",
      handle: "@entryband",
      host: "band.us",
      url: "https://band.us/@entryband",
      desc: "엔트리 이용자들이 모여 질문하고 소식을 나누는 밴드 공간. 도구 업데이트 공지와 사용 팁도 함께 올립니다.",
      brand: "#3fb054",
      ico: "BD",
    },
  ];

  return (
    <section id="channels" style={{ padding: "56px 0 96px" }}>
      <div className="wrap">
        <SectionHeader
          eyebrow="04 · channels"
          title="커뮤니티 채널"
          desc="서비스를 만들면서 쌓인 기록들. 유튜브에서 보고, 밴드에서 이야기 나눠주세요."
          count={channels.length}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {channels.map(c => <ChannelCard key={c.url} c={c} />)}
        </div>
      </div>
    </section>
  );
};

const ChannelCard = ({ c }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={c.url} target="_blank" rel="noreferrer"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
      display: "block",
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: 18,
      overflow: "hidden",
      position: "relative",
      transition: "transform 200ms, box-shadow 200ms",
      transform: hover ? "translateY(-2px)" : "none",
      boxShadow: hover ? "var(--shadow-m)" : "var(--shadow-s)",
    }}>
      {/* color band */}
      <div style={{
        height: 120,
        background: `linear-gradient(135deg, ${c.brand}, color-mix(in oklab, ${c.brand} 60%, black))`,
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: `repeating-linear-gradient(45deg, transparent 0 14px, rgba(255,255,255,0.08) 14px 15px)`,
        }} />
        <div style={{
          position: "absolute", top: 20, left: 20,
          width: 48, height: 48, borderRadius: 10,
          background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--mono)", fontWeight: 700, color: "white",
          fontSize: 14, letterSpacing: "0.04em",
        }}>{c.ico}</div>
      </div>
      <div style={{ padding: 22 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.04em" }}>{c.host}</span>
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-2)" }}>{c.handle}</span>
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 8px" }}>{c.name}</h3>
        <p style={{ fontSize: 14, color: "var(--ink-2)", margin: 0 }}>{c.desc}</p>
        <div style={{
          marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 13, fontWeight: 600, color: "var(--ink)",
        }}>
          방문하기
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
               style={{ transform: hover ? "translate(2px,-2px)" : "none", transition: "transform 200ms" }}>
            <path d="M3 9 L9 3 M4 3h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </a>
  );
};

Object.assign(window, { SectionChannels });
