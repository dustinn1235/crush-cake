import { createContext } from "react";

const products = [
  {
    name: "Happy Cookies",
    price: "5.99",
    img: "img/cookie 3.png",
    linkTo: "/menu",
  },
  { name: "Brownie", price: "5.99", img: "img/brownie.png", linkTo: "/menu" },
  {
    name: "Pinky Bae",
    price: "5.99",
    img: "img/cakepop 3.png",
    linkTo: "/menu/cakepop",
  },
  {
    name: "Red XMas",
    price: "5.99",
    img: "img/cakepop 4.png",
    linkTo: "/menu/cakepop",
  },
  {
    name: "Blue Boo",
    price: "5.99",
    img: "img/cakepop 2 (1).png",
  },
  {
    name: "Choco Lover",
    price: "5.99",
    img: "img/cakepop 1 (1).png",
  },
];
const customCake = {
  name: "Custom Cake",
  price: "19.99",
  img: "img/Chocolate Cake.png",
};
export const UserContext = createContext(null);
export { products, customCake };
