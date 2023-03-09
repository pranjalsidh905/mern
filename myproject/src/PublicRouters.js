import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default PublicRoutes;
