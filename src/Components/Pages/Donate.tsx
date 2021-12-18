import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Types";
import { DonationMethod } from "../../Types/ApiTypes";

import DonationMethods from "../Organisms/DonationMethods";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";

/**
 * Donate page with a list of donation methods
 *
 * @return {*}  {JSX.Element}
 */
const Donate: React.FC = (): JSX.Element => {
  const profile = useSelector((state: RootState) => state.about.data);
  const {
    data: donationMethods,
    pending,
    error,
  } = useSelector((state: RootState) => state.donations);

  return (
    <>
      <Helmet>
        <title>Donate | {profile?.nickname ?? ""}</title>
        <meta
          name="description"
          content="If you like what I'm doing and want to support me, here you can donate me using different methods."
        />
      </Helmet>
      <ApiResponseTemplate
        render={() => (
          <DonationMethods
            donationMethods={donationMethods as DonationMethod[]}
          />
        )}
        pending={pending}
        error={error}
      />
    </>
  );
};

export default Donate;
