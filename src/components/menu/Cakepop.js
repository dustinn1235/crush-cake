import { TiStarFullOutline } from "react-icons/ti";

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
        <div id="dough-grid-element"></div>
        <div id="coating-grid-element"></div>
        <div id="decor-grid-element"></div>
      </div>
    </div>
  );
};

export default Cakepop;
