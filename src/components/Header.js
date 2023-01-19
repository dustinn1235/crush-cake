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
            <a href="#">VIE</a>
            <span>|</span>
            <a href="#">ENG</a>
          </div>
          <a className="icon" href="#">
            <HiOutlineUserCircle></HiOutlineUserCircle>
          </a>
          <Link className="icon" to="/checkout">
            <IoBagHandleOutline></IoBagHandleOutline>
          </Link>
        </section>
      </div>
      <nav className="navbar">
        <Button style={pathname.slice(1) === "about" ? activeStyle : {}}>
          <Link style={linkStyle} to="/about">
            ABOUT US
          </Link>
        </Button>
        <Button style={pathname.slice(1) === "menu" ? activeStyle : {}}>
          <Link style={linkStyle} to="/menu">
            MENU
          </Link>
        </Button>
        <Button style={pathname.slice(1) === "events" ? activeStyle : {}}>
          <Link style={linkStyle} to="/events">
            EVENTS
          </Link>
        </Button>
        <Button style={pathname.slice(1) === "blog" ? activeStyle : {}}>
          <Link style={linkStyle} to="/blog">
            BLOG
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default Header;
