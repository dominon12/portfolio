import React from "react";

import "./Footer.scss";
import { getAbout } from "../../Services/DataService";

/**
 * Simple footer with a full name
 * and a license information.
 *
 * @return {*}  {JSX.Element}
 */
const Footer: React.FC = (): JSX.Element => {
  const about = getAbout();
  const fullName = `${about.firstName} ${about.lastName}`;

  return (
    <footer className="footer">
      <span className="footer__author">{fullName}</span>
      <div className="footer__copyleft">©</div>
      <span className="footer__license">GNU GPLv3</span>
    </footer>
  );
};

export default Footer;
