import "../../css/home/Bulletin.css";
import { TiStarFullOutline } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bulletin = () => {
  return (
    <div className="bulletin-wrapper">
      <div className="bulletin-header">
        <div className="star-wrapper">
          <div className="star-wrapper-before left">
            <TiStarFullOutline></TiStarFullOutline>
          </div>
        </div>
        <h1 className="header-title">HOT</h1>
        <div className="star-wrapper">
          <div className="star-wrapper-before right">
            <TiStarFullOutline></TiStarFullOutline>
          </div>
        </div>
      </div>
      <div className="bulletin">
        <Link className="cake-banner" to="menu/customcake">
          <div className="img-wrapper">
            <img alt="pop up cake" src="img/PopUpCake.png"></img>
          </div>
          <h1 className="outline">Custom Cake</h1>
          <h1 className="title">Custom Cake</h1>
        </Link>
        <Link className="discount-banner" to="events">
          <div className="img-wrapper">
            <img
              src="img/discount.png"
              style={{ transform: "scale(0.8)" }}
              alt="discount banner"
            ></img>
          </div>
          <h1 className="outline">Discount</h1>
          <h1 className="title">Discount</h1>
        </Link>
        <a
          href="https://www.tiktok.com/@bunny_luv_icecream/video/7167748199275351322?is_copy_url=1&is_from_webapp=v1"
          className="tiktok-banner"
        >
          <FaTiktok className="logo"></FaTiktok>
          <div className="name-wrapper">
            <h2>QUÁ LÀ BÁNH KEM</h2>
            <h3>Jenny Huynh</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Bulletin;
