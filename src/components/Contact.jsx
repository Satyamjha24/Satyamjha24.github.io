import { useState } from "react";
import { useTheme } from "../context/Themecontext";
import { CONTACT_LINKS, FORMSPREE_ID } from "../data";

const ContactForm = () => {
  const { t } = useTheme();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      <input className="contact-input" name="name"    placeholder="Your Name"    required />
      <input className="contact-input" name="email"   placeholder="Your Email"   type="email" required />
      <textarea
        className="contact-input"
        name="message"
        placeholder="Your Message"
        rows={5}
        style={{ resize: "vertical" }}
        required
      />

      <button
        type="submit"
        className="btn-primary"
        disabled={status === "sending"}
        style={{ alignSelf: "flex-start", padding: "13px 30px" }}
      >
        {status === "sending" ? "⏳ Sending..." : "🚀 Send Message"}
      </button>

      {status === "sent" && (
        <p style={{ color: "#22c55e", fontSize: ".85rem", fontWeight: 600 }}>
          ✅ Message sent! I'll get back to you within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#ef4444", fontSize: ".85rem" }}>
          ❌ Something went wrong. Email me directly at{" "}
          <a href="mailto:jhasatyam0118@gmail.com" style={{ color: "inherit", fontWeight: 600 }}>
            jhasatyam0118@gmail.com
          </a>
        </p>
      )}

      {status === "idle" && (
        <p style={{ fontSize: ".75rem", color: t.textMuted }}>
          📬 Messages go directly to my Gmail inbox. I reply within 24 hrs.
        </p>
      )}
    </form>
  );
};

const ContactInfo = () => {
  const { t } = useTheme();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {CONTACT_LINKS.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact-card">
          <span style={{ fontSize: "1.4rem" }}>{link.icon}</span>
          <div>
            <p style={{ fontSize: ".72rem", color: t.textMuted, fontWeight: 600, letterSpacing: ".5px", textTransform: "uppercase" }}>
              {link.label}
            </p>
            <p style={{ fontSize: ".9rem", color: t.text, fontWeight: 500, marginTop: "2px" }}>
              {link.value}
            </p>
          </div>
          <span style={{ marginLeft: "auto", color: t.accent, fontSize: "1rem" }}>→</span>
        </a>
      ))}

      <div style={{
        padding: "20px", borderRadius: "14px", marginTop: "8px",
        background: `linear-gradient(135deg, ${t.accent}15, ${t.accentSecondary}10)`,
        border: `1px solid ${t.accent}30`,
      }}>
        <p style={{ fontSize: ".85rem", color: t.text, lineHeight: 1.8 }}>
          🕐 <strong>Response Time:</strong> Usually within 24 hours<br />
          📍 <strong>Location:</strong> India<br />
          💡 <strong>Open to:</strong> Full-time, Remote & Hybrid roles
        </p>
      </div>
    </div>
  );
};

const Contact = ({ sectionRef, isVisible }) => {
  const { t } = useTheme();

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: "80px clamp(16px, 8vw, 120px) 100px", position: "relative", overflow: "hidden" }}
    >
      <div className="glow-orb" style={{ width: "500px", height: "500px", background: t.accentGlow, top: "-100px", left: "-100px" }} />

      <div className={`fade-in ${isVisible ? "visible" : ""}`} style={{ position: "relative", zIndex: 1 }}>
        <p className="section-label">Get in touch</p>
        <h2 className="section-title" style={{ marginBottom: "12px" }}>
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p style={{ color: t.textMuted, marginBottom: "48px", maxWidth: "500px", lineHeight: 1.7 }}>
          Whether it's a job opportunity, a collaboration idea, or just a chat about tech —
          my inbox is always open. I'll get back to you within 24 hours.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
          gap: "40px",
        }}>
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
