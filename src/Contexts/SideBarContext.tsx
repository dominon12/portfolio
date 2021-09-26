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
