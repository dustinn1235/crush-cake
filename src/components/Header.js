import "../css/Header.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoBagHandleOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = ({ pathname }) => {
  const linkStyle = { textDecoration: "none", color: "inherit", width: "100%" };
  const activeStyle = {
    backgroundColor: "var(--shadow)",
    color: "#ffffff",
    textShadow: "1px 1px 10px #fff, 1px 1px 10px #ccc",
    fontSize: "140%",
    cursor: "pointer",
  };

  return (
    <div>
      <div className="header">
        <Link to="/" className="homepage">
          Crush
        </Link>
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
        <Button style={pathname.slice(1) === "aboutus" ? activeStyle : {}}>
          ABOUT US
        </Button>
        <Button style={pathname.slice(1) === "menu" ? activeStyle : {}}>
          <Link style={linkStyle} to="/menu">
            MENU
          </Link>
        </Button>
        <Button style={pathname.slice(1) === "events" ? activeStyle : {}}>
          EVENTS
        </Button>
      </nav>
    </div>
  );
};

export default Header;
