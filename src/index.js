import React from "react";
import ReactDOM from "react-dom/client";

import ReduxWrapper from "./Store/ReduxWrapper.tsx";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxWrapper />
  </React.StrictMode>
);
