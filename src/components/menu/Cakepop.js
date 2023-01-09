import Products from "../home/Products";
import Title from "../Title";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Cakepop = () => {
  let { products } = useContext(UserContext);
  products = products.slice(2);

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
