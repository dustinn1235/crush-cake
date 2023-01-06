import "../../css/home/Slider.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

const Slider = () => {
  const slides = [
    { url: "./promotin banner (1).png" },
    { url: "./promotin banner (3).png" },
    { url: "./promotin banner 2.png" },
  ];
  const [curIndex, setCurIndex] = new useState(0);
  const [imgStyle, setImgStyle] = new useState({});

  useEffect(() => {
    // slide animation for every 5second
    const timer = setTimeout(() => {
      if (curIndex === slides.length - 1) {
        setImgStyle({ transform: "translateX(0)" });
      } else {
        setImgStyle({
          transform: `translateX(${-(curIndex + 1) * 100}%)`,
        });
      }
      setCurIndex(curIndex === slides.length - 1 ? 0 : curIndex + 1);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [curIndex]);

  const move = (direction) => {
    setCurIndex((curIndex) => {
      // calculate index based on direction
      const offset = direction === "left" ? -1 : 1;
      let index = curIndex + offset;
      if (index >= slides.length) index = 0;
      else if (index < 0) index = slides.length - 1;

      // set slide animation
      setImgStyle({
        transform: `translateX(${-index * 100}%)`,
      });

      return index;
    });
  };

  const radioStyle = {
    color: "#6276a8",
  };

  return (
    <div>
      <div className="slider">
        <div className="img-container">
          {slides.map((item, i) => {
            return (
              <img
                key={i}
                src={item.url}
                style={imgStyle}
                alt="promotion banner"
              ></img>
            );
          })}
        </div>
        <div className="dotContainer">
          {slides.map((slide, i) => (
            <div key={i} style={i === curIndex ? radioStyle : {}}>
              &#9679;
            </div>
          ))}
        </div>
        <Button className="arrow left" onClick={() => move("left")}>
          <BsArrowLeftCircle></BsArrowLeftCircle>
        </Button>
        <Button className="arrow right" onClick={() => move("right")}>
          <BsArrowRightCircle></BsArrowRightCircle>
        </Button>
      </div>
      <div className="slogan--banner">
        <img src="slogan banner.png" alt="slogan banner"></img>
      </div>
    </div>
  );
};

export default Slider;
