import React, { useContext } from "react";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";

import "./ThemeSwitch.scss";
import { ThemeContext } from "../../Contexts/ThemeContext";
import Tooltip from "./Tooltip";

const ThemeSwitch: React.FC = () => {
  const { theme, setMode } = useContext(ThemeContext);

  return (
    <Tooltip content="Change theme" position="right" hideOnMobile>
      <div className="theme-switch">
        {theme === "light" ? (
          <FiSun
            className="theme-switch__icon"
            onClick={() => setMode("dark")}
          />
        ) : (
          <RiMoonClearLine
            className="theme-switch__icon"
            onClick={() => setMode("light")}
          />
        )}
      </div>
    </Tooltip>
  );
};

export default ThemeSwitch;
