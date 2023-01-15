import { TiStarFullOutline } from "react-icons/ti";

const OrderConfirm = () => {
  return (
    <div className="middle">
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        <TiStarFullOutline style={{ color: "var(--darkPrimary)" }} />
        <h1 style={{ border: "none" }}>ORDERED SUCCESSFULLY</h1>
        <TiStarFullOutline style={{ color: "var(--darkPrimary)" }} />
      </div>
      <div
        style={{
          backgroundColor: "var(--darkPrimary)",
          display: "flex",
          borderRadius: "5rem",
          padding: "1.5rem",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        <p style={{ color: "white", fontWeight: "600" }}>YOUR ORDER'S CODE</p>
        <p style={{ marginLeft: "auto", color: "white" }}>#SADD1234</p>
      </div>
      <p style={{ marginBottom: "0.6rem" }}>THANK YOU FOR BUYING AT CRUSH.</p>
      <p>
        If you have any questions, please contact{" "}
        <span style={{ color: "var(--darkPrimary)" }}>baking@crush.com </span>
        for support.
      </p>
    </div>
  );
};

export default OrderConfirm;
