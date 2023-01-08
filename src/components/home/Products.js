import React from "react";
import "../../css/home/Products.css";
import Product from "./Product";

const Products = ({ title, products }) => {
  return (
    <div className="products">
      <h2>{title}</h2>
      <div className="products-container">
        {products.map((e) => (
          <Product product={e} key={e.name}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
