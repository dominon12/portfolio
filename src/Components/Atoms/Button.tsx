import React from "react";

import "./Button.scss";

interface Props {
  type: "primary" | "mini";
  onClick: () => void;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button className={`button ${props.type}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
