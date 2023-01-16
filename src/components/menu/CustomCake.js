import { Button } from "@mui/material";
import { useState } from "react";
import "../../css/menu/CustomCake.css";
import Title from "../Title";

const CustomCake = () => {
  const urls = [
    "/img/step1.png",
    "/img/step2.png",
    "/img/step3.png",
    "/img/step4.png",
    "/img/step5.png",
    "/img/step6.png",
  ];

  const steps = [
    "CAKE'S SHAPE",
    "CAKE'S COLOR",
    "COATING'S COLOR",
    "FROSTING",
    "TEXT",
    "TOPPING",
  ];
  const [curStep, setCurStep] = useState(1);

  return (
    <div>
      <Title title="Custom Cake"></Title>
      <div className="cakecreate-container">
        <div id="current-step">
          <h1>STEP {curStep}</h1>
          <p>{steps[curStep - 1]}</p>
        </div>
        <div className="img-container">
          <img
            src="/img/Chocolate Cake.png"
            style={{
              width: "50%",
              transform: "scale(1.4)",
            }}
          />
        </div>
        <div className="steps-container">
          {urls.map((e, i) => (
            <Button
              className="step"
              style={{
                backgroundImage: `url(${e})`,
                backgroundColor: `${
                  curStep - 1 === i ? "var(--primary)" : "white"
                }`,
              }}
              onClick={() => setCurStep(i + 1)}
            />
          ))}
        </div>
        <div className="options-container">
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
        </div>
        <div className="button-container">
          <Button>Done! &gt;&gt;&gt;</Button>
        </div>
      </div>
    </div>
  );
};

export default CustomCake;
