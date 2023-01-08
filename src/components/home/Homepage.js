import Slider from "./Slider";
import IconBar from "./IconBar";
import Bulletin from "./Bulletin";
import Products from "./Products";
import AboutUs from "./AboutUs";
import Blog from "./Blog";

const Homepage = () => {
  const products = [
    {
      name: "Happy Cookies",
      price: "$5.99",
      img: "/cookie 3.png",
      linkTo: "/menu",
    },
    { name: "Brownie", price: "$5.99", img: "/brownie.png", linkTo: "/menu" },
    {
      name: "Pinky Bae",
      price: "$5.99",
      img: "/cakepop 3.png",
      linkTo: "/menu/cakepop",
    },
    {
      name: "Red XMas",
      price: "$5.99",
      img: "/cakepop 4.png",
      linkTo: "/menu/cakepop",
    },
  ];

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
