import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../css/Checkout.css";
import CartItem from "./CartItem";
import ShipDetail from "./ShipDetail";

const Checkout = () => {
  const { cart } = useContext(UserContext);
  const productsArr = Array.from(cart.keys());

  return (
    <div className="checkout-wrapper">
      <ShipDetail></ShipDetail>
      <div className="cart-container">
        <div className="cart-items-container">
          {productsArr.map((e) => (
            <CartItem key={e.name} item={e}></CartItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
