import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "./Skills.scss";
import Title from "../Atoms/Title";
import SkillsTable from "../Organisms/SkillsTable";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";
import { TechGroup } from "../../Types/ApiTypes";
import { selectTechnologies } from "../../Redux/Technologies/Selectors";
import { selectProfile } from "../../Redux/About/Selectors";

/**
 * Page with a several tables showing
 * skills and those skills' levels
 *
 * @return {*}  {JSX.Element}
 */
const Skills: React.FC = (): JSX.Element => {
  const profile = useSelector(selectProfile);
  const technologies = useSelector(selectTechnologies);

  return (
    <>
      <Helmet>
        <title>Skills | {profile.data?.nickname ?? ""}</title>
        <meta name="description" content="A table with my skills" />
      </Helmet>
      <div className="skills">
        <Title className="skills__title">My skills</Title>
        <ApiResponseTemplate
          render={() => (
            <div className="skills__wrapper">
              {(technologies.data as TechGroup[])
                .filter((skillsGroup) => skillsGroup.showAsSkill)
                .map((skillsGroup) => (
                  <SkillsTable key={skillsGroup.pk} skillsGroup={skillsGroup} />
                ))}
            </div>
          )}
          pending={technologies.pending}
          error={technologies.error}
        />
      </div>
    </>
  );
};

export default Skills;
