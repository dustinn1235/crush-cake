import { TiStarFullOutline } from "react-icons/ti";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import "../../css/checkout/Payment.css";
import { useState } from "react";
import { Button } from "@mui/material";
import { ReactComponent as PayPalLogo } from "../../assets/paypal.svg";

const Payment = ({ info, shipPrice, setCurStep }) => {
  const infoLabels = ["Name", "Email", "Phone", "Address", "Delivery methods"];
  const shipMethod = shipPrice === 4.99 ? "Fast" : "Express";
  const [style1, setStyle1] = useState({
    transform: "scaleY(1)",
    height: "auto",
  });
  const [style2, setStyle2] = useState({});
  const setMethod = (value) => {
    if (value === "credit") {
      setStyle1({ transform: "scaleY(1)", height: "auto" });
      setStyle2({ transform: "scaleY(0)", height: "0" });
    } else {
      setStyle2({ transform: "scaleY(1)", height: "auto" });
      setStyle1({ transform: "scaleY(0)", height: "0" });
    }
  };

  return (
    <div className="middle">
      <div className="info-container">
        {infoLabels.map((e, i) => {
          return (
            <div className="info-element" key={e}>
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
              <input
                type="radio"
                style={{ height: "60%", width: "10%" }}
                name="group1"
                defaultChecked
                onClick={() => setMethod("credit")}
              ></input>
              <p>Credit card</p>
              <FaCcVisa /> <FaCcMastercard />
            </div>
            <div className="payment-content" style={style1}>
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
            <div
              className="payment-el method-header"
              style={{ border: "none" }}
            >
              <input
                type="radio"
                style={{ height: "60%", width: "10%" }}
                name="group1"
                onClick={() => setMethod("paypal")}
              ></input>
              <p>Paypal</p>
              <FaPaypal />
            </div>
            <div className="payment-content" style={style2}>
              <div
                className="payment-el"
                style={{
                  borderBottom: "none",
                  borderTop: "0.1rem solid",
                  height: "4rem",
                }}
              >
                <Button
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "#ffc439",
                    ":hover": { bgcolor: "#f2ba36" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: "0",
                  }}
                >
                  <PayPalLogo
                    style={{ height: "80%", width: "auto" }}
                  ></PayPalLogo>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
