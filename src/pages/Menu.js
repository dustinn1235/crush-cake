import React, { useContext } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import "../css/menu/Menu.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { UserContext } from "../contexts/UserContext";

const Menu = () => {
  const { cart, setCart, products } = useContext(UserContext);

  const addProduct = (name) => {
    let product = {};
    for (let item of products) {
      if (item.name === name) {
        product = item;
        break;
      }
    }

    if (cart.has(product)) {
      cart.set(product, cart.get(product) + 1);
      setCart(new Map(cart));
    } else {
      cart.set(product, 1);
      setCart(new Map(cart));
    }
  };

  return (
    <div className="menu-wrapper">
      <Title title="Dessert"></Title>
      <Link className="big-banner" to="/menu/cakepop">
        <h3>
          CAKE<br></br>POP
        </h3>
        <div className="content">
          <h4>Small bite, big taste</h4>
          <p>
            Don't miss out the cute little lollipop cake. The cake core is
            created with many different flavors such as chocolate cake, pound
            cake, Tokyo chesse cake, sponge cake, red velvet cake,... with a
            crust covered with creamchees, mascarpone, .. color flavor according
            to customer's request.
          </p>
        </div>
        <img src="img/cakepop 1.png" id="cakepop1" alt="cakepop1"></img>
        <img src="img/cakepop 2.png" id="cakepop2" alt="cakepop2"></img>
      </Link>
      <Link
        className="big-banner"
        style={{ paddingTop: "10%" }}
        to="/menu/customcake"
      >
        <h3 style={{ fontSize: "2.3rem" }}>
          CUSTOM<br></br>CAKE
        </h3>
        <div className="content">
          <h4>Small bite, big taste</h4>
          <p>
            Are you in need of a cake that is out of this world? Look no further
            than Custom Cake. Our cakes will amaze and delight your guests with
            their wow factor. With a variety of flavors and designs, you are
            sure to find the perfect cake for your special occasion.
          </p>
        </div>
        <img
          src="/img/Heart-Anni Cake.png"
          id="customcake1"
          alt="cakepop1"
        ></img>
        <img
          src="/img/Chocolate Cake.png"
          id="customcake2"
          alt="cakepop1"
        ></img>
      </Link>
      <div className="banner-container">
        <div className="cookie banner">
          <img src="/img/cookie 3.png" alt="cakepop1"></img>
          <h1>Cookie</h1>
          <p>
            A famous and poular cake in European and Merican markets. Cookies
            originated in France. Created into many different versions such as:
            Anzac Cookies, Biscotti, Brownie, Chocolate Chip, Peanut Butter
            Cookies, Canestrilli Cookies,...
          </p>
          <p>
            With global travel becoming widespread at that time, cookies made a
            natural travel companion, a modernized equivalent of the travel
            cakes used throughout history.
          </p>
          <Button className="icon" onClick={() => addProduct("Happy Cookies")}>
            <IoBagHandleOutline></IoBagHandleOutline>
          </Button>
        </div>
        <div className="brownie banner">
          <img src="/img/brownie.png" alt="cakepop1"></img>
          <h1>Brownie</h1>
          <p>
            Brownie originated in England with the main ingredient being Dark
            Chocolate. A lovely cake that is soft and spnogy, not dry, with a
            strong chocolate aroma. Brownie is divided into 2 versions:
          </p>
          <p>
            <strong>Brownie Fudge</strong> - Version using more chocolate and
            butter but less flour.
          </p>
          <p>
            <strong>Brownie Cakey</strong> - More flour version, less butter and
            chocolate, so it has more porosity.
          </p>
          <Button className="icon" onClick={() => addProduct("Brownie")}>
            <IoBagHandleOutline></IoBagHandleOutline>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
