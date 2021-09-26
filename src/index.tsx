import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./Components/Templates/App";
import SideBarProvider from "./Contexts/SideBarContext";
import ThemeProvider from "./Contexts/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <SideBarProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </SideBarProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
