import React from "react";
import { Helmet } from "react-helmet";

import { getAbout } from "../../Services/DataService";
import AboutUnits from "../Organisms/AboutUnits";

/**
 * About page with sections which represent
 * about units
 *
 * @return {*}  {JSX.Element}
 */
const About: React.FC = (): JSX.Element => {
  const aboutData = getAbout();

  return (
    <>
      <Helmet>
        <title>About | {aboutData.nickname}</title>
        <meta
          name="description"
          content="Welcome to my personal website portfolio! On the about page you can read some information about me as a person and as a developer."
        />
      </Helmet>
      <AboutUnits aboutUnits={aboutData.aboutUnits} />
    </>
  );
};

export default About;
