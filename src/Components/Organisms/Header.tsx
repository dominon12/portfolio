import React from "react";

import "./Header.scss";
import Burger from "../Atoms/Burger";
import ThemeSwitch from "../Atoms/ThemeSwitch";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <header className="header">
      <Burger />
      <ThemeSwitch />
    </header>
  );
};

export default Header;
