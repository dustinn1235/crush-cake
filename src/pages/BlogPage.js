import Title from "../components/Title";
import Blog from "../components/home/Blog";
import "../css/Blog/BlogPage.css";
import { ReactComponent as BlogTitle } from "../assets/blogSpecial.svg";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div style={{ display: "grid" }}>
      <Title title="Blog"></Title>
      <div id="blogSpecial">
        <div id="dec1"></div>
        <div id="dec2"></div>
        <div id="dec3"></div>
        <BlogTitle></BlogTitle>
        <p>
          Different from the bustling atmosphere of Tet, the Christmas night
          brings us cool feeling, the moment for those loving hearts get closer.
          This is also the first Christmas that CRUSH bakery has the opportunity
          to accompany you.
          <br></br>
          <Link to="/blog/1">
            {" "}
            {">"}
            {">"}
            {">"} Click to read more
          </Link>
        </p>
      </div>
      <Blog></Blog>
    </div>
  );
};

export default BlogPage;
