import "../css/Header.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoBagHandleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1>Crush</h1>
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
      <nav>
        <button>ABOUT US</button>
        <button>MENU</button>
        <button>EVENTS</button>
      </nav>
    </div>
  );
};

export default Header;
