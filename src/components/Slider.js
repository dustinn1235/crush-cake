import "../css/Slider.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

const Slider = () => {
  const slides = [{ url: "./promotin banner (1).png" }];

  const sliderStyle = {
    // backgroundImage: `url("${slides[0].url}")`,
  };

  return (
    <div style={sliderStyle} className="slider">
      <img src={slides[0].url}></img>
      <div className="arrow left">
        <BsArrowLeftCircle></BsArrowLeftCircle>
      </div>
      <div className="arrow right">
        <BsArrowRightCircle></BsArrowRightCircle>
      </div>
    </div>
  );
};

export default Slider;
