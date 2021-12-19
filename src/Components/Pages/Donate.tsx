import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import { DonationMethod } from "../../Types/ApiTypes";
import DonationMethods from "../Organisms/DonationMethods";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";
import { selectProfile } from "../../Redux/About/Selectors";
import { selectDonationMethods } from "../../Redux/Donations/Selectors";

/**
 * Donate page with a list of donation methods
 *
 * @return {*}  {JSX.Element}
 */
const Donate: React.FC = (): JSX.Element => {
  const profile = useSelector(selectProfile);
  const donationMethods = useSelector(selectDonationMethods);

  return (
    <>
      <Helmet>
        <title>Donate | {profile.data?.nickname ?? ""}</title>
        <meta
          name="description"
          content="If you like what I'm doing and want to support me, here you can donate me using different methods."
        />
      </Helmet>
      <ApiResponseTemplate
        render={() => (
          <DonationMethods
            donationMethods={donationMethods.data as DonationMethod[]}
          />
        )}
        pending={donationMethods.pending}
        error={donationMethods.error}
      />
    </>
  );
};

export default Donate;
