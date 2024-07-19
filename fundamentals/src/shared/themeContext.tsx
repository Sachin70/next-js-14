"use client";

import { createContext, ReactNode, useState, useContext } from "react";

import { Theme } from "@/utils/enums";

// Define an interface for the context value
interface ThemeContextValue {
  theme: string;
  toggleTheme: () => void;
}

// Provide a default value for the context
const defaultThemeContextValue: ThemeContextValue = {
  theme: Theme.LIGHT,
  toggleTheme: () => {},
};

// Create the context with the default value
const ThemeContext = createContext<ThemeContextValue>(defaultThemeContextValue);

interface ThemeContextProps {
  children: ReactNode;
}

export const ThemeProvider = (props: ThemeContextProps) => {
  const { children } = props;

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
