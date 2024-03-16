import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import Footer from "../../components/shared/Footer";

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-950 to-cyan-900">
      <DashboardNav></DashboardNav>
      <div className="min-h-[calc(100vh-312px)] my-5 md:my-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
