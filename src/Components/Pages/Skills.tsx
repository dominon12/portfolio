import React from "react";
import { Helmet } from "react-helmet";

import "./Skills.scss";
import Title from "../Atoms/Title";
import SkillsTable from "../Organisms/SkillsTable";
import { getAbout, getSkills } from "../../Services/DataService";

/**
 * Page with a several tables showing
 * skills and those skills' levels
 *
 * @return {*}  {JSX.Element}
 */
const Skills: React.FC = (): JSX.Element => {
  const { nickname } = getAbout();
  const skills = getSkills();

  /**
   * Converts list of skills to SkillsTable[]
   * @returns SkillsTable[]
   */
  const renderSkills = () =>
    skills.map((skillsGroup) => (
      <SkillsTable key={skillsGroup.id} skillsGroup={skillsGroup} />
    ));

  return (
    <>
      <Helmet>
        <title>Skills | {nickname}</title>
        <meta name="description" content="A table with my skills" />
      </Helmet>
      <div className="skills">
        <Title className="skills__title">My skills</Title>
        <div className="skills__wrapper">{renderSkills()}</div>
      </div>
    </>
  );
};

export default Skills;
