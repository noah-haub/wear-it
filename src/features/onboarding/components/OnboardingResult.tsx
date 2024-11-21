import Text from "@/shared/components/Text";
import { OnboardingLayout } from "./OnboardingLayout";
import backgroundImageSrc from "@/assets/onboarding_result_background.png";
import { Button } from "@/shared/components/Button";
import { routePaths } from "@/routes/routePaths";
import { useNavigate } from "react-router";

export const OnboardingResult = () => {
  const navigate = useNavigate();
  return (
    <OnboardingLayout backgroundImageSrc={backgroundImageSrc}>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col gap-2 items-center">
          <Text variant="title">Strike a pose!</Text>
          <Text>Upload your best selfie or full-body shot.</Text>
        </div>
        <Button onClick={() => navigate(routePaths.HOME)}>Go Home</Button>
      </div>
    </OnboardingLayout>
  );
};
