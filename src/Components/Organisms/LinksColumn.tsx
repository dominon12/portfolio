import React from "react";

import "./LinksColumn.scss";
import ContactLink from "../Molecules/ContactLink";
import { getContactMethods } from "../../Services/DataService";

const LinksColumn: React.FC = () => {
  const contactMethod = getContactMethods();

  return (
    <div className="links-column">
      {contactMethod
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
