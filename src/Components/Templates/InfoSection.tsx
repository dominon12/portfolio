import React, { ReactElement } from "react";

import "./InfoSection.scss";

interface Props {
  left: ReactElement;
  right: ReactElement;
  leftContainerClassName?: string;
  rightContainerClassName?: string;
  containerClassName?: string;
}

/**
 * Wide section template
 */
const InfoSection: React.FC<Props> = (props) => {
  return (
    <div
      className={`info-section ${
        props.containerClassName && props.containerClassName
      }`}
    >
      <div
        className={`info-section__left ${
          props.leftContainerClassName && props.leftContainerClassName
        }`}
      >
        {props.left}
      </div>
      <div
        className={`info-section__right ${
          props.rightContainerClassName && props.rightContainerClassName
        }`}
      >
        {props.right}
      </div>
    </div>
  );
};

export default InfoSection;
