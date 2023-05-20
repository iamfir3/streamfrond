import React, { useContext, useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { Songs } from "../../Context";
import ReactPerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Music from "../../apis/Music";

const ListSong = () => {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song?.id);
  }, [song]);

  return (
    <>
      <div className="col-span-2 overflow-y-auto h-[350px]">
        <ReactPerfectScrollbar>
          <table className="table-auto w-full">
            <thead className="text-white h-12 ">
              <tr className="sticky top-0 " style={{ background: "linear-gradient(113.82deg, #000000 0%, #1A1A1A 96.93%)" }}>
                <th className="w-[10%]">#</th>
                <th className="text-left">Title</th>
                <th className="w-[10%]">Author</th>
                <th className="w-[10%]">
                  <p>Posted</p>
                </th>
              </tr>
            </thead>

            <tbody>
              {DataSongs.map((song, index) => (
                <tr
                  key={index}
                  className={` h-12 text-gray-500 hover:bg-slate-600 
              ${idSong === song?.id && "bg-[#1a1a1a] rounded-[8px] text-[#fff]"}
              `}
                  onClick={() => handlePlaySong(song?.id)}
                >
                  <td className="text-center ">{index + 1}</td>
                  <td className={`${idSong === song?.id ? " text-white" : "text-text1"} font-[600] text-[14px]`}>{song?.name}</td>
                  <td className="text-center">{song?.author}</td>
                  <td className="text-center">
                    {song?.data}
                    {/* <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ReactPerfectScrollbar>
      </div>
    </>
  );
};

export default ListSong;
