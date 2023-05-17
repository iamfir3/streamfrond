import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import ROKK from "../../assets/ROKK.png";
import { General, Library, Playlist } from "../../Utils/NavBarOptions";

const Navbar = () => {
  return (
    <div className=" w-[300px] ">
      <div className="header_nav">
        <div to="/">
          <img src={ROKK} alt="" />
        </div>
        <div>
          {General.map((option, i) => {
            return <Link to={option.link}>
              {option.icon}
              <p>{option.title}</p>
            </Link>
          })}
        </div>
        <div>
          <p>Library</p>
          <div>
            {Library.map((option, i) => {
              return <Link to={option.link}>
                {option.icon}
                <p>{option.title}</p>
              </Link>
            })}
          </div>
        </div>
        <div>
          <p>Playlist</p>
          <div>
            {Playlist.map((option, i) => {
              return <Link to={option.link}>
                {option.icon}
                <p>{option.title}</p>
              </Link>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
