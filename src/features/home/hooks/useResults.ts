import { useGetResultsQuery } from "@/shared/utils/base.api";

export type Result = {
  id: number;
  imageUrl: string;
  rating: number;
  createdAt: string;
};

const useResults = () => {
  const { data, isLoading } = useGetResultsQuery();

  return {
    data,
    isLoading,
  };
};

export default useResults;
