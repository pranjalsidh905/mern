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
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Step1" component={<Step1 />} />
      <Route path="/step2" component={<Step2 />} />
      <Route path="/step3" component={<Step3 />} />
      <Route path="/step4" component={<Step4 />} />
      <Route path="/step5" component={<Step5 />} />
      <Route path="/step6" component={<Step6 />} />
      <Route path="/header" element={<Header />} />
      <Route path="/sign" element={<Sign />} />
    </Routes>
  );
};
export default PublicRoutes;
