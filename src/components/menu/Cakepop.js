import { TiStarFullOutline } from "react-icons/ti";
import Products from "../home/Products";
import Title from "../Title";

const Cakepop = () => {
  const products = [
    {
      name: "Blue Boo",
      price: "$5.99",
      img: "/cakepop 1 (1).png",
    },
    {
      name: "Choco Lover",
      price: "$5.99",
      img: "/cakepop 2 (1).png",
    },
    {
      name: "Pinky Bae",
      price: "$5.99",
      img: "/cakepop 3.png",
    },
    {
      name: "Red XMas",
      price: "$5.99",
      img: "/cakepop 4.png",
    },
  ];

  return (
    <div className="menu-wrapper">
      <Title title="Dessert"></Title>
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
      <Products title="AVAILABLE" products={products}></Products>
    </div>
  );
};

export default Cakepop;
