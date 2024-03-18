import { NavLink } from "react-router-dom";
import useAdmin from "../../hook/useAdmin";
import useTeacher from "../../hook/useTeacher";
import useStudent from "../../hook/useStudent";

const DashboardLinks = () => {
  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();
  const [isStudent] = useStudent();
  console.log(isTeacher)
  console.log(isStudent)
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
            to="/dashboard/teacherReq"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Teacher Request
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/users"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/allClasses"
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
  
 if(isTeacher){
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
  
 if(isStudent) {
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
