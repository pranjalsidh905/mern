import { Route, Routes } from "react-router";
// import Home from "./Components/Home";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import StopWatch from "./Components/StopWatch";
import Admin from "./Components/Admin";
import DashBord from "./Components/DashBord";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/header" element={<Header />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/stop-watch" element={<StopWatch />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/dashbord" element={<DashBord />} />
    </Routes>
  );
};
export default PublicRoutes;
