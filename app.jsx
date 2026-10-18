import React from "react";
import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { SectionBooks } from "./components/SectionBooks.jsx";
import { SectionExtensions } from "./components/SectionExtensions.jsx";
import { SectionSites } from "./components/SectionSites.jsx";
import { SectionCollab } from "./components/SectionCollab.jsx";
import { SectionChannels } from "./components/SectionChannels.jsx";
import { About } from "./components/About.jsx";
import { Footer } from "./components/Footer.jsx";
import { Tweaks } from "./components/Tweaks.jsx";
import { ToolGuide, Questions } from "./components/Guide.jsx";
import { defaultTweaks } from "./data/site.js";

const App = () => {
  const [tweaks, setTweaks] = React.useState(typeof window === "undefined" ? defaultTweaks : (window.__TWEAKS__ || defaultTweaks));
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", tweaks.theme || "light");
    document.documentElement.setAttribute("data-density", tweaks.density || "comfortable");
  }, [tweaks.theme, tweaks.density]);

  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ToolGuide />
        <SectionBooks />
        <SectionExtensions />
        <SectionSites />
        <SectionCollab />
        <SectionChannels />
        <Questions />
        <About />
      </main>
      <Footer />
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} active={active} setActive={setActive} />
    </>
  );
};

export default App;
