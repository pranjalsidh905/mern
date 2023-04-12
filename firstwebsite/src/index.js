import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Api from "./Component/Api";
import Step1 from "./Component/Step1";
import Step2 from "./Component/Step2";
import Step3 from "./Component/Step3";
import Step4 from "./Component/Step4";
import Step5 from "./Component/Step5";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Step5 />
  </React.StrictMode>
);

reportWebVitals();
