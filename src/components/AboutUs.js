import "../css/AboutUs.css";
import { ReactComponent as CrushLogo } from "../assets/Asset 1.svg";

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <h2>ABOUT US</h2>
      <div className="about-container">
        <CrushLogo id="logo"></CrushLogo>
        <div className="content-container">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Molestias dolorem voluptatibus magni a porro
            soluta aperiam inventore, atque corporis nostrum repellendus,
            voluptatem placeat quod quam recusandae dicta? Explicabo,
            dignissimos nostrum nam fugiat magni nobis, aperiam, magnam
            laboriosam ducimus beatae expedita!
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
