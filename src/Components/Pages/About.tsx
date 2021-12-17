import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Types";

import AboutUnits from "../Organisms/AboutUnits";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";

/**
 * About page with sections which represent
 * about units
 *
 * @return {*}  {JSX.Element}
 */
const About: React.FC = (): JSX.Element => {
  const { data, pending, error } = useSelector(
    (state: RootState) => state.about
  );

  return (
    <ApiResponseTemplate
      renderData={() =>
        data && (
          <>
            <Helmet>
              <title>About | {data.nickname}</title>
              <meta
                name="description"
                content="Welcome to my personal website portfolio! On the about page you can read some information about me as a person and as a developer."
              />
            </Helmet>
            <AboutUnits aboutUnits={data.aboutUnits} />
          </>
        )
      }
      pending={pending}
      error={error}
    />
  );
};

export default About;
