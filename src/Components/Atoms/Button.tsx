import React from "react";

import "./Button.scss";

interface Props {
  type: "primary" | "mini";
}

const Button: React.FC<Props> = (props) => {
  return <button className={`button ${props.type}`}>{props.children}</button>;
};


export default Button;
