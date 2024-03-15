import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOut().then(() => {
            return <Navigate to="/login"></Navigate>;
          });
        }
      }
    );
  }, [logOut]);

  return axiosSecure;
};

export default useAxiosSecure;
