import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/knackUp.png"
import Container from "./Container";

const Navbar = () => {
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
          to="allClass"
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
    </>
  );
  return (
    <Container>
      <div className="navbar bg-transparent text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn  btn-ghost text-xl">
            <img src={logo} alt="" className="w-10 text-cyan-500"/>
            <div>
            <span className="text-cyan-500">KNACK</span>
            <span className="text-cyan-400"> UP</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn btn-outline btn-sm bg-gradient-to-r from-cyan-500 to-cyan-600">LOGIN</Link>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
