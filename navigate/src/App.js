import "./App.css";

import  PublicRoutes from "./PublicRoutes";
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
