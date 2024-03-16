import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import SignUp from "../authentication/singUp/SignUp";
import Login from "../authentication/login/Login";
import AllClasses from "../pages/allClasses/AllClasses";
import TechOn from "../pages/techOnKnack/TechOn";
import PrivateRoute from "./PrivateRoute";

import EnrollClass from "../pages/dashboard/EnrollClass";
import Dashboard from "../layout/dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import AllUsers from "../pages/dashboard/AllUsers";




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
          element: <PrivateRoute><TechOn></TechOn></PrivateRoute> 
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
        }
      ]
    }
  ]);

export default Router;