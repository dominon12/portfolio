import React, { useContext, useRef, useState } from "react";

import "./Header.scss";
import Burger from "../Atoms/Burger";
import ThemeSwitch from "../Atoms/ThemeSwitch";
import useScrollPosition from "../../Hooks/useScrollPosition";
import { SideBarContext } from "../../Contexts/SideBarContext";

/**
 * Renders a header element with burger
 * to open a side bar and a theme switch icon
 * to change the theme
 *
 * @return {*}  {JSX.Element}
 */
const Header: React.FC = (): JSX.Element => {
  const headerRef = useRef<any>(null);
  const [visible, setVisible] = useState(true);
  const { setVisible: setSideBarVisible } = useContext(SideBarContext);

  /**
   * IF user scrolled to bottom more than
   * the header's height, hide the header.
   *
   * If user started scrolling up, show it.
   */
  useScrollPosition((scrollPosition) => {
    const headerHeight = headerRef.current.offsetHeight;

    const scrolledDownMoreThanHeaderHeight =
      scrollPosition.current.y > headerHeight;

    if (scrolledDownMoreThanHeaderHeight) {
      setVisible(false);
      setSideBarVisible(false);
    }

    if (scrollPosition.directionY === "up") setVisible(true);
  });

  return (
    <header
      ref={headerRef}
      className={`header ${visible ? "visible" : "hidden"}`}
      id="header"
    >
      <Burger />
      <ThemeSwitch />
    </header>
  );
};

export default Header;
