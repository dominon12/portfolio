import React, { createContext, useState } from "react";

export interface SideBarContextState {
  visible: boolean;
  toggleVisible: () => void;
}

const contextDefaultValues: SideBarContextState = {
  visible: false,
  toggleVisible: () => {},
};

export const SideBarContext =
  createContext<SideBarContextState>(contextDefaultValues);

const SideBarProvider: React.FC = (props) => {
  const [visible, setVisible] = useState<boolean>(contextDefaultValues.visible);

  const toggleVisible = () => setVisible((prev) => !prev);

  return (
    <SideBarContext.Provider
      value={{
        visible,
        toggleVisible,
      }}
    >
      {props.children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
