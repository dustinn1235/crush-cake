import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../css/checkout/Checkout.css";
import Cart from "./Cart";
import EmptyCart from "./EmptyCart";
import ShipDetail from "./ShipDetail";

const Checkout = () => {
  const { cart } = useContext(UserContext);
  const isCartEmpty = cart.size === 0;

  return (
    <div className="checkout-wrapper">
      {isCartEmpty ? (
        <EmptyCart></EmptyCart>
      ) : (
        <>
          <ShipDetail></ShipDetail>
          <Cart></Cart>
        </>
      )}
    </div>
  );
};

export default Checkout;
