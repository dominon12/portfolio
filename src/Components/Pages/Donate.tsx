import React from "react";
import { Helmet } from "react-helmet";

import DonationMethods from "../Organisms/DonationMethods";

const Donate: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Donate | Dominon12</title>
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
