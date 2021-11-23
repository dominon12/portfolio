import React, { createContext, useEffect, useState } from "react";

export enum Mode {
  Light = "light",
  Dark = "dark",
}

export interface ThemeContextState {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const contextDefaultValues: ThemeContextState = {
  mode: Mode.Dark,
  setMode: () => {},
};

export const ThemeContext =
  createContext<ThemeContextState>(contextDefaultValues);

const ThemeProvider: React.FC = (props) => {
  const localStorageKey = "mode";

  const getInitialMode = () => {
    const initialMode =
      (localStorage.getItem(localStorageKey) as Mode) ?? Mode.Dark;
    return initialMode;
  };

  const [mode, setMode] = useState<Mode>(getInitialMode());

  useEffect(() => {
    if (mode) {
      // save mode value to local storage
      localStorage.setItem(localStorageKey, mode);

      // replace body's class with new mode
      document.body.classList.value = mode;

      // change <meta name="color-scheme"> for native inputs
      const colorScheme = document.getElementById(
        "colorScheme"
      ) as HTMLMetaElement;
      if (colorScheme) colorScheme.content = mode;
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
