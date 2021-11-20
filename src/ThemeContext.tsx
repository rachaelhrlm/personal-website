import { createContext } from "react";

export type Theme = "dark" | "light";

export interface ThemeProviderProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProviderProps>({
  theme: "dark",
  toggleTheme: () => console.log("click")
});
