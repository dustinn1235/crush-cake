import { Radio } from "@mui/material";
import { TiStarFullOutline } from "react-icons/ti";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import "../../css/checkout/Payment.css";
import { useState } from "react";

const Payment = ({ info, shipDetail, setCurStep }) => {
  const infoLabels = ["Name", "Email", "Phone", "Address", "Delivery methods"];
  const shipMethod = shipDetail === 4.99 ? "Fast" : "Express";
  const [style, setStyle] = useState({});
  const setMethod = () => {
    setStyle({ transform: "scaleY(1)", height: "auto" });
  };

  return (
    <div className="middle">
      <div className="info-container">
        {infoLabels.map((e, i) => {
          return (
            <div className="info-element">
              <p style={{ width: "40%", fontWeight: "500" }}>{e}</p>
              <p style={{ width: "60%", color: "#808080" }}>
                {e === "Delivery methods"
                  ? shipMethod
                  : info[infoLabels[i].toLowerCase()]}
              </p>
            </div>
          );
        })}
        <p
          style={{
            textDecoration: "underline",
            color: "#6276a8",
            marginTop: "0.7rem",
            cursor: "pointer",
          }}
          onClick={() => setCurStep((cur) => cur - 1)}
        >
          Edit
        </p>
      </div>

      <div>
        <div className="header">
          <TiStarFullOutline className="icon"></TiStarFullOutline>
          <p>PAYMENT METHODS</p>
        </div>
        <div className="payment-container">
          <div>
            <div className="payment-el method-header">
              <Radio style={{ height: "100%" }} onClick={setMethod}></Radio>
              <p>Credit card</p>
              <FaCcVisa /> <FaCcMastercard />
            </div>
            <div className="payment-content" style={style}>
              <div className="payment-el">
                <input placeholder="Card number"></input>
              </div>
              <div className="payment-el">
                <input placeholder="Name on card"></input>
              </div>
              <div className="payment-el" style={{ gap: 0 }}>
                <input
                  placeholder="Expiration Day (MM/YY)"
                  style={{ width: "50%", borderRight: "0.1rem solid" }}
                ></input>
                <input
                  placeholder="Security Code"
                  style={{ width: "50%" }}
                ></input>
              </div>
            </div>
          </div>
          <div>
            <div className="payment-el method-header">
              <Radio style={{ height: "100%" }} onClick={setMethod}></Radio>
              <p>Paypal</p>
              <FaPaypal />
            </div>
            <div className="payment-content" style={style}>
              <div className="payment-el">
                <input placeholder="Card number"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
