import Slider from "./Slider";
import IconBar from "./IconBar";
import Bulletin from "./Bulletin";
import Products from "./Products";
import AboutUs from "./AboutUs";
import Blog from "./Blog";

const Homepage = () => {
  return (
    <div>
      <IconBar></IconBar>
      <Slider></Slider>
      <Bulletin></Bulletin>
      <Products></Products>
      <AboutUs></AboutUs>
      <Blog></Blog>
    </div>
  );
};

export default Homepage;
