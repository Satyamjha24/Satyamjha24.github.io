import { useEffect } from "react";
import { useTheme } from "../context/Themecontext";

const useGlobalStyles = () => {
  const { t } = useTheme();

  useEffect(() => {
    // Inject global CSS that depends on theme tokens
    const id = "portfolio-global-styles";
    let tag = document.getElementById(id);
    if (!tag) {
      tag = document.createElement("style");
      tag.id = id;
      document.head.appendChild(tag);
    }

    tag.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

      *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
      html { scroll-behavior:smooth; }
      body { font-family:'Sora',sans-serif; background:${t.bg}; color:${t.text}; transition:background .4s ease, color .4s ease; }

      ::-webkit-scrollbar { width:4px; }
      ::-webkit-scrollbar-track { background:${t.bg}; }
      ::-webkit-scrollbar-thumb { background:${t.accent}; border-radius:2px; }

      /* Animations */
      @keyframes fadeUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
      @keyframes pulse    { 0%,100% { opacity:1; } 50% { opacity:.4; } }
      @keyframes blink    { 0%,100% { opacity:1; } 50% { opacity:0; } }
      @keyframes floatIn  { to { opacity:1; } }

      /* Fade-in on scroll */
      .fade-in { opacity:0; transform:translateY(28px); transition:opacity .7s ease, transform .7s ease; }
      .fade-in.visible { opacity:1; transform:translateY(0); }

      /* Typography utils */
      .gradient-text {
        background: linear-gradient(135deg, ${t.accent}, ${t.accentSecondary});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .section-label { font-size:.75rem; font-weight:700; letter-spacing:3px; color:${t.accent}; text-transform:uppercase; margin-bottom:8px; }
      .section-title  { font-size:clamp(1.8rem,4vw,2.8rem); font-weight:800; letter-spacing:-1px; line-height:1.1; }
      .mono           { font-family:'Space Mono',monospace; }

      /* Tags */
      .tag       { background:${t.tagBg};              color:${t.tagText};           padding:4px 10px; border-radius:20px; font-size:.72rem; font-weight:600; letter-spacing:.3px; display:inline-block; }
      .tag-accent{ background:${t.accent}18;           color:${t.accent};            padding:4px 10px; border-radius:20px; font-size:.72rem; font-weight:600; display:inline-block; }
      .tag-pink  { background:${t.accentSecondary}18;  color:${t.accentSecondary};   padding:4px 10px; border-radius:20px; font-size:.72rem; font-weight:600; display:inline-block; }

      /* Buttons */
      .btn-primary {
        background:${t.accent}; color:#fff; border:none; padding:11px 24px;
        border-radius:30px; font-size:.82rem; font-weight:600; cursor:pointer;
        font-family:'Sora',sans-serif; transition:all .3s ease;
        display:inline-flex; align-items:center; gap:6px; text-decoration:none;
      }
      .btn-primary:hover { opacity:.85; transform:translateY(-2px); box-shadow:0 8px 24px ${t.accentGlow}; }

      .btn-ghost {
        background:transparent; color:${t.text}; border:1px solid ${t.border};
        padding:10px 22px; border-radius:30px; font-size:.82rem; font-weight:500;
        cursor:pointer; font-family:'Sora',sans-serif; transition:all .3s ease;
        display:inline-flex; align-items:center; gap:6px; text-decoration:none;
      }
      .btn-ghost:hover { border-color:${t.accent}; color:${t.accent}; transform:translateY(-2px); }

      /* Nav */
      .nav-link {
        background:none; border:none; cursor:pointer; font-family:'Sora',sans-serif;
        font-size:.85rem; font-weight:500; color:${t.textMuted}; padding:6px 14px;
        border-radius:20px; transition:all .25s ease; letter-spacing:.4px;
      }
      .nav-link:hover, .nav-link.active { color:${t.accent}; background:${t.accentGlow}; }
      .nav-resume {
        background:${t.accent}; color:#fff !important; border:none; cursor:pointer;
        font-family:'Sora',sans-serif; font-size:.8rem; font-weight:700;
        padding:7px 16px; border-radius:20px; transition:all .25s ease;
        display:inline-flex; align-items:center; gap:5px;
      }
      .nav-resume:hover { opacity:.85; transform:translateY(-1px); }

      /* Skill chips */
      .skill-chip {
        display:inline-flex; align-items:center; gap:6px; padding:8px 14px;
        border-radius:30px; border:1px solid ${t.border}; background:${t.bgCard};
        font-size:.8rem; font-weight:500; color:${t.text}; transition:all .3s ease;
        cursor:default; opacity:0; animation:floatIn .5s ease forwards;
      }
      .skill-chip:hover { border-color:${t.accent}; background:${t.accentGlow}; transform:translateY(-3px); box-shadow:0 8px 24px ${t.accentGlow}; }

      /* Project cards */
      .proj-card {
        background:${t.bgCard}; border:1px solid ${t.border}; border-radius:20px;
        padding:28px; transition:all .35s ease; position:relative; overflow:hidden;
      }
      .proj-card:hover { border-color:${t.borderHover}; transform:translateY(-6px); box-shadow:0 20px 50px ${t.accentGlow}; }

      /* Timeline */
      .timeline-wrap  { position:relative; padding-left:52px; }
      .timeline-line  { position:absolute; left:20px; top:0; bottom:0; width:2px; background:linear-gradient(to bottom,${t.accent},${t.accentSecondary}); }
      .timeline-dot   { width:14px; height:14px; border-radius:50%; background:${t.accent}; border:2px solid ${t.bg}; position:absolute; left:14px; top:18px; box-shadow:0 0 12px ${t.accentGlow}; }
      .timeline-dot-pink { background:${t.accentSecondary} !important; }

      /* Tab buttons */
      .tab-btn { background:none; cursor:pointer; font-family:'Sora',sans-serif; font-size:.85rem; font-weight:600; color:${t.textMuted}; padding:9px 22px; border-radius:30px; transition:all .25s ease; border:1px solid ${t.border}; }
      .tab-btn.active { color:#fff; background:${t.accent}; border-color:${t.accent}; }
      .tab-btn:not(.active):hover { border-color:${t.accent}; color:${t.accent}; }

      /* Contact */
      .contact-input { width:100%; padding:14px 18px; border-radius:12px; border:1px solid ${t.border}; background:${t.inputBg}; color:${t.text}; font-family:'Sora',sans-serif; font-size:.9rem; outline:none; transition:border .3s ease; }
      .contact-input:focus { border-color:${t.accent}; }
      .contact-input::placeholder { color:${t.textMuted}; }
      .contact-card { display:flex; align-items:center; gap:16px; padding:18px 20px; border-radius:14px; background:${t.bgCard}; border:1px solid ${t.border}; transition:all .3s ease; text-decoration:none; }
      .contact-card:hover { border-color:${t.accent}; transform:translateX(6px); }

      /* Toggle */
      .toggle-btn { background:${t.toggle}; border:1px solid ${t.border}; border-radius:30px; padding:8px 16px; cursor:pointer; font-size:1rem; transition:all .3s ease; display:flex; align-items:center; gap:6px; }
      .toggle-btn:hover { border-color:${t.accent}; }

      /* Glow orb */
      .glow-orb { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; z-index:0; }

      /* Cursor blink */
      .cursor-blink { display:inline-block; width:3px; height:.85em; background:${t.accent}; margin-left:4px; vertical-align:middle; animation:blink 1s infinite; }

      /* Responsive */
      @media (max-width:768px) {
        .desktop-nav { display:none !important; }
        .mobile-menu-btn { display:flex !important; }
      }
      @media (min-width:769px) {
        .mobile-menu-btn { display:none !important; }
        .mobile-nav { display:none !important; }
      }
    `;
  }, [t]);
};

export default useGlobalStyles;
