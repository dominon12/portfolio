import React, { useContext } from "react";

import "./SnackBar.scss";
import { SnackBarContext } from "../../Contexts/SnackBarContext";
import SnackBarMessage from "../Molecules/SnackBarMessage";

/**
 * Describes snackbar's position
 * relative to the window.
 *
 * @interface IAnchorOrigin
 */
interface IAnchorOrigin {
  vertical?: "top" | "bottom";
  horizontal?: "left" | "right" | "center";
}

interface Props {
  anchorOrigin?: IAnchorOrigin;
}

/**
 * Shows snackbar messages in
 * desired location.
 *
 * @param {*} { anchorOrigin } - desired location relative to the window
 * @return {*}  {JSX.Element}
 */
const SnackBar: React.FC<Props> = ({ anchorOrigin }): JSX.Element => {
  const { messages } = useContext(SnackBarContext);

  return (
    <div
      className={`snackbar ${anchorOrigin?.horizontal ?? "right"} ${
        anchorOrigin?.vertical ?? "bottom"
      }`}
    >
      {messages.reverse().map((message) => (
        <SnackBarMessage
          key={message.id}
          color={message.color}
          delay={message.delay}
          action={message.action}
        >
          {message.text}
        </SnackBarMessage>
      ))}
    </div>
  );
};

export default SnackBar;
