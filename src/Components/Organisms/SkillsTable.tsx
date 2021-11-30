import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";

import "./SkillsTable.scss";
import Subtitle from "../Atoms/Subtitle";
import { ISkillsGroup } from "../../Types/PortfolioDataTypes";

const progressLevelNames = [
  "Beginner",
  "Elementary",
  "Intermediate",
  "Advanced",
  "Expert",
];

interface Props {
  skillsGroup: ISkillsGroup;
}

/**
 * Renders a table filled with skills
 * and a level of knowing of this skills
 *
 * @return {*}  {JSX.Element}
 */
const SkillsTable: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="skills-table">
      <table className="skills-table__table">
        <caption className="skills-table__caption">
          <Subtitle className="skills-table__title">
            {props.skillsGroup.name}
          </Subtitle>
        </caption>

        <thead className="skills-table__head">
          <tr>
            <th></th>
            {progressLevelNames.map((scaleName, index) => (
              <th key={index}>
                <div className="skills-table__scale-name">{scaleName}</div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="skills-table__body">
          {props.skillsGroup.skills
            .sort((a, b) => b.level - a.level)
            .map((skill) => (
              <tr key={skill.id}>
                <td>
                  <div
                    className={`skills-table__skill-name ${
                      skill.isRelevant ? "relevant" : "irrelevant"
                    }`}
                  >
                    {skill.name}
                  </div>
                </td>
                {progressLevelNames.map((_, index) => (
                  <td key={index} className="skills-table__skill-level-cell">
                    {skill.level > index && (
                      <div className="skills-table__filled-cell">
                        <AiOutlineFileDone className="skills-table__filled-cell_icon" />
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsTable;
