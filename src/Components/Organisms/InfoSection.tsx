import React, { ReactElement } from "react";

import "./InfoSection.scss";

interface Props {
  left: ReactElement;
  right: ReactElement;
  leftContainerClassName?: string;
  rightContainerClassName?: string;
}

const InfoSection: React.FC<Props> = (props) => {
  return (
    <div className="info">
      <div
        className={`info__left ${
          props.leftContainerClassName && props.leftContainerClassName
        }`}
      >
        {props.left}
      </div>
      <div
        className={`info__right ${
          props.rightContainerClassName && props.rightContainerClassName
        }`}
      >
        {props.right}
      </div>
    </div>
  );
};

export default InfoSection;
