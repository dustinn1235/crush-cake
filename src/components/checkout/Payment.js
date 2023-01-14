import { TiStarFullOutline } from "react-icons/ti";
import "../../css/checkout/Payment.css";

const Payment = ({ info, shipDetail, setCurStep }) => {
  const infoLabels = ["Name", "Email", "Phone", "Address", "Delivery methods"];
  const shipMethod = shipDetail === 4.99 ? "Fast" : "Express";

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
      <div className="header">
        <TiStarFullOutline className="icon"></TiStarFullOutline>
        <p>PAYMENT METHODS</p>
      </div>
    </div>
  );
};

export default Payment;
