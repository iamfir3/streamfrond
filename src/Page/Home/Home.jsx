import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
