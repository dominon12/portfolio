import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "./Experience.scss";
import ExperienceLiana from "../Organisms/ExperienceLiana";
import Title from "../Atoms/Title";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";
import { CareerEvent } from "../../Types/ApiTypes";
import { selectProfile } from "../../Redux/About/Selectors";
import { selectCareerEvents } from "../../Redux/Career/Selectors";

/**
 * Renders a page with career events
 * represented as some sort of a liana
 *
 * @return {*}  {JSX.Element}
 */
const Experience: React.FC = (): JSX.Element => {
  const profile = useSelector(selectProfile);
  const careerEvents = useSelector(selectCareerEvents);

  return (
    <>
      <Helmet>
        <title>Experience | {profile.data?.nickname ?? ""}</title>
        <meta
          name="description"
          content="Take a look at events in my professional life. Beautiful liana - tree will help you with that!"
        />
      </Helmet>
      <div className="experience">
        <Title className="experience__title">Experience</Title>
        <ApiResponseTemplate
          render={() => (
            <ExperienceLiana
              careerEvents={careerEvents.data as CareerEvent[]}
            />
          )}
          pending={careerEvents.pending}
          error={careerEvents.error}
        />
      </div>
    </>
  );
};

export default Experience;
