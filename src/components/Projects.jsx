import { useTheme } from "../context/Themecontext";
import { PROJECTS } from "../data/index";

const ProjectCard = ({ project }) => {
  const { t } = useTheme();

  return (
    <div className="proj-card">
      {/* Gradient accent bar */}
      <div style={{ height: "4px", borderRadius: "4px", marginBottom: "24px", background: project.gradient }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
        <span style={{ fontSize: "2rem" }}>{project.emoji}</span>
        <span className="tag">{project.type}</span>
      </div>

      <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "4px" }}>{project.title}</h3>
      <p style={{ fontSize: ".8rem", color: t.accent, fontWeight: 600, marginBottom: "12px" }}>{project.subtitle}</p>
      <p style={{ fontSize: ".88rem", color: t.textMuted, lineHeight: 1.75, marginBottom: "20px" }}>
        {project.description}
      </p>

      {/* Stack tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
        {project.stack.map((s) => <span key={s} className="tag">{s}</span>)}
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        <a href={project.live} target="_blank" rel="noreferrer">
          <button className="btn-primary" style={{ padding: "9px 18px", fontSize: ".78rem" }}>
            🌐 Live Demo
          </button>
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          <button className="btn-ghost" style={{ padding: "8px 18px", fontSize: ".78rem" }}>
            🐙 Code
          </button>
        </a>
      </div>
    </div>
  );
};

const Projects = ({ sectionRef, isVisible }) => {
  const { t } = useTheme();

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ padding: "80px clamp(16px, 8vw, 120px)", position: "relative" }}
    >
      <div className={`fade-in ${isVisible ? "visible" : ""}`}>
        <p className="section-label">What I've built</p>
        <h2 className="section-title" style={{ marginBottom: "12px" }}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p style={{ color: t.textMuted, marginBottom: "48px", maxWidth: "500px", lineHeight: 1.7 }}>
          Full-stack projects built with real-world scale in mind — auth, carts, filters, and more.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "24px",
        }}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Coming soon placeholder */}
        <div style={{
          marginTop: "40px", padding: "28px", borderRadius: "16px",
          border: `1px dashed ${t.border}`, textAlign: "center", color: t.textMuted,
        }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>🚧</div>
          <p style={{ fontSize: ".9rem" }}>More projects coming soon...</p>
          <p style={{ fontSize: ".8rem", marginTop: "4px" }}>
            Check{" "}
            <a href="https://github.com/Satyamjha24" target="_blank" rel="noreferrer"
              style={{ color: t.accent, textDecoration: "none", fontWeight: 600 }}>
              GitHub
            </a>{" "}
            for latest work
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
