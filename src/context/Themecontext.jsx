import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  const toggle = () => setDark((prev) => !prev);

  const t = dark
    ? {
        dark: true,
        bg: "#0a0a0f",
        bgCard: "#13131a",
        border: "#ffffff12",
        borderHover: "#ffffff30",
        text: "#f0f0f5",
        textMuted: "#888899",
        accent: "#7c6aff",
        accentGlow: "#7c6aff40",
        accentSecondary: "#ff6b9d",
        navBg: "#0a0a0fcc",
        tagBg: "#ffffff08",
        tagText: "#aaaacc",
        toggle: "#1a1a26",
        inputBg: "#0d0d14",
      }
    : {
        dark: false,
        bg: "#f8f8ff",
        bgCard: "#ffffff",
        border: "#00000010",
        borderHover: "#7c6aff40",
        text: "#111120",
        textMuted: "#666688",
        accent: "#5b47f5",
        accentGlow: "#5b47f520",
        accentSecondary: "#e8467a",
        navBg: "#f8f8ffdd",
        tagBg: "#5b47f510",
        tagText: "#5b47f5",
        toggle: "#e8e8f5",
        inputBg: "#f0f0ff",
      };

  return (
    <ThemeContext.Provider value={{ t, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
