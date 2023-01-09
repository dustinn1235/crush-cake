import { TiStarFullOutline } from "react-icons/ti";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const ShipDetail = () => {
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
      <div className="contact-container">
        <div className="header">
          <TiStarFullOutline className="icon"></TiStarFullOutline>
          <p>CONTACT INFO</p>
        </div>
        <p>
          Become a member now to get more offers <a>Sign up</a>
        </p>
        <div className="form-container">
          <TextField label="Name" className="textform" />
          <TextField label="Email" className="textform" />
          <TextField label="Phone No" className="textform" />
          <TextField label="Address" className="textform" />
        </div>
        <div>
          <Checkbox></Checkbox>
          <span>Save delivery information for next time </span>
        </div>
      </div>
      <div className="delivery-container">
        <div className="header">
          <TiStarFullOutline className="icon"></TiStarFullOutline>
          <p>DELIVERY METHOD</p>
        </div>
        <FormControl style={{ width: "100%" }}>
          <RadioGroup className="form-container">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label={
                <p style={{ fontFamily: `"Montserrat", sans-serif` }}>
                  Fast <span>(Standard delivery)</span>
                </p>
              }
              className="radio"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label={
                <p style={{ fontFamily: `"Montserrat", sans-serif` }}>
                  Express <span>(1-2 hours after shipping)</span>
                </p>
              }
              className="radio"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Button>CONTINUE PAYING &gt;&gt;</Button>
    </div>
  );
};

export default ShipDetail;
