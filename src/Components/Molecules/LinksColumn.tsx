import React from "react";

import "./LinksColumn.scss";
import ContactLink from "./ContactLink";
import { getContactMethods } from "../../Services/DataService";

/**
 * Renders a column of links with contact information
 *
 * @return {*}  {JSX.Element}
 */
const LinksColumn: React.FC = (): JSX.Element => {
  const contactMethods = getContactMethods();

  return (
    <div className="links-column">
      {contactMethods
        .filter(
          (contactMethod) =>
            !document.referrer.includes(contactMethod.name.toLowerCase())
        )
        .map((contactMethod) => (
          <ContactLink
            key={contactMethod.id}
            name={contactMethod.name}
            url={contactMethod.url}
          />
        ))}
    </div>
  );
};

export default LinksColumn;
