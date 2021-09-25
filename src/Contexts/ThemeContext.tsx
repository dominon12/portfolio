import React, { createContext, useEffect, useState } from "react";

// saved mode
type Mode = "light" | "dark" | "system";
// visual themes
type Theme = "light" | "dark";

export interface ThemeContextState {
  mode: Mode;
  theme: Theme;
  setMode: (mode: Mode) => void;
}

const contextDefaultValues: ThemeContextState = {
  mode: "system",
  theme: "light",
  setMode: () => {},
};

export const ThemeContext =
  createContext<ThemeContextState>(contextDefaultValues);

const ThemeProvider: React.FC = (props) => {
  const localStorageKey = "mode";

  const getInitialMode = () => {
    const initialMode =
      (localStorage.getItem(localStorageKey) as Mode) ?? "system";
    return initialMode;
  };

  const [mode, setMode] = useState<Mode>(getInitialMode());

  const getInitialTheme = () => {
    if (mode !== "system") return mode;
    const isSystemInDarkMode = matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return isSystemInDarkMode ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    if (mode) localStorage.setItem(localStorageKey, mode);

    if (mode !== "system") {
      setTheme(mode);
      return;
    }

    const isSystemInDarkMode = matchMedia("(prefers-color-scheme: dark)");
    setTheme(isSystemInDarkMode.matches ? "dark" : "light");

    // Define an event listener to track down system mode changes
    const listener = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };
    isSystemInDarkMode.addListener(listener);

    // unsubscribe
    return () => {
      isSystemInDarkMode.removeListener(listener);
    };
  }, [mode]);

  useEffect(() => {
    if (theme) {
      // replace body's class with new theme
      document.body.classList.value = theme;

      // change <meta name="color-scheme"> for native inputs
      const colorScheme = document.getElementById(
        "colorScheme"
      ) as HTMLMetaElement;
      if (colorScheme) colorScheme.content = theme;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ mode, theme, setMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
