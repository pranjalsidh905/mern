import { Route, Routes } from "react-router";
import Header from "./Component/Header";
import Home from "./Component/Home";
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  );
};
export default PublicRoutes;
