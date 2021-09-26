import React from "react";

import "./Header.scss";
import Burger from "../Atoms/Burger";
import ThemeSwitch from "../Atoms/ThemeSwitch";

const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <Burger />
      <ThemeSwitch />
    </header>
  );
};

export default Header;
