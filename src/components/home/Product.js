import React from "react";
import "../../css/home/Products.css";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product-info">
        <Link to={product.linkTo}>
          <img src={product.img} alt="product"></img>
        </Link>
        <h5>{product.name}</h5>
      </div>
      <div className="price-container">
        <p>{product.price}</p>
        <Button style={{ marginLeft: "auto" }} className="icon">
          <FiShoppingBag></FiShoppingBag>
        </Button>
      </div>
    </div>
  );
};

export default Product;
