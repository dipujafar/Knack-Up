import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllClasses = () => {
    const axiosSecure = useAxiosSecure();
    const {
      data: allClasses = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["allClasses"],
      queryFn: async () => {
          const res = await axiosSecure.get(`/allClasses`);
          return res?.data;
      },
    });
  
    return [allClasses, isLoading, refetch];
};

export default useAllClasses;