import Text from "@/shared/components/Text";
import { OnboardingLayout } from "../components/OnboardingLayout";
import backgroundImageSrc from "@/assets/your_picture_background.png";
import { Button } from "@/shared/components/Button";
import { routePaths } from "@/routes/routePaths";
import { useNavigate } from "react-router";
import { ChangeEvent, useRef } from "react";
import { useOnboardingContext } from "../context/OnboardingContext";

export const OnboardingYourPicture = () => {
  const navigate = useNavigate();
  const { setPersonPicture } = useOnboardingContext();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const triggerUpload = () => {
    if (inputRef.current) {
      inputRef.current?.click();
    }
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setPersonPicture(file);

    navigate(routePaths.ONBOARDING_DESIRED_CLOTHING);
  };

  return (
    <OnboardingLayout backgroundImageSrc={backgroundImageSrc}>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col gap-2 items-center">
          <Text variant="title">Strike a pose!</Text>
          <Text>Upload your best selfie or full-body shot.</Text>
        </div>
        <Button onClick={triggerUpload}>Pick/take a picture</Button>
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
