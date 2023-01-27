import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../css/menu/CustomCake.css";
import Title from "../Title";
import { customCake } from "../../contexts/UserContext";

const CustomCake = () => {
  const { cart, setCart } = useContext(UserContext);

  const addProduct = (product) => {
    if (cart.has(product)) {
      cart.set(product, cart.get(product) + 1);
      setCart(new Map(cart));
    } else {
      cart.set(product, 1);
      setCart(new Map(cart));
    }
  };

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

  const options = [
    ["/img/step1.png", "/img/step1.png"],
    ["/img/step1.png", "/img/step1.png"],
    ["/img/step1.png", "/img/step1.png"],
    ["/img/step1.png", "/img/step1.png"],
    ["/img/step1.png", "/img/step1.png"],
    ["/img/step1.png", "/img/step1.png"],
  ];
  // Can be implement into whole cake state, 1 step1 option for now
  const [shape, setShape] = useState(0);

  return (
    <div className="customcake-wrapper">
      <Title title="Custom Cake"></Title>
      <div className="cakecreate-container">
        <div id="current-step">
          <h1>STEP {curStep}</h1>
          <p>{steps[curStep - 1]}</p>
        </div>
        <div className="img-container">
          <img
            alt="cake"
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
              key={i}
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
          {options[curStep - 1]?.map((e, i) => (
            <Button
              key={i}
              className="option"
              style={{
                backgroundImage: `url(${e})`,
                backgroundColor: `${shape === i ? "var(--primary)" : "white"}`,
              }}
              onClick={() => setShape(i)}
            ></Button>
          ))}
        </div>
        <div className="button-container">
          <Button
            onClick={() => addProduct(customCake)}
            style={{ width: "100%" }}
          >
            Done! &gt;&gt;&gt;
          </Button>
        </div>
      </div>
      <div className="steps-container-mobile">
        {urls.map((e, i) => (
          <button
            key={i}
            className="step"
            style={{
              backgroundImage: `url(${e})`,
              backgroundColor: `${curStep - 1 === i ? "#f4a1ae" : "#fcf5f8"}`,
              aspectRatio: `${curStep - 1 === i ? "1/1.5" : ""}`,
            }}
            onClick={() => setCurStep(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCake;
