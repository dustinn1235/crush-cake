import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.querySelector(".wrapper").scrollTo(0, 0);
    console.log("sad");
  }, [pathname]);
  return null;
};

export default ScrollToTop;
