import "../css/Footer.css";
import { TiStarFullOutline } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { SiUbereats } from "react-icons/si";
import { SiDoordash } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

const Footer = () => {
  const blogPosts = [
    { name: "Cake It Until We Make It" },
    { name: "Your Crush, My Crush" },
    { name: "Bánh Yêu, Biếu Anh! - Cake Confession" },
  ];

  return (
    <div className="footer-wrapper">
      <div className="test">
        <div className="star-wrapper">
          <div className="star left">
            <TiStarFullOutline></TiStarFullOutline>
          </div>
        </div>
        <div className="test1"></div>
        <div className="star-wrapper">
          <div className="star right">
            <TiStarFullOutline></TiStarFullOutline>
          </div>
        </div>
      </div>
      <div className="style">
        <div className="blog-container">
          <h3>BLOG</h3>
          {blogPosts.map((e, i) => {
            return (
              <div>
                <p>{e.name}</p>
                {i !== blogPosts.length - 1 && (
                  <TiStarFullOutline
                    style={{ fontSize: "1.3rem", color: "#f5bec4" }}
                  ></TiStarFullOutline>
                )}
              </div>
            );
          })}
        </div>
        <div className="icons-container">
          <h3>FIND US IN</h3>
          <div>
            <FaFacebook></FaFacebook>
            <AiFillInstagram></AiFillInstagram>
            <FaTiktok></FaTiktok>
            <SiUbereats></SiUbereats>
            <SiDoordash></SiDoordash>
          </div>
        </div>
        <div className="payment-container">
          <h3>PAYMENT METHOD</h3>
          <div>
            <FaPaypal></FaPaypal>
            <FaCcVisa></FaCcVisa>
            <FaCcMastercard></FaCcMastercard>
            <BsCashCoin></BsCashCoin>
          </div>
        </div>
        <div className="curve left">
          <div></div>
        </div>
        <div className="curve right">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
