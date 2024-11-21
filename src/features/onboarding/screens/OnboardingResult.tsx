import Text from "@/shared/components/Text";
import { OnboardingLayout } from "../components/OnboardingLayout";
import backgroundImageSrc from "@/assets/onboarding_result_background.png";
import { Button } from "@/shared/components/Button";
import { routePaths } from "@/routes/routePaths";
import { useNavigate } from "react-router";
import { useGenerateResult } from "../hooks/useGenerateResult";
import { useImageGeneratorContext } from "../context/ImageGeneratorContext";
import { useEffect, useMemo } from "react";
import { Mosaic } from "react-loading-indicators";
import { QueryStatus } from "@reduxjs/toolkit/query";

export const OnboardingResult = () => {
  const navigate = useNavigate();
  const { clothingImageUrl, personImageUrl } = useImageGeneratorContext();

  const { generateResult, isLoading, status } = useGenerateResult();

  const handleGenerateResult = () => {
    generateResult({
      personImageUrl: personImageUrl,
      clothingImageUrl: clothingImageUrl,
    });
  };

  useEffect(() => {
    if (status === QueryStatus.fulfilled || status === QueryStatus.rejected) {
      navigate(routePaths.HOME);
    }
  }, [status]);

  const motivationalQuotes = [
    "Patience is not simply the ability to wait – it’s how we behave while we’re waiting. – Joyce Meyer",
    "The two most powerful warriors are patience and time. – Leo Tolstoy",
    "Good things come to those who wait, but better things come to those who work for it.",
    "Waiting is a sign of true love and patience. Anyone can say I love you, but not everyone can wait and prove it’s true.",
    "Sometimes, waiting is the hardest part, but it is where growth happens.",
    "Patience is bitter, but its fruit is sweet. – Jean-Jacques Rousseau",
    "In the rush to return to normal, use this time to consider which parts of normal are worth rushing back to.",
    "Don’t waste your time in anger, regrets, worries, or grudges. Life is too short to be unhappy.",
    "Rivers know this: there is no hurry. We shall get there someday. – A.A. Milne",
    "Be strong enough to let go and wise enough to wait for what you deserve.",
    "The ability to wait patiently is the mark of true strength and resilience.",
    "Everything comes to you at the right time. Be patient and trust the process.",
    "Waiting gives you the opportunity to prepare yourself for what’s coming next.",
    "Sometimes the wait is necessary for us to grow into what we’re meant to be.",
    "Patience is not about waiting, but the ability to keep a good attitude while waiting.",
  ];

  const selectedQuote = useMemo(() => {
    const index = (Math.random() * 100) % 15;

    return motivationalQuotes[index];
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col gap-10 bg-primary justify-center items-center p-10">
        <Mosaic color={["#8CC1EC"]} />

        <Text className="text-primary">{selectedQuote}</Text>
      </div>
    );
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
