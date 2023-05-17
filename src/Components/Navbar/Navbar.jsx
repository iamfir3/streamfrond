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
import { NavLink } from "react-router-dom";
import ROKK from "../../assets/ROKK.png";

const Navbar = () => {
  return (
    <div className="w-[300px] pl-[60px]">
      <div className=" mb-[48px]">
        <div className=" mb-[80px] pl-[30px] pr-[70px] pt-[40px]">
          <NavLink to="/" className={({ isActive }) => `${isActive ? "text-primary" : ""} flex justify-center`}>
            <img src={ROKK} alt="" />
          </NavLink>
        </div>
        <div className="mb-[36px]">
          <NavLink className={({ isActive }) => `${isActive ? "text-primary" : "text-text1"} font-[500] text-[20px] flex gap-[20px] items-center `} to="/">
            <AiFillHome className="icon" />
            <span>Home</span>
          </NavLink>
        </div>
        <div className="">
          <NavLink className={({ isActive }) => `${isActive ? "text-primary" : "text-text1"} font-[500] text-[20px] flex gap-[20px] items-center `} to="/trend">
            <BiTrendingUp className="icon" />
            <span>Trend</span>
          </NavLink>
        </div>
      </div>

      <div className="">
        <div className="text-[16px] font-[500] text-[#404040] mb-[36px]">Library</div>
        <div className="flex flex-col gap-[36px]">
          <NavLink className={({ isActive }) => `${isActive ? "text-primary" : "text-text1"} font-[500] text-[20px] flex gap-[20px] items-center `} to={"/favourites"}>
            <AiOutlineHeart className="icon" />
            <span>Favourites</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
