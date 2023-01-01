import React from "react";
import "../css/Blog.css";
import { GoTriangleRight } from "react-icons/go";

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <h1>BLOG</h1>
      <div id="blog1"></div>
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
            <img src="./313371284_849383356251160_4219074708848390620_n-removebg-preview.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
