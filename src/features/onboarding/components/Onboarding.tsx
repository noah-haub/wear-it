import { OnboardingLayout } from "./OnboardingLayout";
import { Button } from "@/shared/components/Button";

export const Onboarding = () => {
  return (
    <OnboardingLayout>
      <div className="flex flex-col gap-2">
        Welcome to the onboarding page
        <Button>Next</Button>
      </div>
    </OnboardingLayout>
  );
};
