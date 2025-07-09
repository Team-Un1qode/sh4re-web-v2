import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { lightTheme, darkTheme } from "./theme";

const themes = { dark: darkTheme, light: lightTheme };
type Theme = keyof typeof themes;
const keysOfThemes = Object.keys(themes) as Theme[];

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  keysOfThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderCustom = ({ children }: { children: ReactNode }) => {
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
    <ThemeContext.Provider value={{ theme, setTheme, keysOfThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme must be used within ThemeProviderCustom");
  return context;
};

export { themes };
export type { Theme };
