import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMyCourse = () => {
    const axiosSecure = useAxiosSecure();
    const {user, loading} = useAuth();
    const { data: myCourse = [], isLoading, refetch } = useQuery({
      queryKey: ["myCourse"],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure.get(`/payment/${user?.email}`);
        return res?.data;
      },
    });
  
  return [myCourse , isLoading, refetch];
};

export default useMyCourse;