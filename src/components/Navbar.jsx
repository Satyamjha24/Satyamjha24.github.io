import { useState } from "react";
import { useTheme } from "../context/Themecontext";
import { NAV_LINKS, RESUME_LINK } from "../data/index";

const Navbar = ({ activeSection, scrollToSection }) => {
  const { t, dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (link) => {
    if (link === "Resume") {
      window.open(RESUME_LINK, "_blank");
      setMenuOpen(false);
      return;
    }
    scrollToSection(link.toLowerCase());
    setMenuOpen(false);
  };

  const getActiveLabel = () => {
    if (activeSection === "experience") return "Journey";
    return activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: t.navBg, backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${t.border}`,
          padding: "0 clamp(16px, 5vw, 80px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <div className="mono" style={{ fontWeight: 700, fontSize: "1rem", color: t.accent }}>
          {"<SJ />"}
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className={`nav-link ${getActiveLabel() === link ? "active" : ""}`}
              onClick={() => handleNav(link)}
            >
              {link}
            </button>
          ))}
          <button className="nav-resume" onClick={() => handleNav("Resume")}>
            📄 Resume
          </button>
        </div>

        {/* Right side controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button className="toggle-btn" onClick={toggle} title="Toggle theme">
            <span>{dark ? "☀️" : "🌙"}</span>
            <span style={{ fontSize: ".75rem", color: t.textMuted, fontFamily: "'Sora',sans-serif" }}>
              {dark ? "Light" : "Dark"}
            </span>
          </button>
          <button
            className="mobile-menu-btn"
            style={{ background: "none", border: "none", cursor: "pointer", color: t.text, fontSize: "1.4rem", display: "none" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <div
          className="mobile-nav"
          style={{
            position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99,
            background: t.bgCard, borderBottom: `1px solid ${t.border}`,
            padding: "16px", display: "flex", flexDirection: "column", gap: "6px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className={`nav-link ${getActiveLabel() === link ? "active" : ""}`}
              onClick={() => handleNav(link)}
              style={{ textAlign: "left" }}
            >
              {link}
            </button>
          ))}
          <button className="nav-resume" onClick={() => handleNav("Resume")} style={{ alignSelf: "flex-start", marginTop: "4px" }}>
            📄 Resume
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
