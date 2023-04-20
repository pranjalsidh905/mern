import { Route, Routes } from "react-router";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Sign from "./Component/Sign";
import Step1 from "./Component/Step1";
import Step2 from "./Component/Step2";
import Step3 from "./Component/Step3";
import Step4 from "./Component/Step4";
import Step5 from "./Component/Step5";
import Step6 from "./Component/Step6";
import Step6_Verify from "./Component/Step6_Verify";
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step3" element={<Step3 />} />
      <Route path="/step4" element={<Step4 />} />
      <Route path="/step5" element={<Step5 />} />
      <Route path="/step6" element={<Step6 />} />
      <Route path="/step6_Verify" element={<Step6_Verify />} />
      <Route path="/header" element={<Header />} />
      <Route path="/sign" element={<Sign />} />
    </Routes>
  );
};
export default PublicRoutes;
