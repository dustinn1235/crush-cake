import "../css/Header.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoBagHandleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderMobile = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    width: "100%",
    textAlign: "start",
    paddingLeft: "2rem",
  };

  const [displayNav, setDisplayNav] = useState(false);

  const btnStyle = {
    color: "inherit",
    padding: "0",
    fontSize: "2rem",
    marginBottom: "2rem",
  };
  const toggle = () => {
    setDisplayNav(!displayNav);
  };

  return (
    <div className="header-s">
      <div className="header">
        <Link to="/" className="homepage" style={{}}>
          Crush
        </Link>
        <section>
          <a className="icon" href="#">
            <HiOutlineUserCircle></HiOutlineUserCircle>
          </a>
          <Link className="icon" to="/checkout">
            <IoBagHandleOutline></IoBagHandleOutline>
          </Link>
          <button
            className="icon"
            style={{ border: "none", backgroundColor: "inherit" }}
            onClick={toggle}
          >
            <GiHamburgerMenu />
          </button>
        </section>
      </div>
      <div
        className="nav-overlay"
        style={!displayNav ? { display: "none" } : {}}
      ></div>
      <nav
        style={
          displayNav ? { transform: "scaleX(1)" } : { transform: "scaleX(0)" }
        }
      >
        <Button
          sx={{
            color: "inherit",
            padding: "0",
            fontSize: "2rem",
            marginLeft: "auto",
            marginBottom: "2rem",
          }}
          onClick={toggle}
        >
          &#10005;
        </Button>
        <Button sx={btnStyle} onClick={toggle}>
          <Link style={linkStyle} to="/about">
            ABOUT US
          </Link>
        </Button>
        <Button sx={btnStyle} onClick={toggle}>
          <Link style={linkStyle} to="/menu">
            MENU
          </Link>
        </Button>
        <Button sx={btnStyle} onClick={toggle}>
          <Link style={linkStyle} to="/events">
            EVENTS
          </Link>
        </Button>
        <Button sx={btnStyle} onClick={toggle}>
          <Link style={linkStyle} to="/blog">
            BLOG
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default HeaderMobile;
