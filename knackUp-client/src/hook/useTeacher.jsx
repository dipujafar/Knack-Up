import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useTeacher = () => {
    const {user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isTeacher, isLoading: teacherLoading} = useQuery({
        queryKey: ["isTeacher"],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/teacher/${user?.email}`);
            return res?.data?.teacher;
        }
    })
    return [isTeacher, teacherLoading];
};

export default useTeacher;