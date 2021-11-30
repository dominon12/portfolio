import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./Components/App";
import SideBarProvider from "./Contexts/SideBarContext";
import ThemeProvider from "./Contexts/ThemeContext";
import SnackBarProvider from "./Contexts/SnackBarContext";
import ShareModalProvider from "./Contexts/ShareModalContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <SnackBarProvider defaultDelay={3500}>
      <SideBarProvider>
        <ShareModalProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ShareModalProvider>
      </SideBarProvider>
    </SnackBarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
