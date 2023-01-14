import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import CartItem from "./CartItem";

const Cart = ({ shipPrice }) => {
  const { cart } = useContext(UserContext);
  const productsArr = Array.from(cart.keys());

  let subTotal = 0;
  for (let key of productsArr) {
    subTotal += cart.get(key) * key.price;
  }
  const shipping = shipPrice;
  const taxRate = 1.05;
  const tax = subTotal * taxRate;
  const total = subTotal + tax + shipping;

  return (
    <div className="cart-container">
      <div className="cart-items-container">
        {productsArr.map((e) => (
          <CartItem key={e.name} item={e}></CartItem>
        ))}
      </div>
      <div
        id="price-container"
        style={{ display: "grid", borderBottom: "0.15rem solid" }}
      >
        <div className="cost-container">
          <p>SUBTOTAL</p>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <div className="cost-container">
          <p>SHIPPING</p>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="cost-container">
          <p>GST/HST</p>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>
      <div className="cost-container" id="total">
        <p>TOTAL</p>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;
