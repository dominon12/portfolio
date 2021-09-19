import React, { useContext, useState } from "react";
import { GiHamburgerMenu, GiSplitCross } from "react-icons/gi";
import { SideBarContext } from "../../Contexts/SideBarContext";

import "./Burger.scss";

interface Props {}

const Burger: React.FC<Props> = (props) => {
  const { visible, toggleVisible } = useContext(SideBarContext);

  const renderBurger = () =>
    visible ? (
      <GiSplitCross className="burger active" onClick={toggleVisible} />
    ) : (
      <GiHamburgerMenu className="burger inactive" onClick={toggleVisible} />
    );

  return renderBurger();
};

export default Burger;
