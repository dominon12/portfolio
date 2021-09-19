import React from "react";

import "./Header.scss";
import Burger from "../Atoms/Burger";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <header className="header">
      <Burger />
    </header>
  );
};

export default Header;
