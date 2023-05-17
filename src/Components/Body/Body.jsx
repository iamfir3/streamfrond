import React from "react";
import "./Body.scss";
import { Link } from "react-router-dom";
import ListSong from "../ListSong/ListSong";
import banner from "../../assets/banner.png";
import { MdArrowForwardIos } from "react-icons/md";
import Playing from "../Playing";
import ReactPerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Body = () => {
  return (
    <div className=" pb-[30px]">
      <div className="mb-[40px]">
        <div className="w-full rounded-[16px] overflow-hidden h-[320px] relative flex items-center">
          <img
            src={banner}
            alt=""
            className="absolute z-1"
            style={{ width: "80%" }}
          />
          <div className="absolute h-[800px] right-[-290px] w-[800px] rotate-[-39deg] rounded-[80px] top-[-190px] z-1"
            style={{
              background: 'linear-gradient(302.47deg, #050607 64.07%, rgba(12, 14, 18, 0) 105.78%)',
            }}>
          </div>
          <div className="z-[2] w-[300px] absolute right-[100px] ">
            <p className="text-[16px] font-[500]">A shape-shifting and musically adept American, German, and Swedish hard rock unit that skillfully blends elements of classical, gothic/doom metal, progressive rock, and symphonic metal ...</p>
            <div className="flex items-center text-[18px] font-[700] gap-[12px] mt-[24px]">
              <p>About</p>
              <MdArrowForwardIos className="font-[700]"></MdArrowForwardIos>
            </div>
          </div>
          <div className="z-[2] absolute left-[40px] bottom-[30px]">
            <p className="font-[700] text-[60px]">Kamelot</p>
            <p className="font-[500] text-[16px]">284,199 monthly listeners</p>
          </div>
        </div>
      </div>

      <ListSong />

      <Playing></Playing>
    </div>
  );
};

export default Body;
