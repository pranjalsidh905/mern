import "./App.css";
// import Header from "./components/Header";
// import Signup from "./components/Signup";
// import Footer from "./components/Footer";
import PublicRouters from "./PublicRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PublicRouters />
    </BrowserRouter>
  );
}
// function App() {
//   const userName = "pranjal";
//   return(
//     <>
//     <Header />

//     <Signup name={userName} phone={989037897} age={10} title="Signup" />
//     <Footer />

//      </>
//   );
// }

export default App;
