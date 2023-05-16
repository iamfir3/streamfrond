import React from "react";
import "./Navbar.scss";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineGlobal,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header_nav">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>

        <div className="home">
          <Link to="/">
            <AiFillHome className="icon" />
            Home
          </Link>
        </div>
        <div className="trend">
          <Link to="/trend">
            <BiTrendingUp className="icon" />
            <span>Trend</span>
          </Link>
        </div>
        <div className="discovery">
          <Link to="/discovery">
            <AiOutlineGlobal className="icon" /> <span>Discovery</span>
          </Link>
        </div>
      </div>

      <div className="body_nav">
        <div className="title">Library</div>
        <div className="body_lib">
          <Link to={"/recent"}>
            <FiClock className="icon" />
            <span>Recent</span>
          </Link>
        </div>
        <div className="body_favorite">
          <Link to={"/favourites"}>
            <AiOutlineHeart className="icon" />
            <span>Favourites</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
