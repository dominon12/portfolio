import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./NavTab.scss";
import { Tab } from "../../Types/Types";

interface Props {
  tabData: Tab;
}

const NavTab: React.FC<Props> = (props) => {
  const { pathname } = useLocation();

  const isTabActive = (tabLink: string) => pathname === tabLink;

  return (
    <Link
      to={props.tabData.link}
      className={`nav-tab ${
        isTabActive(props.tabData.link) ? "active" : "inactive"
      }`}
      title={props.tabData.title}
    >
      {<props.tabData.icon className="nav-tab__icon" />}
    </Link>
  );
};

export default NavTab;
