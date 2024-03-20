import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useTeacherClass = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {
      data: teacherClasses = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["teacherClasses"],
      queryFn: async () => {
          const res = await axiosSecure.get(`/teacherClasses/${user?.email}`);
          return res?.data;
      },
    });
  
    return [teacherClasses, isLoading, refetch];
};

export default useTeacherClass;