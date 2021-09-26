import React from "react";

import "./Skills.scss";
import Title from "../Atoms/Title";
import SkillsTable from "../Organisms/SkillsTable";
import { getSkills } from "../../Services/DataService";

const Skills: React.FC = () => {
  const skills = getSkills();

  const renderSkills = () =>
    skills.map((skillsGroup) => (
      <SkillsTable key={skillsGroup.id} skillsGroup={skillsGroup} />
    ));

  return (
    <div className="skills">
      <Title className="skills__title">My skills</Title>
      <div className="skills__wrapper">{renderSkills()}</div>
    </div>
  );
};

export default Skills;
