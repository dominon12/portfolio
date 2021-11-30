import React from "react";

import "./Subtitle.scss";

interface Props {
  className?: string;
}

/**
 * Subtitle
 *
 * @return {*}  {JSX.Element}
 */
const Subtitle: React.FC<Props> = (props): JSX.Element => {
  return (
    <h2 className={`subtitle ${props.className ?? ""}`}>{props.children}</h2>
  );
};

export default Subtitle;
