import "../css/Bulletin.css";
import { TiStarFullOutline } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";

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
        <div className="cake-banner">
          <h1 className="outline">Custom Cake</h1>
          <h1 className="title">Custom Cake</h1>
          <div className="img-wrapper">
            <img alt="pop up cake" src="./PopUpCake.png"></img>
          </div>
        </div>
        <div className="discount-banner">
          <h1 className="outline">Discount</h1>
          <h1 className="title">Discount</h1>
        </div>
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
