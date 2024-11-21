import { Result } from "@/features/home/hooks/useResults";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wearItApi = createApi({
  reducerPath: "wearItApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}/`,
  }),
  endpoints: (builder) => ({
    getResults: builder.query<Result[], void>({
      query: () => "images",
    }),
  }),
});

export const { useGetResultsQuery } = wearItApi;
