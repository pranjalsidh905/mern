import "./App.css";
import Header from "./Component/Header";
import Sign from "./Component/Sign";
import PublicRoutes from "./PublicRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
