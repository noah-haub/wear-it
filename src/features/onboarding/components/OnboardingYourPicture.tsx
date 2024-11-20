import { OnboardingLayout } from "./OnboardingLayout";
import backgroundImageSrc from "@/assets/your_picture_background.png";
export const OnboardingYourPicture = () => {
  return (
    <OnboardingLayout backgroundImageSrc={backgroundImageSrc}>
      <div>Your picture</div>
    </OnboardingLayout>
  );
};
