import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Api from "./Component/Api";
import Step1 from "./Component/Step1";
import Step2 from "./Component/Step2";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Step2 />
  </React.StrictMode>
);

reportWebVitals();
