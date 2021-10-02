import React from "react";

import "./LinksColumn.scss";
import ContactLink from "../Molecules/ContactLink";
import { getContactLinks } from "../../Services/DataService";

const LinksColumn: React.FC = () => {
  const links = getContactLinks();

  return (
    <div className="links-column">
      {links.map((link) => (
        <ContactLink key={link.id} name={link.name} url={link.url} />
      ))}
    </div>
  );
};

export default LinksColumn;
