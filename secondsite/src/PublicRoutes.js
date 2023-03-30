import { Route, Routes } from "react-router";
import Home from "./Components/Home";
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default PublicRoutes;
