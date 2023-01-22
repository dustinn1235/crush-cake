import React from "react";
import "../../css/home/Products.css";
import Product from "./Product";

const Products = ({ title, products, home }) => {
  return (
    <div className="products">
      <h1 style={title ? { display: "block" } : { display: "none" }}>
        {title}
      </h1>
      <div className={`products-container ${home ? "home" : ""}`}>
        {products.map((e) => (
          <Product product={e} key={e.name} home={home}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
