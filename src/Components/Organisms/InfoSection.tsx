import React, { ReactElement } from "react";

import "./InfoSection.scss";

interface Props {
  left: ReactElement;
  right: ReactElement;
}

const InfoSection: React.FC<Props> = (props) => {
  return (
    <div className="info">
      <div className="info__left">{props.left}</div>
      <div className="info__right">{props.right}</div>
    </div>
  );
};

export default InfoSection;
