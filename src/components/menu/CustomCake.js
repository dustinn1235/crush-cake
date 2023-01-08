import { Button } from "@mui/material";
import "../../css/menu/CustomCake.css";
import Title from "../Title";

const CustomCake = () => {
  return (
    <div>
      <Title title="Custom Cake"></Title>
      <div className="cakecreate-container">
        <div id="current-step">
          <h1>STEP 1</h1>
          <p>CAKE'S SHAPE</p>
        </div>
        <div className="img-container"></div>
        <div className="steps-container">
          <div className="step"></div>
          <div className="step"></div>
          <div className="step"></div>
          <div className="step"></div>
          <div className="step"></div>
          <div className="step"></div>
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
