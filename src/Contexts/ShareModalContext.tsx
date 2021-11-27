import React, { createContext, useEffect, useState } from "react";

export interface ShareModalContextState {
  visible: boolean;
  setVisible: (nextVisible: boolean) => void;
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
 *    setVisible: (nextVisible: boolean) => void; - set state action
 * }}
 */
const ShareModalProvider: React.FC = (props) => {
  const [visible, setVisible] = useState<boolean>(contextDefaultValues.visible);

  let timeout: any;

  /**
   * Sets 'visible' state variable.
   * If 'nextVisible' param is false,
   * adds 'leave' css class to the modal
   * and to the modal content elements to
   * play leave animation.
   *
   * @param {boolean} nextVisible
   */
  const handleSetVisible = (nextVisible: boolean) => {
    if (!nextVisible) {
      const modalElement = document.querySelector(".modal");
      if (modalElement) {
        modalElement.classList.add("leave");
        modalElement.children[0].classList.add("leave");
      }

      timeout = setTimeout(() => setVisible(false), 200);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  return (
    <ShareModalContext.Provider
      value={{
        visible,
        setVisible: handleSetVisible,
      }}
    >
      {props.children}
    </ShareModalContext.Provider>
  );
};

export default ShareModalProvider;
