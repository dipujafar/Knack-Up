import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = (search) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      console.log(search);
      const res = await axiosSecure.get(`/users?search=${search}`);
      return res?.data;
    },
  });

  return [users, isLoading, refetch];
};

export default useUsers;
