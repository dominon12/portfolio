import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Types";

import "./Footer.scss";

/**
 * Simple footer with a full name
 * and a license information.
 *
 * @return {*}  {JSX.Element}
 */
const Footer: React.FC = (): JSX.Element => {
  const profile = useSelector((state: RootState) => state.about.data);
  const fullName = `${profile?.firstName} ${profile?.lastName}`;

  return (
    <footer className="footer">
      <span className="footer__author">{fullName}</span>
      <div className="footer__copyleft">©</div>
      <span className="footer__license">GNU GPLv3</span>
    </footer>
  );
};

export default Footer;
