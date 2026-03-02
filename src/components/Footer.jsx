import { useTheme } from "../context/Themecontext";

const FOOTER_LINKS = [
  { icon: "🐙", href: "https://github.com/Satyamjha24" },
  { icon: "💼", href: "https://www.linkedin.com/in/satyamjha24" },
  { icon: "📧", href: "mailto:jhasatyam0118@gmail.com" },
];

const Footer = () => {
  const { t } = useTheme();

  return (
    <footer
      style={{
        padding: "24px clamp(16px, 8vw, 120px)",
        borderTop: `1px solid ${t.border}`,
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "12px",
      }}
    >
      <div className="mono" style={{ fontWeight: 700, fontSize: ".9rem", color: t.accent }}>
        {"<SJ />"}
      </div>

      <p style={{ fontSize: ".8rem", color: t.textMuted }}>
        Designed & Built by{" "}
        <span style={{ color: t.accent, fontWeight: 600 }}>Satyam Kumar</span> · {new Date().getFullYear()}
      </p>

      <div style={{ display: "flex", gap: "10px" }}>
        {FOOTER_LINKS.map(({ icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "1.1rem", padding: "7px 10px", borderRadius: "8px",
              background: t.bgCard, border: `1px solid ${t.border}`,
              textDecoration: "none", transition: "all .3s ease", display: "inline-block",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
