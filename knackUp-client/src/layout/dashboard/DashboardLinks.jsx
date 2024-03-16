import { NavLink } from "react-router-dom";
import useAdmin from "../../hook/useAdmin";
import useTeacher from "../../hook/useTeacher";

const DashboardLinks = () => {
  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();
  console.log(isTeacher)
  if (isAdmin) {
    return (
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
            to="/teacherReq"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Teacher Request
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/allClass"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            All Class
          </NavLink>
        </li>
      </>
    );
  } 
  
  else if(isTeacher){
    return (
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
            to="/dashboard/addClass"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Add class
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/teacherClass"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            My Class
          </NavLink>
        </li>
      </>
    );
  }
  
  else {
    return (
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
            to="/dashboard/myClass"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            My Enroll Class
          </NavLink>
        </li>
      </>
    );
  }
};

export default DashboardLinks;
