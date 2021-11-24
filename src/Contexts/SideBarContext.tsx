import React, { createContext, useState } from "react";

export interface SideBarContextState {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const contextDefaultValues: SideBarContextState = {
  visible: false,
  setVisible: () => {},
};

export const SideBarContext =
  createContext<SideBarContextState>(contextDefaultValues);

/**
 * Keeps side bar's state and provides an ability to
 * share and change the state to other components
 *
 * @param {*} props
 * @return {*} {{
 *    visible: boolean; - state
 *    setVisible: React.Dispatch<React.SetStateAction<boolean>>; - set state action
 * }}
 */
const SideBarProvider: React.FC = (props) => {
  const [visible, setVisible] = useState<boolean>(contextDefaultValues.visible);

  return (
    <SideBarContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {props.children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
