import { TiStarFullOutline } from "react-icons/ti";
import Products from "../home/Products";

const Cakepop = () => {
  return (
    <div className="menu-wrapper">
      <div className="title">
        <TiStarFullOutline></TiStarFullOutline>
        <h1>Dessert</h1>
        <TiStarFullOutline></TiStarFullOutline>
      </div>
      <div className="cakepop-grid">
        <div id="img-grid-element"></div>
        <div id="dough-grid-element">
          <p>CHOOSE YOUR DOUGH</p>
        </div>
        <div id="coating-grid-element">
          <p>
            CHOOSE
            <br />
            YOUR
            <br />
            COATING
          </p>
        </div>
        <div id="decor-grid-element">
          <p>
            CHOOSE
            <br />
            YOUR
            <br />
            DECOR
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cakepop;
