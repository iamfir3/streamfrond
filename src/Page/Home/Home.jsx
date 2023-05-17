import { BiSearch } from "react-icons/bi";
import { HiBell } from "react-icons/hi";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div className="flex-auto pl-[38px] pr-[60px]" style={{ background: "linear-gradient(113.82deg, #000000 0%, #1A1A1A 96.93%)" }}>
        <div className="h-[110px] flex items-center justify-between">
          <div className="flex bg-bg1 items-center pl-[20px] pr-[15px] py-[15px] rounded-[12px]">
            <input type="text" placeholder="Search music" className="border-none outline-none bg-bg1 w-[560px]" />
            <BiSearch size='24px' className="text-text1"></BiSearch>
          </div>
          <div className="flex items-center gap-[30px]">
            <div>
              <HiBell size='30' className="text-[#BFBFBF]"></HiBell>
            </div>
            <Link to='/login' className="bg-[#262626] rounded-[40px] px-[20px] py-[10px]">
              <p>Login</p>
            </Link>
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
