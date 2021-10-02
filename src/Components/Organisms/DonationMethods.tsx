import React from "react";

import "./DonationMethods.scss";
import { getDonationMethods } from "../../Services/DataService";
import DonationMethod from "../Molecules/DonationMethod";

interface Props {}

const DonationMethods: React.FC<Props> = (props) => {
  const donationMethods = getDonationMethods();

  return (
    <div className="donation-methods">
      {donationMethods.map((donationMethod) => (
        <DonationMethod
          key={donationMethod.id}
          name={donationMethod.name}
          type={donationMethod.type}
          comment={donationMethod.comment}
          linkUrl={donationMethod.linkUrl}
          isLink={donationMethod.isLink}
        />
      ))}
    </div>
  );
};

export default DonationMethods;
