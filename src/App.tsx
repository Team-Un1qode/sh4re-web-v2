import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./theme/theme";
import Router from "./Router";

const themes = {
  dark: darkTheme,
  light: lightTheme,
};
type Theme = keyof typeof themes;
const keysOfThemes = Object.keys(themes) as Theme[];

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    return (
      saved && keysOfThemes.includes(saved as Theme) ? saved : "dark"
    ) as Theme;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <div
        style={{
          position: "fixed",
          top: 580,
          left: 16,
          zIndex: 9999,
          padding: 12,
          background: "#eee",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {keysOfThemes.map((key) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            style={{
              marginRight: 8,
              padding: 8,
              background: theme === key ? "#ccc" : "#fff",
              border: "1px solid #999",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {key}
          </button>
        ))}
      </div>
      <Router />
    </ThemeProvider>
  );
}

export default App;
