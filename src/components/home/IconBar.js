import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import "../../css/home/IconBar.css";
import { Button } from "@mui/material";

const IconBar = () => {
  const style = {
    color: "inherit",
    minHeight: 0,
    minWidth: 0,
    fontSize: "2rem",
    borderRadius: "50%",
    padding: "1%",
  };

  return (
    <div className="icons-bar-wrapper">
      <div className="icons-bar">
        <Button style={style}>
          <FaFacebook></FaFacebook>
        </Button>
        <Button style={style}>
          <AiFillInstagram></AiFillInstagram>
        </Button>
        <Button style={style}>
          <FaTiktok></FaTiktok>
        </Button>
      </div>
    </div>
  );
};

export default IconBar;
