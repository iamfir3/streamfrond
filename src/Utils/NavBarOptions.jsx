import {
    AiFillHome,
    AiOutlineGlobal,
    AiFillPlusSquare,
    AiOutlineHeart,
} from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { BiTrendingUp } from "react-icons/bi";

export const General = [
    {
        link: "/",
        title: "Home",
        icon: <AiFillHome></AiFillHome>
    },
    {
        link: "/trends",
        title: "Trends",
        icon: <BiTrendingUp></BiTrendingUp>
    },
    {
        link: "/discovery",
        title: "Discovery",
        icon: <AiOutlineGlobal></AiOutlineGlobal>
    },
];

export const Library = [
    {
        link: "/recent",
        title: "Recent",
        icon: <FiClock></FiClock>
    },
    {
        link: "/trends",
        title: "Trends",
        icon: <BiTrendingUp></BiTrendingUp>
    },
    {
        link: "/favourites",
        title: "Favourites",
        icon: <AiOutlineHeart></AiOutlineHeart>
    },
];

export const Playlist = [
    {
        link: "/newPlaylist",
        title: "Playlist",
        icon: <AiFillPlusSquare></AiFillPlusSquare>
    },
];
