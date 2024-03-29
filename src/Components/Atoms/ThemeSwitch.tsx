import React, { useContext } from "react";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";

import "./ThemeSwitch.scss";
import { Mode, ThemeContext } from "../../Contexts/ThemeContext";
import Tooltip from "./Tooltip";

/**
 * Icon which represents current theme mode.
 *
 * On click changes theme mode.
 *
 * @return {*}  {JSX.Element}
 */
const ThemeSwitch: React.FC = (): JSX.Element => {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <Tooltip content="Change theme" position="right" hideOnMobile>
      <div
        role="button"
        tabIndex={0}
        title="Switch theme"
        className="theme-switch"
      >
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
