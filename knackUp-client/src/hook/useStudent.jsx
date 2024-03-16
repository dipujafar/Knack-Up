import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useStudent = () => {
    const {user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isStudent, isLoading: studentLoading} = useQuery({
        queryKey: ["isStudent"],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/student/${user?.email}`);
            console.log(res.data)
            return res?.data?.student;
        }
    })
    return [isStudent, studentLoading];
};

export default useStudent;