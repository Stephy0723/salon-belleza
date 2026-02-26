import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./app/App";
import "./shared/styles/global.css";
import "./shared/styles/siteLayout.css";
import "./shared/styles/home.css";
import "./shared/styles/services.css";
import "./shared/styles/about.css";
import "./shared/styles/contact.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

