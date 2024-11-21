import {
  useGetPokemonByNameQuery,
  useGetResultsQuery,
} from "@/shared/utils/base.api";
import { useEffect, useState } from "react";

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
