import React from "react";

import "./DonationMethods.scss";
import { getDonationMethods } from "../../Services/DataService";
import DonationMethod from "../Molecules/DonationMethod";

/**
 * Renders a list/grid of donation methods
 *
 * @return {*}  {JSX.Element}
 */
const DonationMethods: React.FC = (): JSX.Element => {
  const donationMethods = getDonationMethods();

  return (
    <div className="donation-methods">
      {donationMethods.map((donationMethod) => (
        <DonationMethod
          key={donationMethod.id}
          name={donationMethod.name}
          type={donationMethod.type}
          comment={donationMethod.comment}
          image={donationMethod.image}
          linkUrl={donationMethod.linkUrl}
          isLink={donationMethod.isLink}
        />
      ))}
    </div>
  );
};

export default DonationMethods;
