import React from "react";
import { Helmet } from "react-helmet";

import DonationMethods from "../Organisms/DonationMethods";
import { getAbout } from "../../Services/DataService";

/**
 * Donate page with a list of donation methods
 *
 * @return {*}  {JSX.Element}
 */
const Donate: React.FC = (): JSX.Element => {
  const { nickname } = getAbout();

  return (
    <>
      <Helmet>
        <title>Donate | {nickname}</title>
        <meta
          name="description"
          content="If you like what I'm doing and want to support me, here you can donate me using different methods."
        />
      </Helmet>
      <DonationMethods />
    </>
  );
};

export default Donate;
