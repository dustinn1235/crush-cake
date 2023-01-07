import React from "react";
import "../../css/home/Products.css";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosShareAlt } from "react-icons/io";
import { Link } from "react-router-dom";

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
        <button style={{ marginLeft: "auto" }} className="icon">
          <FiShoppingBag></FiShoppingBag>
        </button>
        <button style={{ marginLeft: "3%" }} className="icon">
          <IoIosShareAlt></IoIosShareAlt>
        </button>
      </div>
    </div>
  );
};

export default Product;
