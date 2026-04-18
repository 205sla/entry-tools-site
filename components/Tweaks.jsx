const Tweaks = ({ tweaks, setTweaks, active, setActive }) => {
  const setKey = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };

  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setActive(true);
      if (e.data.type === "__deactivate_edit_mode") setActive(false);
    };
    window.addEventListener("message", onMsg);
    window.parent?.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, [setActive]);

  if (!active) return null;

  return (
    <div style={{
      position: "fixed", right: 20, bottom: 20, zIndex: 100,
      width: 280, padding: 18,
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: 14,
      boxShadow: "0 24px 60px -20px rgba(0,0,0,0.25)",
      fontSize: 13,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <span style={{ fontWeight: 700, letterSpacing: "-0.01em" }}>Tweaks</span>
        <span className="mono" style={{ fontSize: 10, color: "var(--ink-3)" }}>205 · entry</span>
      </div>

      <Row label="테마">
        <Seg options={[["light","라이트"],["dark","다크"],["studio","스튜디오"]]}
             value={tweaks.theme} onChange={v => setKey("theme", v)} />
      </Row>
      <Row label="히어로 레이아웃">
        <Seg options={[["stacked","스택"],["minimal","미니멀"]]}
             value={tweaks.heroVariant} onChange={v => setKey("heroVariant", v)} />
      </Row>
      <Row label="밀도">
        <Seg options={[["comfortable","여유"],["compact","조밀"]]}
             value={tweaks.density} onChange={v => setKey("density", v)} />
      </Row>
      <Row label="블록 모티프">
        <Seg options={[[true,"on"],[false,"off"]]}
             value={tweaks.blockMotif} onChange={v => setKey("blockMotif", v)} />
      </Row>
    </div>
  );
};

const Row = ({ label, children }) => (
  <div style={{ marginBottom: 12 }}>
    <div style={{ fontSize: 11, color: "var(--ink-3)", marginBottom: 6, letterSpacing: "0.04em" }}>{label}</div>
    {children}
  </div>
);

const Seg = ({ options, value, onChange }) => (
  <div style={{
    display: "grid",
    gridTemplateColumns: `repeat(${options.length}, 1fr)`,
    gap: 4, padding: 3,
    background: "var(--bg-2)", borderRadius: 8,
  }}>
    {options.map(([v, l]) => (
      <button key={String(v)} onClick={() => onChange(v)} style={{
        padding: "6px 8px", fontSize: 12, fontWeight: 600,
        background: value === v ? "var(--surface)" : "transparent",
        border: "1px solid " + (value === v ? "var(--line)" : "transparent"),
        borderRadius: 6,
        color: value === v ? "var(--ink)" : "var(--ink-2)",
        boxShadow: value === v ? "0 1px 2px rgba(0,0,0,0.04)" : "none",
      }}>{l}</button>
    ))}
  </div>
);

Object.assign(window, { Tweaks });
