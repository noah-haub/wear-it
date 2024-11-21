import { useGetResultsQuery } from "@/shared/utils/base.api";

export type Result = {
  id: number;
  imageUrl: string;
  rating: number;
  createdAt: string;
};

const useResults = () => {
  const { data, isLoading, refetch } = useGetResultsQuery();

  return {
    data,
    isLoading,
    refetch,
  };
};

export default useResults;
