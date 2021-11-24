import React from "react";

import "./Button.scss";
import { ButtonType } from "../../Types/SystemTypes";

interface Props {
  type: ButtonType;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`button hover-animation ${props.type}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
