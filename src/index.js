import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalState from "../src/components/GlobalState";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalState>
  </React.StrictMode>,
  document.getElementById("root")
);
