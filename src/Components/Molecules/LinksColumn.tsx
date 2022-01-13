import React from "react";

import "./LinksColumn.scss";
import ContactLink from "./ContactLink";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Types";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";
import { ContactMethod } from "../../Types/ApiTypes";

/**
 * Renders a column of links with contact information
 *
 * @return {*}  {JSX.Element}
 */
const LinksColumn: React.FC = (): JSX.Element => {
  const {
    data: contactMethods,
    pending,
    error,
  } = useSelector((state: RootState) => state.contact);

  return (
    <ApiResponseTemplate
      render={() => (
        <div className="links-column">
          {(contactMethods as ContactMethod[])
            .filter(
              (contactMethod) =>
                !document.referrer.includes(contactMethod.name.toLowerCase())
            )
            .map((contactMethod) => (
              <ContactLink
                key={contactMethod.pk}
                name={contactMethod.name}
                link={contactMethod.link}
              />
            ))}
        </div>
      )}
      pending={pending}
      error={error}
    />
  );
};

export default LinksColumn;
