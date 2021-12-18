import React from "react";

import "./DonationMethods.scss";
import DonationMethod from "../Molecules/DonationMethod";
import { DonationMethod as IDonationMethod } from "../../Types/ApiTypes";

interface Props {
  donationMethods: IDonationMethod[];
}

/**
 * Renders a list/grid of donation methods
 *
 * @return {*}  {JSX.Element}
 */
const DonationMethods: React.FC<Props> = (props): JSX.Element => {

  return (
    <div className="donation-methods">
      {props.donationMethods.map((donationMethod) => (
        <DonationMethod
          key={donationMethod.pk}
          name={donationMethod.name}
          comment={donationMethod.comment}
          image={donationMethod.image}
          link={donationMethod.link}
          isLink={donationMethod.isLink}
        />
      ))}
    </div>
  );
};

export default DonationMethods;
