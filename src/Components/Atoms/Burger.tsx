import React, { useContext } from "react";
import { SideBarContext } from "../../Contexts/SideBarContext";

import "./Burger.scss";

const Burger: React.FC = () => {
  const { visible, toggleVisible } = useContext(SideBarContext);

  return (
    <div
      onClick={toggleVisible}
      className={`burger ${visible ? "active" : "inactive"}`}
    >
      <div className="burger__wrapper">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
    </div>
  );
};

export default Burger;
