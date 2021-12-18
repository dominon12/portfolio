import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "./Skills.scss";
import Title from "../Atoms/Title";
import SkillsTable from "../Organisms/SkillsTable";
import { RootState } from "../../Redux/Types";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";
import { TechGroup } from "../../Types/ApiTypes";

/**
 * Page with a several tables showing
 * skills and those skills' levels
 *
 * @return {*}  {JSX.Element}
 */
const Skills: React.FC = (): JSX.Element => {
  const profile = useSelector((state: RootState) => state.about.data);
  const {
    data: skills,
    pending,
    error,
  } = useSelector((state: RootState) => state.technologies);

  return (
    <>
      <Helmet>
        <title>Skills | {profile?.nickname ?? ""}</title>
        <meta name="description" content="A table with my skills" />
      </Helmet>
      <div className="skills">
        <Title className="skills__title">My skills</Title>
        <ApiResponseTemplate
          render={() => (
            <div className="skills__wrapper">
              {(skills as TechGroup[]).map((skill) => (
                <SkillsTable key={skill.pk} skillsGroup={skill} />
              ))}
            </div>
          )}
          pending={pending}
          error={error}
        />
      </div>
    </>
  );
};

export default Skills;
