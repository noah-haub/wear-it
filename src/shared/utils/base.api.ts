import { Result } from "@/features/home/hooks/useResults";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "process";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}/`,
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<{ ability: string }, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getResults: builder.query<Result[], void>({
      query: () => "images",
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetResultsQuery } = pokemonApi;
