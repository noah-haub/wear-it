import { MainLogo } from "@/shared/components/MainLogo";
import { OnboardingLayout } from "./OnboardingLayout";
import { Button } from "@/shared/components/Button";
import Text from "@/shared/components/Text";

export const OnboardingOverview = () => {
  return (
    <OnboardingLayout>
      <div className="flex flex-col gap-2 items-center">
        <MainLogo />
        <Text variant="title">WearIt</Text>
        <Button>Next</Button>
      </div>
    </OnboardingLayout>
  );
};
