// Abstract block-coding motif primitives (NOT copying Entry's UI).
// A Block is a rounded pill with a notch on top and a tab on bottom,
// suggesting "snap-together" pieces — we use this only for visual rhythm.

const BlockShape = ({ w = 220, h = 44, color = "var(--brand)", label = "", variant = "event", style = {}, children }) => {
  // variant: event (hat, no top notch), action (top notch + bottom tab), cap (top notch, flat bottom)
  // Use SVG path; notch is 14x8 indent centered near left.
  const notchW = 16, notchH = 7, notchX = 22;
  const tabW = 16, tabH = 7, tabX = 22;

  // build path
  const r = 6;
  const paths = [];
  // top edge
  if (variant === "event") {
    // hat shape: smooth hump on top-left
    paths.push(`M ${r} 0`);
    paths.push(`L ${w - r} 0`);
  } else {
    paths.push(`M ${r} 0`);
    paths.push(`L ${notchX} 0`);
    paths.push(`L ${notchX + 3} ${notchH}`);
    paths.push(`L ${notchX + notchW - 3} ${notchH}`);
    paths.push(`L ${notchX + notchW} 0`);
    paths.push(`L ${w - r} 0`);
  }
  paths.push(`Q ${w} 0 ${w} ${r}`);
  paths.push(`L ${w} ${h - r}`);
  paths.push(`Q ${w} ${h} ${w - r} ${h}`);

  // bottom edge
  if (variant === "cap") {
    paths.push(`L ${r} ${h}`);
  } else {
    paths.push(`L ${tabX + tabW} ${h}`);
    paths.push(`L ${tabX + tabW - 3} ${h + tabH}`);
    paths.push(`L ${tabX + 3} ${h + tabH}`);
    paths.push(`L ${tabX} ${h}`);
    paths.push(`L ${r} ${h}`);
  }
  paths.push(`Q 0 ${h} 0 ${h - r}`);
  paths.push(`L 0 ${r}`);
  paths.push(`Q 0 0 ${r} 0`);
  paths.push(`Z`);

  const totalH = h + (variant !== "cap" ? tabH : 0);

  return (
    <div style={{ position: "relative", width: w, height: totalH, ...style }}>
      <svg width={w} height={totalH} viewBox={`0 0 ${w} ${totalH}`} style={{ display: "block" }}>
        <path d={paths.join(" ")} fill={color} />
      </svg>
      <div style={{
        position: "absolute", inset: 0,
        paddingTop: variant === "event" ? 2 : 8,
        paddingLeft: 18, paddingRight: 14,
        display: "flex", alignItems: "center",
        color: "white", fontWeight: 600, fontSize: 13,
        letterSpacing: "-0.01em",
        pointerEvents: "none",
      }}>
        {children || label}
      </div>
    </div>
  );
};

// Small decorative stack of 3 blocks for hero/empty states
const BlockStack = ({ items = [], scale = 1 }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, transform: `scale(${scale})`, transformOrigin: "top left" }}>
      {items.map((it, i) => (
        <div key={i} style={{ marginTop: i === 0 ? 0 : -7 }}>
          <BlockShape
            w={it.w || 220}
            color={it.color}
            variant={i === 0 ? "event" : (i === items.length - 1 ? "cap" : "action")}
          >
            {it.label}
          </BlockShape>
        </div>
      ))}
    </div>
  );
};

// A minimal "socket" badge — a rounded rect with a little tab on one side
const SocketBadge = ({ children, tone = "brand" }) => {
  const bg = tone === "brand" ? "var(--brand-soft)" : "var(--bg-2)";
  const fg = tone === "brand" ? "var(--brand-ink)" : "var(--ink-2)";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "3px 10px 3px 12px",
      background: bg, color: fg,
      borderRadius: "4px 10px 10px 4px",
      fontFamily: "var(--mono)", fontSize: 11, fontWeight: 500,
      letterSpacing: "0.02em", textTransform: "uppercase",
      position: "relative",
    }}>
      <span style={{
        width: 4, height: 4, borderRadius: 1,
        background: fg, opacity: .7,
      }} />
      {children}
    </span>
  );
};

Object.assign(window, { BlockShape, BlockStack, SocketBadge });
