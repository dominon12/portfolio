import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import AboutUnits from "../Organisms/AboutUnits";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";
import { selectProfile } from "../../Redux/About/Selectors";
import { Profile } from "../../Types/ApiTypes";

/**
 * About page with sections which represent
 * about units
 *
 * @return {*}  {JSX.Element}
 */
const About: React.FC = (): JSX.Element => {
  const profile = useSelector(selectProfile);

  return (
    <ApiResponseTemplate
      render={() => (
        <>
          <Helmet>
            <title>About | {profile.data?.nickname}</title>
            <meta
              name="description"
              content="Welcome to my personal website portfolio! On the about page you can read some information about me as a person and as a developer."
            />
          </Helmet>
          <AboutUnits aboutUnits={(profile.data as Profile).aboutUnits} />
        </>
      )}
      pending={profile.pending}
      error={profile.error}
    />
  );
};

export default About;
