const Footer = () => {
  const cols = [
    {
      h: "도서",
      items: [
        ["나는야 엔트리 게임 개발자", "#books"],
        ["나는야 엔트리 화가", "#books"],
      ],
    },
    {
      h: "확장프로그램",
      items: [
        ["EntryMerge", "https://chromewebstore.google.com/detail/afkojcdofphbphfalnjgidbefbmndgjm"],
        ["엔트리 디버깅 툴", "https://chromewebstore.google.com/detail/meginahneajajhniecgebilpldnabkob"],
        ["Entry Save Manager", "https://chromewebstore.google.com/detail/cdfhajcmlmldegpgnhpeihmhifhkengd"],
      ],
    },
    {
      h: "웹 서비스",
      items: [
        ["entry.205.kr", "https://entry.205.kr"],
        ["code.205.kr", "https://code.205.kr"],
        ["엔트리.org", "https://xn--oy2b95t44j.org/"],
        ["유저찾기.엔트리.org", "https://xn--ok0bx68bhtav5k.xn--oy2b95t44j.org/"],
      ],
    },
    {
      h: "채널",
      items: [
        ["유튜브", "https://www.youtube.com/channel/UC8_yUqU2HnNkWBYfXhlWcWQ"],
        ["디스코드", "https://discord.gg/Ps7m8QrKn6"],
        ["카카오톡", "https://open.kakao.com/o/gqHqTTuc"],
        ["밴드", "https://band.us/@entryband"],
        ["205.kr", "https://205.kr"],
      ],
    },
  ];

  return (
    <footer style={{
      background: "var(--ink)", color: "var(--bg)",
      padding: "64px 0 36px",
      marginTop: 40,
    }}>
      <div className="wrap">
        <div style={{
          display: "grid", gridTemplateColumns: "1.4fr repeat(4, 1fr)",
          gap: 40, marginBottom: 48,
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <LogoMark />
              <span style={{ fontSize: 18, fontWeight: 800 }}>205<span style={{ color: "var(--brand)" }}>.</span>kr</span>
            </div>
            <p style={{ marginTop: 14, color: "rgba(255,255,255,0.6)", fontSize: 14, maxWidth: 280 }}>
              엔트리를 위한 도구를 만드는 이영호(205). 확장프로그램, 웹 서비스, 도서로 엔트리 창작 경험을 조금씩 넓혀갑니다.
            </p>
          </div>
          {cols.map(col => (
            <div key={col.h}>
              <div style={{ fontSize: 12, fontFamily: "var(--mono)", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", marginBottom: 14, textTransform: "uppercase" }}>{col.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {col.items.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} target={href.startsWith("#") ? undefined : "_blank"} rel="noreferrer" style={{
                      fontSize: 13, color: "rgba(255,255,255,0.85)",
                    }}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24,
          fontSize: 12, color: "rgba(255,255,255,0.5)",
          fontFamily: "var(--mono)",
          display: "grid", gap: 10,
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 8,
          }}>
            <span>© 205 · entry tools collection</span>
            <span>contact · 205@205.kr</span>
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.55 }}>
            이 페이지에 사용된 엔트리 블록 이미지는{" "}
            <a href="https://playentry.org/" target="_blank" rel="noreferrer"
               style={{ color: "inherit", textDecoration: "underline" }}>
              © NAVER Connect Foundation
            </a>
            이며{" "}
            <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noreferrer"
               style={{ color: "inherit", textDecoration: "underline" }}>
              CC BY 2.0
            </a>
            {" "}라이선스에 따라 출처를 표시합니다. Some Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Footer });
