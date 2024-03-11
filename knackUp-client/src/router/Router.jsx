import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import SignUp from "../authentication/singUp/SignUp";
import Login from "../authentication/login/Login";




const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>
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