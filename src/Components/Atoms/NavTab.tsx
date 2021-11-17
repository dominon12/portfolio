import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./NavTab.scss";
import { ITab } from "../../Types/Types";
import Tooltip from "./Tooltip";

interface Props {
  tabData: ITab;
}

const NavTab: React.FC<Props> = (props) => {
  const { pathname } = useLocation();

  const isTabActive = (tabLink: string) => pathname === tabLink;

  return (
    <Tooltip position="right" content={props.tabData.title} hideOnMobile>
      <Link
        to={props.tabData.link}
        className={`nav-tab ${
          isTabActive(props.tabData.link) ? "active" : "inactive"
        }`}
        title={props.tabData.title}
      >
        {<props.tabData.icon className="nav-tab__icon" />}
        <span className="nav-tab__title">{props.tabData.title}</span>
      </Link>
    </Tooltip>
  );
};

export default NavTab;
