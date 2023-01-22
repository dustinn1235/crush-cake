import "../../css/home/AboutUs.css";
import { ReactComponent as CrushLogo } from "../../assets/Asset 1.svg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <h1>ABOUT US</h1>
      <div className="about-container">
        <CrushLogo id="logo"></CrushLogo>
        <div className="content-container">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Crush is a brand that was born with the
            desire to serve the needs of customers to desgin a meaningful gift
            for their loved ones or themselves. Each gift has the mission of
            sending good wishes to the recipient.
            <span>
              Not only focusing on the appearance of the gift, we also pay
              special attention to the taste of the product. Each cake is aimed
              at the health of consumers, without using preservatives or
              additives harmful to health.
            </span>
          </p>
          <Link style={{ marginLeft: "auto" }} to="about">
            <button>
              {">"}
              {">"}
              {">"} Click to read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
