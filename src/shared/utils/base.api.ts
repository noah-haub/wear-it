import { Result } from "@/features/home/hooks/useResults";
import { GenerateResultPayload } from "@/features/onboarding/hooks/useGenerateResult";
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
    generateResult: builder.mutation<Result, GenerateResultPayload>({
      query: ({ personImageUrl, clothingImageUrl }) => ({
        url: "images",
        method: "POST",
        body: { personImageUrl, clothingImageUrl },
      }),
    }),
  }),
});

export const { useGetResultsQuery, useGenerateResultMutation } = wearItApi;
