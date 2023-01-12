import React from "react";
import "../../css/home/Blog.css";
import { GoTriangleRight } from "react-icons/go";
import { ReactComponent as BlogTitle } from "../../assets/blog title.svg";

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <h1>BLOG</h1>
      <div id="blog1">
        <img src="/img/Blog Banner.png" alt="blog banner"></img>
        <BlogTitle className="title"></BlogTitle>
      </div>
      <div id="blog2">
        <div className="text-wrapper">
          <div className="text">
            <span>WHAT DOES</span>
            <span className="author-name">DAISY DAISY</span>
            <span>SAY ABOUT</span>
            <span className="brand-name">Crush</span>
          </div>
          <GoTriangleRight className="icon"></GoTriangleRight>
        </div>
        <div id="post">
          <h1 className="grid-title">Your Crush My Crush</h1>
          <p className="grid-content">
            &nbsp;&nbsp;&nbsp;&nbsp;"Just when I had a headache to find a
            birthday gift for my crush, I knew that Crush had a very atractive
            and unique
            <strong> Custom Cake</strong>. I want to give that person a gift
            prepared by myself, but I'm not good at it... So, here I come!"
          </p>
          <span className="grid-more">
            {" "}
            {">"}
            {">"}
            {">"} Click to read more
          </span>
          <div className="grid-img">
            <img src="/img/daisy.png" alt="person"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
