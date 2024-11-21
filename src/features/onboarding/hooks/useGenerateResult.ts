import { useGenerateResultMutation } from "@/shared/utils/base.api";

export type GenerateResultPayload = {
  personImageUrl: string;
  clothingImageUrl: string;
};

export const useGenerateResult = () => {
  const [generateResult, { isLoading, isSuccess, status }] =
    useGenerateResultMutation();

  return { generateResult, isLoading, isSuccess, status };
};
