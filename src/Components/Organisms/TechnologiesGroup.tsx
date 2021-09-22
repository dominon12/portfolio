import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";

import "./TechnologiesGroup.scss";
import Subtitle from "../Atoms/Subtitle";
import { TechnologiesGroup as ITechnologiesGroup } from "../../Types/Types";

interface Props {
  technologiesGroup: ITechnologiesGroup;
}

const TechnologiesGroup: React.FC<Props> = (props) => {
  const progressLevelNames = [
    "Beginner",
    "Elementary",
    "Intermediate",
    "Advanced",
    "Expert",
  ];

  return (
    <div className="technologies-group">
      <table className="technologies-group__table">
        <caption className="technologies-group__table_caption">
          <Subtitle className="technologies-group__title">
            {props.technologiesGroup.name}
          </Subtitle>
        </caption>
        <thead className="technologies-group__table_head">
          <tr>
            <th></th>
            {progressLevelNames.map((scaleName) => (
              <th>
                <div className="technologies-group__scale-name">
                  {scaleName}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="technologies-group__table_body">
          {props.technologiesGroup.technologies
            .sort((a, b) => b.level - a.level)
            .map((technology) => (
              <tr>
                <td>
                  <div className="technologies-group__technology-name">
                    {technology.name}
                  </div>
                </td>
                {progressLevelNames.map((_, index) => (
                  <td className="technologies-group__technology-level-cell">
                    {technology.level > index && (
                      <div className="technologies-group__filled-cell">
                        <AiOutlineFileDone className="technologies-group__filled-cell_icon" />
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

export default TechnologiesGroup;
