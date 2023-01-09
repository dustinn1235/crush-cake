import { Button } from "@mui/material";
import "../../css/Checkout.css";
import ShipDetail from "./ShipDetail";

const Checkout = () => {
  return (
    <div className="checkout-wrapper">
      <ShipDetail></ShipDetail>
      <div className="cart-container">
        <div className="cart-items-container">
          <div className="cart-item">
            <div className="image-container">
              <img alt="product-img"></img>
            </div>
            <div className="product-detail-container">
              <h2>CUSTOM CAKE</h2>
              <p>
                - Caramel filling brownie<br></br>- sad<br></br>- sad
              </p>
            </div>
            <div className="button-container">
              <button className="button-61">-</button>
              <input></input>
              <button className="button-61">+</button>
            </div>
            <span className="price">$5.99</span>
          </div>
          <Button id="removeBtn">&#10005;</Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
