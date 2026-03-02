import { useTheme } from "../context/Themecontext";

const Hero = ({ sectionRef, scrollToSection }) => {
  const { t } = useTheme();

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "80px clamp(16px, 8vw, 120px) 60px",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Glow orbs */}
      <div className="glow-orb" style={{ width: "500px", height: "500px", background: t.accentGlow, top: "-100px", right: "-100px" }} />
      <div className="glow-orb" style={{ width: "300px", height: "300px", background: `${t.accentSecondary}20`, bottom: "0", left: "10%" }} />

      <div style={{ maxWidth: "900px", position: "relative", zIndex: 1 }}>
        {/* Available badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
          <div style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: "#22c55e", animation: "pulse 2s infinite",
          }} />
          <span className="mono" style={{ fontSize: ".82rem", color: t.textMuted }}>
            Available for opportunities
          </span>
        </div>

        <p style={{ fontSize: "1rem", color: t.textMuted, marginBottom: "12px", fontWeight: 500 }}>
          Hey there 👋 I'm
        </p>

        <h1 style={{ fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "8px" }}>
          Satyam Kumar
        </h1>

        <h1 style={{ fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "28px" }}>
          <span className="gradient-text">Full Stack</span> Developer
          <span className="cursor-blink" />
        </h1>

        <p style={{
          fontSize: "clamp(.95rem,2vw,1.1rem)", color: t.textMuted,
          maxWidth: "600px", lineHeight: 1.8, marginBottom: "40px", fontWeight: 400,
        }}>
          3 years of crafting fast, scalable, and visually compelling web experiences.
          I turn complex problems into clean React interfaces — from pixel-perfect UIs to
          robust REST APIs. Currently pushing boundaries at{" "}
          <span style={{ color: t.accent, fontWeight: 600 }}>Datamotive Technologies</span>,
          now venturing into Go for backend challenges.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={() => scrollToSection("projects")}>
            🚀 View My Work
          </button>
          <button className="btn-ghost" onClick={() => scrollToSection("contact")}>
            💬 Let's Talk
          </button>
          <a href="https://github.com/Satyamjha24" target="_blank" rel="noreferrer">
            <button className="btn-ghost">🐙 GitHub</button>
          </a>
          <a href="https://www.linkedin.com/in/satyamjha24" target="_blank" rel="noreferrer">
            <button className="btn-ghost">💼 LinkedIn</button>
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "32px", marginTop: "56px", flexWrap: "wrap" }}>
          {[
            { num: "3+", label: "Years Experience" },
            { num: "10+", label: "Technologies" },
            { num: "15+", label: "Projects Built" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="mono" style={{ fontSize: "2rem", fontWeight: 800, color: t.accent }}>
                {num}
              </div>
              <div style={{ fontSize: ".8rem", color: t.textMuted, fontWeight: 500, marginTop: "2px" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
