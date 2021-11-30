import React, { useContext, useRef, useState } from "react";
import { CgCopy } from "react-icons/cg";
import { MdDoneAll } from "react-icons/md";
import {
  SnackBarContext,
  SnackBarMessageColor,
} from "../../Contexts/SnackBarContext";

import "./CopyMenu.scss";
import Input from "./Input";

interface Props {
  data: string;
}

/**
 * Provides an interface to copy 'data'
 * passed string to a clipboard
 * showing the progress by changing
 * a 'copy' icon to 'done' icon.
 *
 * @return {*}  {JSX.Element}
 */
const CopyData: React.FC<Props> = (props): JSX.Element => {
  const { sendMessage } = useContext(SnackBarContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  /**
   * Focuses on the input with data
   * to copy and copies it to user's
   * clipboard.
   *
   * Indicates copying failure with
   * a snackbar message.
   */
  const copyHandler = async () => {
    inputRef.current?.select();
    inputRef.current?.focus();

    try {
      await navigator.clipboard.writeText(props.data);
      setIsCopied(true);
    } catch {
      sendMessage("Unable to copy :(", { color: SnackBarMessageColor.WARNING });
    }
  };

  return (
    <div className="copy-menu">
      <Input ref={inputRef} value={props.data} />

      {isCopied ? (
        <MdDoneAll
          className="copy-menu__icon hover-highlight"
          onClick={() => setIsCopied(false)}
        />
      ) : (
        <CgCopy
          className="copy-menu__icon hover-highlight"
          onClick={copyHandler}
        />
      )}
    </div>
  );
};

export default CopyData;
