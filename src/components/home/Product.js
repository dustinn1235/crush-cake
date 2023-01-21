import React, { useContext } from "react";
import "../../css/home/Products.css";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { UserContext } from "../../contexts/UserContext";

const Product = ({ product }) => {
  const { cart, setCart } = useContext(UserContext);

  const addProduct = () => {
    if (cart.has(product)) {
      cart.set(product, cart.get(product) + 1);
      setCart(new Map(cart));
    } else {
      cart.set(product, 1);
      setCart(new Map(cart));
    }
  };

  return (
    <div className="product">
      <div className="product-info">
        <Link to={product.linkTo}>
          <img src={product.img} alt="product"></img>
        </Link>
        <h5>{product.name}</h5>
      </div>
      <div className="price-container">
        <p>${product.price}</p>
        <Button
          style={{ marginLeft: "auto", justifyContent: "end" }}
          className="icon"
          onClick={addProduct}
        >
          <FiShoppingBag></FiShoppingBag>
        </Button>
      </div>
    </div>
  );
};

export default Product;
