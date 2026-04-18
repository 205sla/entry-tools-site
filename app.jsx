const App = () => {
  const [tweaks, setTweaks] = React.useState(window.__TWEAKS__ || {});
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", tweaks.theme || "light");
    document.documentElement.setAttribute("data-density", tweaks.density || "comfortable");
  }, [tweaks.theme, tweaks.density]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SectionBooks />
        <SectionExtensions />
        <SectionSites />
        <SectionCollab />
        <SectionChannels />
        <About />
      </main>
      <Footer />
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} active={active} setActive={setActive} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
