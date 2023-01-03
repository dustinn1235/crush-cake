import React from "react";
import "../css/Products.css";
import Product from "./Product";

const Products = () => {
  const products = [
    { name: "Happy Cookies", price: "$5.99", img: "./cookie 3.png" },
    { name: "Brownie", price: "$5.99", img: "./brownie.png" },
    { name: "Pinky Bae", price: "$5.99", img: "./cakepop 3.png" },
    { name: "Red XMas", price: "$5.99", img: "./cakepop 4.png" },
  ];

  return (
    <div className="products">
      <h2>DESSERT</h2>
      <div className="products-container">
        {products.map((e) => (
          <Product product={e}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;