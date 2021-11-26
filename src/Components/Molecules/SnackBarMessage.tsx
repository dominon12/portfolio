import React from "react";

import "./SnackBarMessage.scss";
import { SnackBarMessageColor } from "../../Contexts/SnackBarContext";

interface Props {
  color: SnackBarMessageColor;
  delay: number;
}

/**
 * Snackbar message in different colors
 * with fade-in and fade-out animations.
 *
 * @return {*}  {JSX.Element}
 */
const SnackBarMessage: React.FC<Props> = (props): JSX.Element => {
  return (
    <div
      className={`snackbar-message ${props.color}`}
      style={{
        animation: `fade-in 200ms ease-in-out 0s 1, fade-out 200ms ease-in-out ${
          props.delay - 200
        }ms 1`,
      }}
    >
      {props.children}
    </div>
  );
};

export default SnackBarMessage;
