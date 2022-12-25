import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import "../css/IconBar.css";

const IconBar = () => {
  return (
    <div className="icons-bar-wrapper">
      <div className="icons-bar">
        <div>
          <FaFacebook></FaFacebook>
        </div>
        <div>
          <AiFillInstagram></AiFillInstagram>
        </div>
        <div>
          <FaTiktok></FaTiktok>
        </div>
      </div>
    </div>
  );
};

export default IconBar;
