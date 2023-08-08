import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css"
import image from "./logoName-fa2ef510.png"


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftnav">
        <div className="logo"> <img src={image} className="image"></img> </div>
      </div>
      <div className="centernav">
        <a href="#">Home</a>
        <a href="#">Recent</a>
        <a href="#">Channels</a>
        <a href="#">Dr. Vikram Sethi Blogs</a>
      </div>
      <div className="rightnav">
        <input type="text"  className="inputt" placeholder="search here"/>
         <FaSearch />
      </div>
    </div>
  );
};
