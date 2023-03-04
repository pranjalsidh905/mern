import { Route, Routes } from "react-router";
import Home from "./component/Home";

const PublicRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default PublicRouters;
