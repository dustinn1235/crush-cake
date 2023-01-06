import Slider from "../components/Slider";
import IconBar from "../components/IconBar";
import Bulletin from "../components/Bulletin";
import Products from "../components/Products";
import AboutUs from "../components/AboutUs";
import Blog from "../components/Blog";

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
