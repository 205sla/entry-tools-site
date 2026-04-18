const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#books", label: "도서" },
    { href: "#extensions", label: "확장프로그램" },
    { href: "#sites", label: "사이트" },
    { href: "#collab", label: "협업" },
    { href: "#channels", label: "채널" },
    { href: "#about", label: "소개" },
  ];

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "color-mix(in oklab, var(--bg) 85%, transparent)" : "transparent",
      backdropFilter: scrolled ? "blur(12px) saturate(1.2)" : "none",
      borderBottom: scrolled ? "1px solid var(--line-2)" : "1px solid transparent",
      transition: "background 200ms, border-color 200ms",
    }}>
      <div className="wrap" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoMark />
          <span style={{ fontWeight: 700, letterSpacing: "-0.02em", fontSize: 16 }}>205<span style={{ color: "var(--brand)" }}>.</span>kr</span>
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)", marginLeft: 8, letterSpacing: "0.04em" }}>/ ENTRY TOOLS</span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              padding: "8px 12px", fontSize: 14, color: "var(--ink-2)",
              borderRadius: 6,
            }} onMouseEnter={e => e.currentTarget.style.background = "var(--bg-2)"}
               onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              {l.label}
            </a>
          ))}
          <a href="https://205.kr" target="_blank" rel="noreferrer" style={{
            marginLeft: 10,
            padding: "8px 14px",
            background: "var(--ink)",
            color: "var(--bg)",
            borderRadius: 8, fontSize: 13, fontWeight: 600,
            display: "inline-flex", alignItems: "center", gap: 6,
          }}>
            205.kr ↗
          </a>
        </nav>
      </div>
    </header>
  );
};

const LogoMark = () => (
  // Abstract stacked-block mark — 3 overlapping rounded rects in brand green
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="5" width="18" height="6" rx="2" fill="var(--brand)" opacity="0.5"/>
    <rect x="5" y="11" width="20" height="6" rx="2" fill="var(--brand)" opacity="0.8"/>
    <rect x="7" y="17" width="14" height="6" rx="2" fill="var(--brand)"/>
  </svg>
);

Object.assign(window, { Nav, LogoMark });
