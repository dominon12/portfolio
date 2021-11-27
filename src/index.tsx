import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./Components/App";
import SideBarProvider from "./Contexts/SideBarContext";
import ThemeProvider from "./Contexts/ThemeContext";
import SnackBarProvider from "./Contexts/SnackBarContext";
import ShareModalProvider from "./Contexts/ShareModalContext";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <SnackBarProvider defaultDelay={3500}>
        <SideBarProvider>
          <ShareModalProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </ShareModalProvider>
        </SideBarProvider>
      </SnackBarProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
