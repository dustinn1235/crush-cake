import "./css/App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import IconBar from "./components/IconBar";

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <IconBar></IconBar>
        <Header></Header>
        <Slider></Slider>
      </div>
    </div>
  );
}

export default App;
