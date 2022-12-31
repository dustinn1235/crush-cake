import "../css/Header.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoBagHandleOutline } from "react-icons/io5";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div>
      <div className="header">
        <a href="" className="homepage">
          Crush
        </a>
        <section>
          <div>
            <a href="">VIE</a>
            <span>|</span>
            <a href="">ENG</a>
          </div>
          <a className="icon" href="">
            <HiOutlineUserCircle></HiOutlineUserCircle>
          </a>
          <a className="icon" href="">
            <IoBagHandleOutline></IoBagHandleOutline>
          </a>
        </section>
      </div>
      <nav className="navbar">
        <Button>ABOUT US</Button>
        <Button>MENU</Button>
        <Button>EVENTS</Button>
      </nav>
    </div>
  );
};

export default Header;
