import Slider from "./Slider";
import IconBar from "./IconBar";
import Bulletin from "./Bulletin";
import Products from "./Products";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Homepage = () => {
  const { products } = useContext(UserContext);
  products.splice(4);

  return (
    <div>
      <IconBar></IconBar>
      <Slider></Slider>
      <Bulletin></Bulletin>
      <Products title="DESSERT" products={products}></Products>
      <AboutUs></AboutUs>
      <Blog></Blog>
    </div>
  );
};

export default Homepage;
