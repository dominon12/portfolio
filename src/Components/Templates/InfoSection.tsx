import React, { ReactElement } from "react";
import useAppearanceInViewport from "../../Hooks/useAppearanceInViewport";

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
  const sectionRef = useAppearanceInViewport("fade-in", 300);

  return (
    <div
      ref={sectionRef}
      className={`info-section ${props.containerClassName || ""}`}
    >
      <div
        className={`info-section__left ${props.leftContainerClassName || ""}`}
      >
        {props.left}
      </div>
      <div
        className={`info-section__right ${props.rightContainerClassName || ""}`}
      >
        {props.right}
      </div>
    </div>
  );
};

export default InfoSection;
