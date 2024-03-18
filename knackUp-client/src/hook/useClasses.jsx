import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useClasses = (search) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      if (search) {
        const res = await axiosPublic.get(`/classes/${search}`);
        const acceptClass = res?.data.filter(course=> course?.status === "accepted");
        return acceptClass;
      } else {
        const res = await axiosPublic.get(`/classes`);
        const acceptClass = res?.data.filter(course=> course?.status === "accepted");
        return acceptClass;
      }
    },
  });

  return [classes, isLoading, refetch];
};

export default useClasses;
