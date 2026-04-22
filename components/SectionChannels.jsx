// Brand logos rendered inside the frosted-glass icon chip.
// Each logo is designed to read as white (or near-white) on the colored brand gradient.
const ChannelLogo = ({ kind }) => {
  if (kind === "youtube") {
    // YouTube play-button mark — white rounded rect with brand-red triangle cutout.
    return (
      <svg width="30" height="22" viewBox="0 0 28 20" aria-hidden>
        <path fill="white" d="M27.4 3.13a3.53 3.53 0 0 0-2.48-2.5C22.73 0 14 0 14 0S5.27 0 3.08.63A3.53 3.53 0 0 0 .6 3.13 36.8 36.8 0 0 0 0 10a36.8 36.8 0 0 0 .6 6.87 3.53 3.53 0 0 0 2.48 2.5C5.27 20 14 20 14 20s8.73 0 10.92-.63a3.53 3.53 0 0 0 2.48-2.5A36.8 36.8 0 0 0 28 10a36.8 36.8 0 0 0-.6-6.87z"/>
        <path fill="#ff0033" d="M11.2 14.29 18.47 10 11.2 5.71z"/>
      </svg>
    );
  }
  if (kind === "discord") {
    // Discord mark — white silhouette.
    return (
      <svg width="28" height="22" viewBox="0 0 71 55" aria-hidden fill="white">
        <path d="M60.1 4.9A58.5 58.5 0 0 0 45.67.5a40.9 40.9 0 0 0-1.85 3.78 54.13 54.13 0 0 0-16.25 0A41.3 41.3 0 0 0 25.72.5 58.3 58.3 0 0 0 11.28 4.9C2.08 18.63-.37 32 .86 45.26a58.8 58.8 0 0 0 17.85 9.01 43.38 43.38 0 0 0 3.83-6.2 37.97 37.97 0 0 1-6.02-2.88c.5-.37 1-.76 1.48-1.16a41.9 41.9 0 0 0 35.37 0c.5.39.98.78 1.47 1.16a38.07 38.07 0 0 1-6.04 2.89 43.14 43.14 0 0 0 3.82 6.19 58.52 58.52 0 0 0 17.87-9.02c1.44-15.37-2.46-28.62-10.4-40.36zM23.72 37.14c-3.47 0-6.3-3.17-6.3-7.06s2.78-7.07 6.29-7.07c3.5 0 6.36 3.17 6.3 7.07 0 3.9-2.8 7.06-6.3 7.06zm23.28 0c-3.47 0-6.3-3.17-6.3-7.06s2.78-7.07 6.3-7.07c3.5 0 6.36 3.17 6.29 7.07 0 3.9-2.79 7.06-6.29 7.06z"/>
      </svg>
    );
  }
  if (kind === "band") {
    // Naver BAND — official wordmark uses a bold rounded 'BAND' in white on green.
    return (
      <span style={{
        fontFamily: "var(--sans)",
        fontSize: 15, fontWeight: 900,
        letterSpacing: "-0.04em",
        color: "white",
      }}>BAND</span>
    );
  }
  if (kind === "kakao") {
    // KakaoTalk speech bubble — dark brown silhouette (the iconic Kakao mark color on yellow).
    return (
      <svg width="26" height="24" viewBox="0 0 20 18" aria-hidden fill="#3C1E1E">
        <path d="M10 0C4.48 0 0 3.58 0 8c0 2.83 1.85 5.32 4.65 6.75L3.5 18l3.87-2.55c.86.11 1.74.18 2.63.18 5.52 0 10-3.58 10-8S15.52 0 10 0z"/>
      </svg>
    );
  }
  return null;
};

const SectionChannels = () => {
  const channels = [
    {
      name: "205와 엔트리",
      handle: "@205",
      host: "youtube.com",
      url: "https://www.youtube.com/channel/UC8_yUqU2HnNkWBYfXhlWcWQ",
      desc: "엔트리 사용법, 작품 제작 과정, 확장프로그램·웹 서비스 소개, EDC 발표까지 — 도구를 만드는 이야기를 영상으로 남깁니다.",
      brand: "#ff0033",
      ico: "youtube",
    },
    {
      name: "엔트리 유튜버들",
      handle: "discord.gg/Ps7m8QrKn6",
      host: "discord.gg",
      url: "https://discord.gg/Ps7m8QrKn6",
      desc: "엔트리로 영상을 만드는 유튜버·크리에이터들이 모여 이야기 나누는 디스코드 서버. 작품·도구·편집 이야기가 오갑니다.",
      brand: "#5865f2",
      ico: "discord",
    },
    {
      name: "【코딩】엔트리&스크래치 커뮤니티",
      handle: "open.kakao.com",
      host: "open.kakao.com",
      url: "https://open.kakao.com/o/gqHqTTuc",
      desc: "엔트리와 스크래치를 함께 쓰는 사람들이 실시간으로 질문·작품·학습 이야기를 나누는 카카오톡 오픈채팅방.",
      brand: "#FEE500",
      ico: "kakao",
    },
    {
      name: "엔트리 밴드",
      handle: "@entryband",
      host: "band.us",
      url: "https://band.us/@entryband",
      desc: "엔트리 이용자들이 모여 질문하고 소식을 나누는 밴드 공간. 도구 업데이트 공지와 사용 팁도 함께 올립니다.",
      brand: "#3fb054",
      ico: "band",
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
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
          width: 48, height: 48, borderRadius: 12,
          background: "rgba(255,255,255,0.18)", backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.22)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white",
        }}>
          <ChannelLogo kind={c.ico} />
        </div>
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
