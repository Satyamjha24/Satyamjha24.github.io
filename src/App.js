import { ThemeProvider, useTheme } from "./context/Themecontext";
import useGlobalStyles from "./hooks/useGlobalStyles";
import useScrollSpy from "./hooks/useScrollSpy";

import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Skills   from "./components/Skills";
import Projects from "./components/Projects";
import Journey  from "./components/Journey";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

const SECTIONS = ["about", "skills", "projects", "experience", "contact"];

const PortfolioLayout = () => {
  const { t } = useTheme();
  const { activeSection, visibleSections, setRef, scrollToSection } = useScrollSpy(SECTIONS);

  useGlobalStyles();

  return (
    <div style={{ background: t.bg, color: t.text, minHeight: "100vh", transition: "background .4s ease, color .4s ease" }}>
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main>
        <Hero
          sectionRef={setRef("about")}
          scrollToSection={scrollToSection}
        />

        <Skills
          sectionRef={setRef("skills")}
          isVisible={visibleSections["skills"]}
        />

        <Projects
          sectionRef={setRef("projects")}
          isVisible={visibleSections["projects"]}
        />

        <Journey
          sectionRef={setRef("journey")}
          isVisible={visibleSections["journey"]}
        />

        <Contact
          sectionRef={setRef("contact")}
          isVisible={visibleSections["contact"]}
        />
      </main>

      <Footer />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <PortfolioLayout />
  </ThemeProvider>
);

export default App;
