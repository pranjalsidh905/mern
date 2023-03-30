import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";


function App() {
  return (
    <>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
