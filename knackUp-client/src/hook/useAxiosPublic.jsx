import axios from "axios";

 
 const axiosPublic = axios.create({
    baseURL: "https://knack-up-server.vercel.app",
 })

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;