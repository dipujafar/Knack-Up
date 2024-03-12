import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-800 to-cyan-950">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-312px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
