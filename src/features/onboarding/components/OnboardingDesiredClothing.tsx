import Text from "@/shared/components/Text";
import { OnboardingLayout } from "./OnboardingLayout";
import backgroundImageSrc from "@/assets/desired_clothing_background.png";
import { Button } from "@/shared/components/Button";
import { useNavigate } from "react-router";
import { ChangeEvent, useRef } from "react";
import { routePaths } from "@/routes/routePaths";

export const OnboardingDesiredClothing = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const triggerUpload = () => {
    if (inputRef.current) {
      inputRef.current?.click();
    }
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("current file", event.target.files?.[0]);
    navigate(routePaths.ONBOARDING_RESULT);
  };

  return (
    <OnboardingLayout backgroundImageSrc={backgroundImageSrc}>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col gap-2 items-center">
          <Text variant="title">Pick Your Outfit</Text>
          <Text>Drop in a picture of the clothes you’re eyeing.</Text>
        </div>
        <Button onClick={triggerUpload}>Next</Button>
        <input
          ref={inputRef}
          onChange={handleUpload}
          type="file"
          className="hidden"
          capture="environment"
          accept="image/*"
        />
      </div>
    </OnboardingLayout>
  );
};
