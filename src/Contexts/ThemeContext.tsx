import React, { createContext, useEffect, useState } from "react";

/**
 * Represents theme modes
 *
 * @export
 * @enum {string}
 */
export enum Mode {
  Light = "light",
  Dark = "dark",
}

/**
 * Theme context state representatino
 *
 * @export
 * @interface ThemeContextState
 */
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

/**
 * Provides api to get and set theme mode
 *
 * @param {*} props
 * @return {*} {{
 *    mode: Mode; - actual mode
 *    setMode: React.Dispatch<React.SetStateAction<Mode>>; - function to set mode
 * }}
 */
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
