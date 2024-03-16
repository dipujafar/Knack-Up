import { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import DashboardLinks from "./DashboardLinks";
import logo from "../../assets/img/knackUp.png";
import { toast } from "react-toastify";
import { FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import profile from "../../assets/img/profile.png";
import useAuth from "../../hook/useAuth";
import Container from "../../components/shared/Container";

const DashboardNav = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  const handleLogout = () => {
    logOut().then(() =>{
      navigate("/")
      toast("Successfully Logout")
    } );
  };
  return (
    <Container>
      <div className="navbar bg-transparent text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cyan-600 rounded-box w-52 uppercase"
            >
              <DashboardLinks></DashboardLinks>
            </ul>
          </div>
          <Link to="/" className="btn  btn-ghost text-xl">
            <img src={logo} alt="" className="w-10 text-cyan-500" />
            <div>
              <span className="text-cyan-500">KNACK</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">
            <DashboardLinks></DashboardLinks>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="relative">
              <img
                ref={imgRef}
                onClick={() => setOpen(!open)}
                src={user?.photoURL}
                className="w-10 h-10 rounded-full object-cover"
              />
              {open && (
                <div
                  ref={menuRef}
                  className="absolute top-14 right-0 z-10 bg-gradient-to-r from-sky-800 to-sky-600 rounded  text-gray-200 w-52 p-4 space-y-2"
                >
                  <p className="text-center text-xl">{user?.displayName}</p>
                  <hr />
                  <Link to="/">
                    <p className=" mt-1 flex items-center gap-1 hover:text-sky-300">
                      <FaHome /> Home
                    </p>
                  </Link>
                  <hr />
                  <button
                    onClick={handleLogout}
                    className="mt-1 flex items-center gap-1 hover:text-sky-300"
                  >
                    <CgLogOut /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="relative">
              <img
                ref={imgRef}
                onClick={() => setOpen(!open)}
                src={profile}
                className="w-12 rounded-full object-cover"
              />
              {open && (
                <div
                  ref={menuRef}
                  className="absolute top-14 right-0 z-10 bg-gradient-to-r from-sky-800 to-sky-600 rounded text-gray-200 w-52 p-4 space-y-2"
                >
                  <p>User not available</p>
                  <hr />
                  <Link to="/">
                    <p className=" mt-1 flex items-center gap-1 hover:text-sky-300">
                      <FaHome /> Home
                    </p>
                  </Link>
                  <hr />
                  <Link to="/login">
                    <button className="mt-1 flex items-center gap-1 hover:text-sky-300">
                      <FiLogIn /> Login
                    </button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default DashboardNav;
