import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFeedback = () => {
    const axiosPublic = useAxiosPublic();
  const { data: feedbacks = [], isLoading, refetch } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/feedbacks");
      return res?.data;
    },
  });
  console.log(feedbacks)

return [feedbacks, isLoading, refetch];
};

export default useFeedback;