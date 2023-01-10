import { createContext } from "react";

const products = [
  {
    name: "Happy Cookies",
    price: "5.99",
    img: "/cookie 3.png",
    linkTo: "/menu",
  },
  { name: "Brownie", price: "5.99", img: "/brownie.png", linkTo: "/menu" },
  {
    name: "Pinky Bae",
    price: "5.99",
    img: "/cakepop 3.png",
    linkTo: "/menu/cakepop",
  },
  {
    name: "Red XMas",
    price: "5.99",
    img: "/cakepop 4.png",
    linkTo: "/menu/cakepop",
  },
  {
    name: "Blue Boo",
    price: "5.99",
    img: "/cakepop 2 (1).png",
  },
  {
    name: "Choco Lover",
    price: "5.99",
    img: "/cakepop 1 (1).png",
  },
];
export const UserContext = createContext(null);
export { products };
