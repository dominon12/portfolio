import React from "react";

import "./TechnologiesDescriptionList.scss";

interface Props {
  groupedTechnologies: any;
}

/**
 * Renders description list
 * grouped by technology groups.
 *
 * @return {*}  {JSX.Element}
 */
const TechnologiesDescriptionList: React.FC<Props> = (props): JSX.Element => {
  return (
    <dl className="description-list">
      {Object.keys(props.groupedTechnologies).map((groupName: string) => (
        <div key={groupName} className="description-list__item">
          <dt>{groupName}</dt>
          <dd>{props.groupedTechnologies[groupName].join(", ")}</dd>
        </div>
      ))}
    </dl>
  );
};

export default TechnologiesDescriptionList;
