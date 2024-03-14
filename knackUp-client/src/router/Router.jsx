import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import SignUp from "../authentication/singUp/SignUp";
import Login from "../authentication/login/Login";
import AllClasses from "../pages/allClasses/AllClasses";
import TechOn from "../pages/techOnKnack/TechOn";
import ClassDetails from "../pages/allClasses/ClassDetails";




const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
      element: <SignUp></SignUp>
    },
    {
      path: "/login",
      element: <Login></Login>
    }
  ]);

export default Router;