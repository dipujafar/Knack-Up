import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import SignUp from "../authentication/singUp/SignUp";
import Login from "../authentication/login/Login";
import AllClasses from "../pages/allClasses/AllClasses";
import TechOn from "../pages/techOnKnack/TechOn";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import AllUsers from "../pages/dashboard/AllUsers";
import TeacherRequest from "../pages/dashboard/TeacherRequest";
import AdminAllClasses from "../pages/dashboard/AdminAllClasses";
import AddClass from "../pages/dashboard/teacherPage/AddClass";
import EnrollClass from "../pages/dashboard/studentPage/EnrollClass";
import Cart from "../pages/dashboard/studentPage/Cart";
import Payment from "../pages/payment/Payment";
import TeacherClass from "../pages/dashboard/teacherPage/TeacherClass";
import Profile from "../pages/profile/Profile";




const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "allClasses",
          element: <AllClasses></AllClasses>
        },
        {
          path: "tech",
          element: <TechOn></TechOn>
        }
      ]
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/login",
      element: <Login></Login>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "myClass",
          element: <EnrollClass></EnrollClass>
        },
        {
          path:"users",
          element: <AllUsers></AllUsers>
        },
        {
          path: "teacherReq",
          element: <TeacherRequest></TeacherRequest>
        },
        {
          path: "allClasses",
          element: <AdminAllClasses></AdminAllClasses>
        },
        {
          path: "addClass",
          element: <AddClass></AddClass>
        },
        {
          path: "cart",
          element: <Cart></Cart>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        {
          path: "teacherClass",
          element: <TeacherClass></TeacherClass>
        },
        {
          path: "profile",
          element: <Profile></Profile>
        }
      ]
    }
  ]);

export default Router;