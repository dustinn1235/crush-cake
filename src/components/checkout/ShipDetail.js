import { TiStarFullOutline } from "react-icons/ti";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const ShipDetail = ({
  setShipPrice,
  inputNameEl,
  inputEmailEl,
  inputPhoneEl,
  inputAddressEl,
  info: { name, email, phone, address },
}) => {
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
          <TextField
            inputRef={inputNameEl}
            label="Name"
            className="textform"
            size="small"
            defaultValue={name}
          />
          <TextField
            inputRef={inputEmailEl}
            label="Email"
            className="textform"
            size="small"
            defaultValue={email}
          />
          <TextField
            inputRef={inputPhoneEl}
            label="Phone No"
            className="textform"
            size="small"
            defaultValue={phone}
          />
          <TextField
            inputRef={inputAddressEl}
            label="Address"
            className="textform"
            size="small"
            defaultValue={address}
          />
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
              control={<Radio style={{ width: "10%" }} />}
              label={
                <p
                  style={{
                    fontFamily: `"Montserrat", sans-serif`,
                    display: "flex",
                    marginRight: "1rem",
                  }}
                >
                  Fast&nbsp;<p>(Standard delivery)</p>
                  <p style={{ marginLeft: "auto", fontWeight: "500" }}>$4.99</p>
                </p>
              }
              className="radio"
            />
            <FormControlLabel
              value="9.99"
              control={<Radio style={{ width: "10%" }} />}
              label={
                <p
                  style={{
                    fontFamily: `"Montserrat", sans-serif`,
                    display: "flex",
                    marginRight: "1rem",
                  }}
                >
                  Express <p>(1-2 hours after shipping)</p>
                  <p style={{ marginLeft: "auto", fontWeight: "500" }}>$9.99</p>
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
