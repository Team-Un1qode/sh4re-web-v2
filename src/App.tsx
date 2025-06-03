import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./theme/GlobalStyles";
import { defaultTheme, darkTheme } from "./theme/theme";
import Router from "./Router";

const themes = {
  default: defaultTheme,
  dark: darkTheme,
};
type Theme = keyof typeof themes;
const keysOfThemes = Object.keys(themes) as Theme[];

function App() {
  const [theme, setTheme] = useState<Theme>("default");

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
