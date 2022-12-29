import "./css/App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import IconBar from "./components/IconBar";
import Bulletin from "./components/Bulletin";

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <IconBar></IconBar>
        <Header></Header>
        <Slider></Slider>
        <Bulletin></Bulletin>
      </div>
    </div>
  );
}

export default App;
