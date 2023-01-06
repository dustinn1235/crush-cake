import Slider from "../components/home/Slider";
import IconBar from "../components/home/IconBar";
import Bulletin from "../components/home/Bulletin";
import Products from "../components/home/Products";
import AboutUs from "../components/home/AboutUs";
import Blog from "../components/home/Blog";

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
