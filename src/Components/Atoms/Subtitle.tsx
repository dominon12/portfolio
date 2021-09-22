import React from "react";

import "./Subtitle.scss";

interface Props {
  className?: string;
}

const Subtitle: React.FC<Props> = (props) => {
  return (
    <h2 className={`subtitle ${props.className ?? ""}`}>{props.children}</h2>
  );
};

export default Subtitle;
