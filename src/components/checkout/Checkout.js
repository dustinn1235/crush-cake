import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../css/checkout/Checkout.css";
import Cart from "./Cart";
import EmptyCart from "./EmptyCart";
import Payment from "./Payment";
import ShipDetail from "./ShipDetail";
import OrderConfirm from "./OrderConfirm";

const Checkout = () => {
  const { cart } = useContext(UserContext);
  const isCartEmpty = cart.size === 0;
  const [curStep, setCurStep] = useState(0);
  const steps = [ShipDetail, Payment, OrderConfirm];
  const btnMsg = ["CONTINUE PAYING", "COMPLETE"];

  const element = steps[curStep];
  const boldStyle = { fontWeight: 600 };

  return (
    <div className="checkout-wrapper">
      {isCartEmpty ? (
        <EmptyCart></EmptyCart>
      ) : (
        <>
          <div className="billing-container">
            <h1>BILLING INFORMATION</h1>
            <div className="steps-container">
              <span style={curStep === 0 ? boldStyle : {}}>
                SHIPMENT DETAILS
              </span>
              <span> {" > "} </span>
              <span style={curStep === 1 ? boldStyle : {}}>
                PAYMENT METHODS
              </span>
              <span> {" > "} </span>
              <span style={curStep === 2 ? boldStyle : {}}>
                ORDER CONFIRMATION
              </span>
            </div>
            {element()}
            {curStep !== 2 && (
              <Button onClick={() => setCurStep(curStep + 1)}>
                {btnMsg[curStep]} &gt;&gt;
              </Button>
            )}
          </div>
          <Cart></Cart>
        </>
      )}
    </div>
  );
};

export default Checkout;
