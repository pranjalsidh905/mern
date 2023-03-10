import { Route, Routes } from "react-router";
// import Home from "./Components/Home";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import StopWatch from "./Components/StopWatch";

const PublicRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/header" element={<Header />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/StopWatch" element={<StopWatch />} />
    </Routes>
  );
};
export default PublicRoutes;
