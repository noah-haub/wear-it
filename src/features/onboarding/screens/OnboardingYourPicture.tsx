import Text from "@/shared/components/Text";
import { OnboardingLayout } from "../components/OnboardingLayout";
import backgroundImageSrc from "@/assets/your_picture_background.jpg";
import { Button } from "@/shared/components/Button";
import { routePaths } from "@/routes/routePaths";
import { useNavigate } from "react-router";
import { useRef } from "react";
import { useImageGeneratorContext } from "../context/ImageGeneratorContext";
import { InputUploadPicture } from "@/shared/components/InputUploadPicture";

export const OnboardingYourPicture = () => {
  const navigate = useNavigate();
  const { setPersonImageUrl } = useImageGeneratorContext();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const triggerUpload = () => {
    if (inputRef.current) {
      inputRef.current?.click();
    }
  };

  const handleUpload = (file: File) => {
    setPersonImageUrl(file);

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
        <InputUploadPicture ref={inputRef} onChange={handleUpload} />
      </div>
    </OnboardingLayout>
  );
};
