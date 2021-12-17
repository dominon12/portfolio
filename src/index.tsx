import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./Components/App";
import SideBarProvider from "./Contexts/SideBarContext";
import ThemeProvider from "./Contexts/ThemeContext";
import SnackBarProvider from "./Contexts/SnackBarContext";
import ShareModalProvider from "./Contexts/ShareModalContext";
import store from "./Redux/Store";

ReactDOM.render(
  <Provider store={store}>
    <SnackBarProvider defaultDelay={3500}>
      <SideBarProvider>
        <ShareModalProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ShareModalProvider>
      </SideBarProvider>
    </SnackBarProvider>
  </Provider>,
  document.getElementById("root")
);
