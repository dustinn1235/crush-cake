import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  const themePink = {
    backgroundColor: "#f5bec4",
  };

  const themeBlue = {
    "--bg": "#b8e2f4",
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
          <Route path="/menu" element={<Menu></Menu>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

// "homepage": "http://dustinn1235.github.io/crush-cake",
