import "../css/Bulletin.css";
import { AiFillStar } from "react-icons/ai";

const Bulletin = () => {
  return (
    <div className="bulletin-wrapper">
      <div className="bulletin-header">
        <div className="star-wrapper">
          <div className="star-wrapper-before left">
            <AiFillStar></AiFillStar>
          </div>
        </div>
        <div className="header-title">HOT</div>
        <div className="star-wrapper">
          <div className="star-wrapper-before right">
            <AiFillStar></AiFillStar>
          </div>
        </div>
      </div>
      <div className="bulletin"></div>
    </div>
  );
};

export default Bulletin;
