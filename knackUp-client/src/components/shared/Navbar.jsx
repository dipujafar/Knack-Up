import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/knackUp.png";
import Container from "./Container";
import useAuth from "../../hook/useAuth";
import profile from "../../assets/img/profile.png";
import { useRef, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { toast } from "react-toastify";
import useAdmin from "../../hook/useAdmin";
import useTeacher from "../../hook/useTeacher";
import { BsCart4 } from "react-icons/bs";
import useCart from "../../hook/useCart";


const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();
  const [cart] = useCart();
  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  const handleLogout = () => {
    logOut().then(() => toast("Successfully Logout"));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allClasses"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          All classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tech"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Tech on Knack
        </NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink
            to="/dashboard/users"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && isTeacher && (
        <li>
          <NavLink
            to="/dashboard/addClass"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
     
      )}
      {user && !isAdmin && !isTeacher && (
        <>
        <li>
          <NavLink
            to="/dashboard/myClass"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
           <li className="text-xl" >
           <NavLink
             to="/dashboard/cart"
             className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "active" : ""
             }
           >
             <BsCart4 /> <sup className="bg-sky-100 text-black text- rounded-full p-2">+{cart?.length}</sup>
           </NavLink>
         </li>
         </>
      )}
    </>
  );
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
              {navLinks}
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
          <ul className="menu menu-horizontal px-1 uppercase">{navLinks}</ul>
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

export default Navbar;
