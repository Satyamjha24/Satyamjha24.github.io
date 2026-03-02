import { useTheme } from "../context/Themecontext";
import { SKILLS } from "../data";

const SkillBadge = ({ skill, index }) => {
  const { t } = useTheme();

  return (
    <div
      className="skill-chip"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {skill.text ? (
        <span
          style={{
            fontSize: ".65rem", fontWeight: 800,
            background: skill.color,
            color: skill.name === "JavaScript" ? "#000" : "#fff",
            padding: "2px 5px", borderRadius: "4px",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {skill.icon}
        </span>
      ) : (
        <span style={{ fontSize: "1rem" }}>{skill.icon}</span>
      )}
      {skill.name}
    </div>
  );
};

const Skills = ({ sectionRef, isVisible }) => {
  const { t } = useTheme();

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: "80px clamp(16px, 8vw, 120px)",
        position: "relative", overflow: "hidden",
      }}
    >
      <div className="glow-orb" style={{ width: "400px", height: "400px", background: `${t.accentSecondary}15`, top: 0, left: "30%" }} />

      <div className={`fade-in ${isVisible ? "visible" : ""}`} style={{ position: "relative", zIndex: 1 }}>
        <p className="section-label">What I work with</p>
        <h2 className="section-title" style={{ marginBottom: "12px" }}>
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p style={{ color: t.textMuted, marginBottom: "48px", maxWidth: "500px", lineHeight: 1.7 }}>
          A battle-tested toolkit for building modern full-stack web applications — from UI to API.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {SKILLS.map((skill, i) => (
            <SkillBadge key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
