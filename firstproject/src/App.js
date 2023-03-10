import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
// import Signup from "./components/Signup";
// import Footer from "./components/Footer";
import PublicRoutes from "./PublicRouters";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>

<Header /> 
      <Home />
      
     

      <BrowserRouter>
     
        <PublicRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
