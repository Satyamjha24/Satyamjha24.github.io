import { useTheme } from "../context/Themecontext";
import { EDUCATION } from "../data";

const EducationCard = ({ edu, index }) => {
  const { t } = useTheme();

  return (
    <div style={{ position: "relative" }}>
      <div className={`timeline-dot ${index > 0 ? "timeline-dot-pink" : ""}`} style={{ top: "18px" }} />
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
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{edu.degree}</h3>
            <p style={{ color: t.accent, fontWeight: 600, fontSize: ".93rem", marginTop: "3px" }}>
              {edu.institute}
            </p>
          </div>
          <span className={`tag-${edu.tagClass === "pink" ? "pink" : ""} tag`}>
            {edu.tag}
          </span>
        </div>

        <p style={{ color: t.textMuted, fontSize: ".88rem", lineHeight: 1.8 }}>
          {edu.description}
        </p>

        {edu.stack.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px" }}>
            {edu.stack.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
        )}
      </div>
    </div>
  );
};

const Education = () => {
  const { t } = useTheme();

  return (
    <>
      <div className="timeline-wrap" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div className="timeline-line" />
        {EDUCATION.map((edu, i) => (
          <EducationCard key={edu.degree} edu={edu} index={i} />
        ))}
      </div>

      {/* Story callout */}
      <div style={{
        marginTop: "24px", padding: "20px 24px", borderRadius: "16px",
        background: `linear-gradient(135deg, ${t.accent}12, ${t.accentSecondary}08)`,
        border: `1px solid ${t.accent}25`,
      }}>
        <p style={{ fontSize: ".88rem", color: t.textMuted, lineHeight: 1.8 }}>
          💡{" "}
          <strong style={{ color: t.text }}>From Accounts to Code</strong> — I transitioned from a
          Commerce background into Full Stack Development through sheer curiosity and hard work.
          My unconventional journey is what makes me a developer who thinks beyond just code.
        </p>
      </div>
    </>
  );
};

export default Education;
