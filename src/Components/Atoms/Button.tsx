import React from "react";
import { SyncLoader } from "react-spinners";

import "./Button.scss";

interface Props {
  type: "primary";
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

/**
 * Styled button.
 *
 * @return {*}  {JSX.Element}
 */
const Button: React.FC<Props> = (props): JSX.Element => {
  return (
    <button
      className={`button hover-animation ${props.type}`}
      onClick={props.onClick}
      disabled={props.disabled || props.isLoading}
    >
      {props.isLoading ? (
        <SyncLoader color="white" size="10" />
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
