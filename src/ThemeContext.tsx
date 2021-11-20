import React, { createContext, FC, useState } from "react";

export type Theme = "dark" | "light";

export interface ThemeProviderProps {
  theme: Theme;
  toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeProviderProps>({
  theme: "dark"
});

export const ThemeProvider: FC = props => {
  const [theme, setTheme] = useState<Theme>("dark");
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>;
};
