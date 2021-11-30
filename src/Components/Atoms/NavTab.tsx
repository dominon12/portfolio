import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./NavTab.scss";
import { ITab } from "../../Types/SystemTypes";
import Tooltip from "./Tooltip";

interface Props {
  tabData?: ITab;
}

/**
 * Renders a rectangular element with
 * an icon inside if 'tabData' prop was provided.
 *
 * If 'tabData' prop wasn't passed,
 * shows a stub with a children inside.
 *
 * On mobile devices, shows tab's title
 * to the right.
 *
 * @return {*}  {JSX.Element}
 */
const NavTab: React.FC<Props> = (props): JSX.Element => {
  const { pathname } = useLocation();

  /**
   * Checks whether current pathname is equal
   * to tab's link value.
   *
   * If yes, returns true.
   * If no, returns false.
   *
   * @param {string} tabLink
   */
  const isTabActive = (tabLink: string) => pathname === tabLink;

  return props.tabData ? (
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
  ) : (
    <div className="nav-tab inactive stub">{props.children}</div>
  );
};

export default NavTab;
