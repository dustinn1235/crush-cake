import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../css/checkout/EmptyCart.css";
import Products from "../home/Products";

const EmptyCart = () => {
  let { products } = useContext(UserContext);
  const displayProducts = products.slice(2);

  return (
    <div className="emptycart-container">
      <h1>Your bag is empty. We know how to fix that!</h1>
      <Products products={displayProducts} home="true"></Products>
    </div>
  );
};

export default EmptyCart;
