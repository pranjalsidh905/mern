import { Route, Routes } from "react-router";

import Home from "./Components/Home";
import About from "./Components/About";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
export default PublicRoutes;
