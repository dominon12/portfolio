import React from "react";

import "./Technologies.scss";
import Title from "../Atoms/Title";
import { getTechnologies } from "../../Services/DataService";
import TechnologiesGroup from "../Organisms/TechnologiesGroup";

const Technologies: React.FC = () => {
  const technologies = getTechnologies();

  const renderTechnologies = () =>
    technologies.map((technologiesGroup) => (
      <TechnologiesGroup
        key={technologiesGroup.id}
        technologiesGroup={technologiesGroup}
      />
    ));

  return (
    <div className="technologies">
      <Title className="technologies__title">Technologies I've learnt</Title>
      <div className="technologies__wrapper">{renderTechnologies()}</div>
    </div>
  );
};

export default Technologies;
