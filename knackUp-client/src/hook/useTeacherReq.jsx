import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useTeacherReq = () => {
    const axiosSecure = useAxiosSecure();
    const { data: teacherReq = [], isLoading, refetch } = useQuery({
      queryKey: ["teacherReq"],
      queryFn: async () => {
        const res = await axiosSecure.get('/users/TeacherReq');
        return res?.data;
      },
    });
  
  return [teacherReq, isLoading, refetch];
  };

export default useTeacherReq;