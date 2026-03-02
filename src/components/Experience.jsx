import { useTheme } from "../context/Themecontext";
import { EXPERIENCE } from "../data";

const ExperienceCard = ({ exp }) => {
  const { t } = useTheme();

  return (
    <div style={{ position: "relative" }}>
      <div className="timeline-dot" />
      <div
        style={{
          background: t.bgCard, border: `1px solid ${t.border}`,
          borderRadius: "20px", padding: "28px",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px",
        }}>
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>{exp.role}</h3>
            <p style={{ color: t.accent, fontWeight: 600, fontSize: ".95rem", marginTop: "3px" }}>
              {exp.company}
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            {exp.current && (
              <span className="tag-accent">🟢 Currently Working</span>
            )}
            <p className="mono" style={{ fontSize: ".78rem", color: t.textMuted, marginTop: "6px" }}>
              {exp.duration}
            </p>
          </div>
        </div>

        <p style={{ color: t.textMuted, fontSize: ".9rem", lineHeight: 1.8, marginBottom: "20px" }}>
          {exp.description}
        </p>

        {/* Highlights */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {exp.highlights.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ fontSize: "1rem", flexShrink: 0 }}>{item.icon}</span>
              <p style={{ fontSize: ".87rem", color: t.textMuted, lineHeight: 1.7 }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Stack tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "20px" }}>
          {exp.stack.map((s) => <span key={s} className="tag">{s}</span>)}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="timeline-wrap" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div className="timeline-line" />
      {EXPERIENCE.map((exp) => (
        <ExperienceCard key={exp.company} exp={exp} />
      ))}
    </div>
  );
};

export default Experience;
