import React from "react";
import "./Body.scss";
import { AiOutlineSearch, AiOutlineLogin } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

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
    </div>
  );
};

export default Body;
