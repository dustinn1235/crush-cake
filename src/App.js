import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/home/Homepage";
import Menu from "./components/menu/Menu";
import Cakepop from "./components/menu/Cakepop";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  const themePink = {
    backgroundColor: "#f5bec4",
  };

  const themeBlue = {
    "--primary": "#b8e2f4",
    "--darkPrimary": "#6175a7",
    "--shadow": "#6175a7",
  };

  const findTheme = () => {
    if (pathname.includes("menu")) return themeBlue;
  };
  const theme = findTheme();

  return (
    <div className="wrapper" style={theme}>
      <div className="App">
        <Header pathname={pathname}></Header>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/menu">
            <Route index element={<Menu></Menu>}></Route>
            <Route path="cakepop" element={<Cakepop></Cakepop>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

// "homepage": "http://dustinn1235.github.io/crush-cake",
