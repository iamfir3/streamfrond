import { BiSearch } from "react-icons/bi";
import { HiBell } from "react-icons/hi";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet, Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import { useState, useContext } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import Music from "../../apis/Music";
import { Songs } from "../../Context";
import "./Home.scss";
import ReactPerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import ChangeColorBody from "../../Components/ChangeColorBody";

const Home = () => {
  const { handleSetSong } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    console.log(idSong);
    setidSong(idSong);
    handleSetSong(idSong);
  };
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [isSearching, setIsSearching] = useState(false);
  const [searchedSong, serSearchedSong] = useState([]);
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div
        className="flex-auto pl-[38px] pr-[60px]"
        style={{
          background: "linear-gradient(113.82deg, #000000 0%, #1A1A1A 96.93%)",
        }}
      >
        <div className="h-[110px] flex items-center justify-between">
          <div className="flex bg-bg1 items-center pl-[20px] pr-[15px] py-[15px] rounded-[12px] relative">
            <input
              type="text"
              placeholder="Search music"
              className="border-none outline-none bg-bg1 w-[560px]"
              onFocus={() => {
                setIsSearching(true);
              }}
              onBlur={() => {
                setIsSearching(false);
              }}
              onChange={(e) => {
                setTimeout(() => {
                  const fetchSong = async () => {
                    const res = await Music.search(e.target.value);
                    serSearchedSong(res);
                  };
                  fetchSong();
                }, 700);
              }}
            />
            <BiSearch size="24px" className="text-text1"></BiSearch>

            <div
              className={`absolute w-full bg-bg1 h-[500px] overflow-y-auto left-0 rounded-[12px] z-[13] top-[70px] cursor-pointer ${
                isSearching === false ? "hidden" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <ReactPerfectScrollbar>
                {searchedSong?.map((song, i) => {
                  return (
                    <div
                      key={i}
                      className="flex justify-between pl-[20px] pr-[15px] py-[15px]"
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        handlePlaySong(song?.id);
                      }}
                    >
                      <div>
                        <p className="text-[16px] font-[600]">{song.name}</p>
                        <p className="text-[14px] font-[500]">{song.author}</p>
                      </div>
                      <p className="text-[16px] font-[500]">{song.data}</p>
                    </div>
                  );
                })}
              </ReactPerfectScrollbar>
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="text-xl cursor-pointer">
              <ChangeColorBody />
            </div>
            <div>
              <HiBell size="30" className="text-[#BFBFBF]"></HiBell>
            </div>
            {isLoggedIn === false ? (
              <Link
                to="/login"
                className="bg-[#262626] rounded-[40px] px-[20px] py-[10px]"
              >
                <p>Login</p>
              </Link>
            ) : (
              <div className="bg-[#262626] rounded-[40px] px-[20px] py-[10px] flex gap-[12px] items-center relative">
                <img src={avatar}></img>
                <label htmlFor="show">
                  <p className="font-[600] text-[14px] text-white">
                    {localStorage.getItem("username")}
                  </p>
                  <p className="font-[300] text-[12px]">ROKK STAR</p>
                </label>
                <input type="text" name="" id="show" className=" input" />
                <div className="absolute w-full bg-[#262626] rounded-[40px] px-[20px] py-[10px] transition-all top-[70px] z-[11] left-0 show">
                  <div className="flex gap-[10px] items-center text-[#c23b22]">
                    <BiLogOutCircle size="24"></BiLogOutCircle>
                    <p className="font-[600]">Log out</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
