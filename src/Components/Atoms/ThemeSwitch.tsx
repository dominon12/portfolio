import React, { useContext } from "react";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";

import "./ThemeSwitch.scss";
import { Mode, ThemeContext } from "../../Contexts/ThemeContext";
import Tooltip from "./Tooltip";

const ThemeSwitch: React.FC = () => {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <Tooltip content="Change theme" position="right" hideOnMobile>
      <div className="theme-switch">
        {mode === "light" ? (
          <FiSun
            className="theme-switch__icon"
            onClick={() => setMode(Mode.Dark)}
          />
        ) : (
          <RiMoonClearLine
            className="theme-switch__icon"
            onClick={() => setMode(Mode.Light)}
          />
        )}
      </div>
    </Tooltip>
  );
};

export default ThemeSwitch;
