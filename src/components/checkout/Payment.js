import React from "react";

const Payment = () => {
  return (
    <div className="billing-container">
      <h1>BILLING INFORMATION</h1>
      <div className="steps-container">
        <span>SHIPMENT DETAILS</span>
        <span> {" > "} </span>
        <span>PAYMENT METHODS</span>
        <span> {" > "} </span>
        <span>ORDER CONFIRMATION</span>
      </div>

      <div className="middle"></div>

      <Button>CONTINUE PAYING &gt;&gt;</Button>
    </div>
  );
};

export default Payment;
