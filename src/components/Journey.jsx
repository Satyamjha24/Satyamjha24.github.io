import { useState } from "react";
import { useTheme } from "../context/Themecontext";
import Experience from "./Experience";
import Education from "./Education";

const Journey = ({ sectionRef, isVisible }) => {
  const { t } = useTheme();
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section
      id="journey"
      ref={sectionRef}
      style={{ padding: "80px clamp(16px, 8vw, 120px)", position: "relative", overflow: "hidden" }}
    >
      <div className="glow-orb" style={{ width: "350px", height: "350px", background: t.accentGlow, bottom: 0, right: 0 }} />

      <div className={`fade-in ${isVisible ? "visible" : ""}`} style={{ position: "relative", zIndex: 1 }}>
        <p className="section-label">My journey</p>
        <h2 className="section-title" style={{ marginBottom: "32px" }}>
          Experience & <span className="gradient-text">Education</span>
        </h2>

        {/* Tab Toggle */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}>
          <button
            className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            💼 Experience
          </button>
          <button
            className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            🎓 Education
          </button>
        </div>

        {activeTab === "experience" && <Experience />}
        {activeTab === "education"  && <Education />}
      </div>
    </section>
  );
};

export default Journey;
