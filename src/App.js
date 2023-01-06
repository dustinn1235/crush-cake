import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="wrapper">
      <div className="App">
        <Header pathname={pathname}></Header>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

// "homepage": "http://dustinn1235.github.io/crush-cake",
