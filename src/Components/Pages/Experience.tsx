import React from "react";
import Title from "../Atoms/Title";
import ExperienceLiana from "../Organisms/ExperienceLiana";

import "./Experience.scss";

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <Title className="experience__title">Experience</Title>
      <ExperienceLiana />
    </div>
  );
};

export default Experience;
