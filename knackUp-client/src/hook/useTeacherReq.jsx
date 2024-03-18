import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useTeacherReq = () => {
    const axiosSecure = useAxiosSecure();
    const {loading} = useAuth();
    const { data: teacherReq = [], isLoading, refetch } = useQuery({
      queryKey: ["teacherReq"],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure.get('/users/TeacherReq');
        return res?.data;
      },
    });
  
  return [teacherReq, isLoading, refetch];
  };

export default useTeacherReq;