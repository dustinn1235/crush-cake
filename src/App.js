import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Cakepop from "./components/menu/Cakepop";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import CustomCake from "./components/menu/CustomCake";
import Checkout from "./pages/Checkout";
import { UserContext, products } from "./contexts/UserContext";
import { useEffect, useState } from "react";
import Events from "./pages/Events";
import Blog from "./pages/Blog";

function App() {
  /* 
  TODO 
  homepage:
  add link to blog post footer
  add copy right footer
  create blog page / post
  create event page / promotion

  cart:
  info validation and error check

  mobile: responsive layout design
   */

  const { pathname } = useLocation();
  const themeBlue = {
    "--primary": "#b8e2f4",
    "--darkPrimary": "#6175a7",
    "--shadow": "#6175a7",
  };

  const findTheme = () => {
    console.log(pathname);
    if (pathname.includes("menu")) return themeBlue;
    else if (pathname === "/blog")
      return {
        ...themeBlue,
        backgroundImage: "linear-gradient(var(--darkPrimary), white)",
      };
  };
  const [cart, setCart] = useState(new Map());

  useEffect(() => {
    console.log(cart);
  }, [cart]);

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
            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="/events" element={<Events></Events>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;

// "homepage": "http://dustinn1235.github.io/crush-cake",
