import React from "react";

import "./Header.scss";
import Burger from "../Atoms/Burger";
import ThemeSwitch from "../Atoms/ThemeSwitch";

/**
 * Renders a header element with burger
 * to open a side bar and a theme switch icon
 * to change the theme
 *
 * @return {*}  {JSX.Element}
 */
const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header" id="header">
      <Burger />
      <ThemeSwitch />
    </header>
  );
};

export default Header;
