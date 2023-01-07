import "../../css/home/AboutUs.css";
import { ReactComponent as CrushLogo } from "../../assets/Asset 1.svg";

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <h2>ABOUT US</h2>
      <div className="about-container">
        <CrushLogo id="logo"></CrushLogo>
        <div className="content-container">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Crush is a brand that was born with the
            desire to serve the needs of customers to desgin a meaningful gift
            for their lvoed ones or themselves. Each gift has the mission of
            sending good wishes to the recipient. Not only focusing on the
            appearance of the gift, we also pay special attention to the taste
            of the product. Each cake is aimed at the health of consumers,
            without using preservatives or additives harmful to health.
          </p>
          <button>
            {">"}
            {">"}
            {">"} Click to read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;