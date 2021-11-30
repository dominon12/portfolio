import React from "react";

import "./Title.scss";

interface Props {
  className?: string;
}

/**
 * Big title
 *
 * @return {*}  {JSX.Element}
 */
const Title: React.FC<Props> = (props): JSX.Element => {
  return <h1 className={`title ${props.className ?? ""}`}>{props.children}</h1>;
};

export default Title;
