import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./Components/App";
import SideBarProvider from "./Contexts/SideBarContext";
import ThemeProvider from "./Contexts/ThemeContext";
import SnackBarProvider from "./Contexts/SnackBarContext";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <SnackBarProvider>
        <SideBarProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </SideBarProvider>
      </SnackBarProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
