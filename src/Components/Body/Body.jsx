import React from "react";
import "./Body.scss";
import { AiOutlineSearch, AiOutlineLogin } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import ListSong from "../ListSong/ListSong";

const Body = () => {
  return (
    <div className="container">
      <div className="body_header">
        <div className="body_search">
          <input type="text" className="search" placeholder="Search music" />
          <AiOutlineSearch className="icon_search" />
        </div>
        <div className="body_right">
          <IoMdNotificationsOutline className="icon" />
          <div className="body_right-login">
            <Link to={"/login"}>
              <AiOutlineLogin className="icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content_img">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/xif0q/poster/g/y/a/small-spos8754-poster-music-alan-walker-wall-poster-sl-8754-wall-original-imaghzwayj58fagw.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="content_text">
          <h1>Public playlists</h1>
          <h1 className="author">Alan Walker</h1>
          <h3>284,199 monthly listeners</h3>
        </div>
      </div>
      <ListSong />
    </div>
  );
};

export default Body;
