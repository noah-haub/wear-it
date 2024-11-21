import Text from "@/shared/components/Text";
import { OnboardingLayout } from "../components/OnboardingLayout";
import backgroundImageSrc from "@/assets/onboarding_result_background.png";
import { Button } from "@/shared/components/Button";
import { routePaths } from "@/routes/routePaths";
import { useNavigate } from "react-router";
import { useGenerateResult } from "../hooks/useGenerateResult";
import { useEffect } from "react";
import { useImageGeneratorContext } from "../context/ImageGeneratorContext";

export const OnboardingResult = () => {
  const navigate = useNavigate();
  const { clothingImageUrl, personImageUrl } = useImageGeneratorContext();

  const { generateResult, isLoading, isSuccess } = useGenerateResult();

  const handleGenerateResult = () => {
    generateResult({
      personImageUrl: personImageUrl,
      clothingImageUrl: clothingImageUrl,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(routePaths.HOME);
    }
  }, [isSuccess]);

  if (isLoading) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  return (
    <OnboardingLayout backgroundImageSrc={backgroundImageSrc}>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col gap-2 items-center">
          <Text variant="title">Strike a pose!</Text>
          <Text>Upload your best selfie or full-body shot.</Text>
        </div>
        <Button onClick={handleGenerateResult}>Go Home</Button>
      </div>
    </OnboardingLayout>
  );
};
