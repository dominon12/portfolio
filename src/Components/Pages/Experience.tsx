import React from "react";
import { Helmet } from "react-helmet";

import "./Experience.scss";
import ExperienceLiana from "../Organisms/ExperienceLiana";
import Title from "../Atoms/Title";

const Experience: React.FC = () => {
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
