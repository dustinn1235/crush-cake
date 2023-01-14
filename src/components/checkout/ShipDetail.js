import { TiStarFullOutline } from "react-icons/ti";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const ShipDetail = ({ shipPrice, setShipPrice }) => {
  return (
    <div className="middle">
      <div className="contact-container">
        <div className="header">
          <TiStarFullOutline className="icon"></TiStarFullOutline>
          <p>CONTACT INFO</p>
        </div>
        <p>
          Become a member now to get more offers <a>Sign up</a>
        </p>
        <div className="form-container">
          <TextField label="Name" className="textform" size="small" />
          <TextField label="Email" className="textform" size="small" />
          <TextField label="Phone No" className="textform" size="small" />
          <TextField label="Address" className="textform" size="small" />
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
          <RadioGroup
            className="form-container"
            defaultValue="4.99"
            onChange={(e) => {
              setShipPrice(e.target.value * 1);
            }}
          >
            <FormControlLabel
              value="4.99"
              control={<Radio />}
              label={
                <p
                  style={{
                    fontFamily: `"Montserrat", sans-serif`,
                    display: "flex",
                    marginRight: "1rem",
                  }}
                >
                  Fast&nbsp;<span>(Standard delivery)</span>
                  <span style={{ marginLeft: "auto", fontWeight: "500" }}>
                    $4.99
                  </span>
                </p>
              }
              className="radio"
            />
            <FormControlLabel
              value="9.99"
              control={<Radio />}
              label={
                <p
                  style={{
                    fontFamily: `"Montserrat", sans-serif`,
                    display: "flex",
                    marginRight: "1rem",
                  }}
                >
                  Express <span>(1-2 hours after shipping)</span>
                  <span style={{ marginLeft: "auto", fontWeight: "500" }}>
                    $9.99
                  </span>
                </p>
              }
              className="radio"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default ShipDetail;
