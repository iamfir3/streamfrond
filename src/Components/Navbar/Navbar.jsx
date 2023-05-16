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
        <Link to="/">
          <div className="logo">LOGO</div>
        </Link>

        <Link to="/">
          <div className="home">
            <AiFillHome className="icon" />
            Home
          </div>
        </Link>
        <Link to="/trend">
          <div className="trend">
            <BiTrendingUp className="icon" />
            <span>Trend</span>
          </div>
        </Link>
        <Link to="/discovery">
          <div className="discovery">
            <AiOutlineGlobal className="icon" /> <span>Discovery</span>
          </div>
        </Link>
      </div>

      <div className="body_nav">
        <div className="title">Library</div>
        <Link to={"/recent"}>
          <div className="body_lib">
            <FiClock className="icon" />
            <span>Recent</span>
          </div>
        </Link>
        <Link to={"/favourites"}>
          <div className="body_favorite">
            <AiOutlineHeart className="icon" />
            <span>Favourites</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
