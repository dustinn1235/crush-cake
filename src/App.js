import "./css/App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import IconBar from "./components/IconBar";
import Bulletin from "./components/Bulletin";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <IconBar></IconBar>
        <Header></Header>
        <Slider></Slider>
        <Bulletin></Bulletin>
        <Products></Products>
        <AboutUs></AboutUs>
      </div>
    </div>
  );
}

export default App;
