import { useGenerateResultMutation } from "@/shared/utils/base.api";

export type GenerateResultPayload = {
  personImageUrl: string;
  clothingImageUrl: string;
};

export const useGenerateResult = () => {
  const [generateResult, { isLoading, isSuccess }] =
    useGenerateResultMutation();

  return { generateResult, isLoading, isSuccess };
};
