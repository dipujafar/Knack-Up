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
        return res?.data;
      } else {
        const res = await axiosPublic.get(`/classes`);
        return res?.data;
      }
    },
  });

  return [classes, isLoading, refetch];
};

export default useClasses;
