import React, { useContext } from "react";

import "./Burger.scss";
import { SideBarContext } from "../../Contexts/SideBarContext";

/**
 * 'Burger' element.
 *
 * Toggles sidebar visibility on click.
 *
 * @return {*}  {JSX.Element}
 */
const Burger: React.FC = (): JSX.Element => {
  const { visible, setVisible } = useContext(SideBarContext);

  /**
   * Toggles sidebar visibility.
   */
  const toggleVisible = () => setVisible((prev) => !prev);

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
