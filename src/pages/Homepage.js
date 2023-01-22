import Slider from "../components/home/Slider";
import IconBar from "../components/home/IconBar";
import Bulletin from "../components/home/Bulletin";
import Products from "../components/home/Products";
import AboutUs from "../components/home/AboutUs";
import Blog from "../components/home/Blog";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Homepage = () => {
  const { products } = useContext(UserContext);
  const displayProducts = products.slice(0, 4);

  return (
    <div>
      <IconBar></IconBar>
      <Slider></Slider>
      <Bulletin></Bulletin>
      <Products
        title="DESSERT"
        products={displayProducts}
        home="true"
      ></Products>
      <AboutUs></AboutUs>
      <Blog display="true"></Blog>
    </div>
  );
};

export default Homepage;
