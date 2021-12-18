import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "./Experience.scss";
import ExperienceLiana from "../Organisms/ExperienceLiana";
import Title from "../Atoms/Title";
import { RootState } from "../../Redux/Types";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";
import { CareerEvent } from "../../Types/ApiTypes";

/**
 * Renders a page with career events
 * represented as some sort of a liana
 *
 * @return {*}  {JSX.Element}
 */
const Experience: React.FC = (): JSX.Element => {
  const profile = useSelector((state: RootState) => state.about.data);
  const {
    data: careerEvents,
    pending,
    error,
  } = useSelector((state: RootState) => state.career);

  return (
    <>
      <Helmet>
        <title>Experience | {profile?.nickname ?? ""}</title>
        <meta
          name="description"
          content="Take a look at events in my professional life. Beautiful liana - tree will help you with that!"
        />
      </Helmet>
      <div className="experience">
        <Title className="experience__title">Experience</Title>
        <ApiResponseTemplate
          render={() => (
            <ExperienceLiana careerEvents={careerEvents as CareerEvent[]} />
          )}
          pending={pending}
          error={error}
        />
      </div>
    </>
  );
};

export default Experience;
