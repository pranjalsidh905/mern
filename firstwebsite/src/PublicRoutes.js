import { Route, Routes } from "react-router";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Sign from "./Component/Sign";
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/header" element={<Header />} />
      <Route path="/sign" element={<Sign />} />
    </Routes>
  );
};
export default PublicRoutes;
