import React from "react";
import { Helmet } from "react-helmet";

import "./Experience.scss";
import ExperienceLiana from "../Organisms/ExperienceLiana";
import Title from "../Atoms/Title";

/**
 * Renders a page with career events 
 * represented as some sort of a liana
 *
 * @return {*}  {JSX.Element}
 */
const Experience: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Experience | Dominon12</title>
        <meta
          name="description"
          content="Take a look at events in my professional life. Beautiful liana - tree will help you with that!"
        />
      </Helmet>
      <div className="experience">
        <Title className="experience__title">Experience</Title>
        <ExperienceLiana />
      </div>
    </>
  );
};

export default Experience;
