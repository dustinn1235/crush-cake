import "../css/Slider.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import Button from "@mui/material/Button";
import { useState } from "react";

const Slider = () => {
  const slides = [
    { url: "./promotin banner (1).png" },
    { url: "./promotin banner (3).png" },
    { url: "./promotin banner 2.png" },
  ];
  const [curIndex, setCurIndex] = new useState(0);

  const goPrev = () => {
    setCurIndex((index) => {
      // first picture then reset
      return index === 0 ? slides.length - 1 : index - 1;
    });
  };

  const goNext = () => {
    setCurIndex((curIndex) => {
      // last picture then reset
      return curIndex === slides.length - 1 ? 0 : curIndex + 1;
    });
  };

  const radioStyle = {
    color: "#6276a8",
  };

  return (
    <div className="slider">
      <div className="img-container">
        {slides.map((item, i) => {
          const leftIndex = curIndex === 0 ? slides.length - 1 : curIndex - 1;
          const rightIndex = curIndex === slides.length - 1 ? 0 : curIndex + 1;

          let className = "";
          if (i === curIndex) className = "img--active";
          else if (i === leftIndex) className = "img--left";
          else if (i === rightIndex) className = "img--right";

          return <img src={slides[curIndex].url} className={className}></img>;
        })}
      </div>
      <div className="dotContainer">
        {slides.map((slide, i) => (
          <div key={i} style={i == curIndex ? radioStyle : {}}>
            &#9679;
          </div>
        ))}
      </div>
      <Button className="arrow left" onClick={goPrev}>
        <BsArrowLeftCircle></BsArrowLeftCircle>
      </Button>
      <Button className="arrow right" onClick={goNext}>
        <BsArrowRightCircle></BsArrowRightCircle>
      </Button>
    </div>
  );
};

export default Slider;
