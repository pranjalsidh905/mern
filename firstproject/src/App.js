import "./App.css";

import Header from "./Components/Header";
// import Signup from "./components/Signup";
// import Footer from "./components/Footer";
import PublicRoutes from "./PublicRouters";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
 

      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
