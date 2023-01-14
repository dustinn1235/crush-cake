import { Button } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import "../css/checkout/Checkout.css";
import Cart from "../components/checkout/Cart";
import EmptyCart from "../components/checkout/EmptyCart";
import Payment from "../components/checkout/Payment";
import ShipDetail from "../components/checkout/ShipDetail";
import OrderConfirm from "../components/checkout/OrderConfirm";

const Checkout = () => {
  const inputNameEl = useRef(null);
  const inputEmailEl = useRef(null);
  const inputPhoneEl = useRef(null);
  const inputAddressEl = useRef(null);

  const { cart } = useContext(UserContext);
  const isCartEmpty = cart.size === 0;
  const [curStep, setCurStep] = useState(0);
  const [shipPrice, setShipPrice] = useState(4.99);
  const [info, setInfo] = useState({});
  const steps = [
    <ShipDetail
      setShipPrice={setShipPrice}
      inputNameEl={inputNameEl}
      inputEmailEl={inputEmailEl}
      inputPhoneEl={inputPhoneEl}
      inputAddressEl={inputAddressEl}
      info={info}
    />,
    <Payment info={info} shipPrice={shipPrice} setCurStep={setCurStep} />,
    <OrderConfirm />,
  ];
  const btnMsg = ["CONTINUE PAYING", "COMPLETE"];

  const element = steps[curStep];
  const boldStyle = { fontWeight: 600 };

  // reset billing step when cart is empty
  useEffect(() => {
    isCartEmpty && setCurStep(0);
  }, [cart]);

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
            {element}
            {curStep !== 2 && (
              <Button
                onClick={() => {
                  if (curStep === 0)
                    setInfo({
                      name: inputNameEl.current.value,
                      email: inputEmailEl.current.value,
                      phone: inputPhoneEl.current.value,
                      address: inputAddressEl.current.value,
                    });
                  setCurStep(curStep + 1);
                }}
              >
                {btnMsg[curStep]} &gt;&gt;
              </Button>
            )}
          </div>
          <Cart shipPrice={shipPrice}></Cart>
        </>
      )}
    </div>
  );
};

export default Checkout;
