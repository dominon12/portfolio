import React, { createContext, useState } from "react";

export interface ShareModalContextState {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const contextDefaultValues: ShareModalContextState = {
  visible: false,
  setVisible: () => {},
};

export const ShareModalContext =
  createContext<ShareModalContextState>(contextDefaultValues);

/**
 * Keeps share modal's state and provides an ability to
 * share and change the state to other components
 *
 * @param {*} props
 * @return {*} {{
 *    visible: boolean; - state
 *    setVisible: React.Dispatch<React.SetStateAction<boolean>>; - set state action
 * }}
 */
const ShareModalProvider: React.FC = (props) => {
  const [visible, setVisible] = useState<boolean>(contextDefaultValues.visible);

  return (
    <ShareModalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {props.children}
    </ShareModalContext.Provider>
  );
};

export default ShareModalProvider;
