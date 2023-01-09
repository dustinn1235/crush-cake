import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/home/Homepage";
import Menu from "./components/menu/Menu";
import Cakepop from "./components/menu/Cakepop";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import CustomCake from "./components/menu/CustomCake";
import Checkout from "./components/checkout/Checkout";
import { UserContext, products } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const { pathname } = useLocation();
  const themeBlue = {
    "--primary": "#b8e2f4",
    "--darkPrimary": "#6175a7",
    "--shadow": "#6175a7",
  };

  const findTheme = () => {
    if (pathname.includes("menu")) return themeBlue;
  };
  const [cart, setCart] = useState([]);

  return (
    <div className="wrapper" style={findTheme()}>
      <UserContext.Provider value={{ cart, setCart, products }}>
        <div className="App">
          <Header pathname={pathname}></Header>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/menu">
              <Route index element={<Menu></Menu>}></Route>
              <Route path="cakepop" element={<Cakepop></Cakepop>}></Route>
              <Route
                path="customcake"
                element={<CustomCake></CustomCake>}
              ></Route>
            </Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;

// "homepage": "http://dustinn1235.github.io/crush-cake",
