import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./Components/Templates/App";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
