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

// function App() {
//   const userName = "Ankit";
//   return (
//     <>
//       <Header />

//       <Signup name={userName} phone={1234567890} age={10} title="Singup" />

//       <Footer />
//     </>
//   );
// }

export default App;
