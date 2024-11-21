import Text from "@/shared/components/Text";
import { OnboardingLayout } from "../components/OnboardingLayout";
import backgroundImageSrc from "@/assets/desired_clothing_background.jpg";
import { Button } from "@/shared/components/Button";
import { useNavigate } from "react-router";
import { useRef } from "react";
import { routePaths } from "@/routes/routePaths";
import { useImageGeneratorContext } from "../context/ImageGeneratorContext";
import { InputUploadPicture } from "@/shared/components/InputUploadPicture";

export const OnboardingDesiredClothing = () => {
  const navigate = useNavigate();
  const { setClothingImageUrl } = useImageGeneratorContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const triggerUpload = () => {
    if (inputRef.current) {
      inputRef.current?.click();
    }
  };

  const handleUpload = (file: File) => {
    setClothingImageUrl(file);
    navigate(routePaths.ONBOARDING_RESULT);
  };

  return (
    <OnboardingLayout backgroundImageSrc={backgroundImageSrc}>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col gap-2 items-center">
          <Text variant="title">Pick Your Outfit</Text>
          <Text>Drop in a picture of the clothes you’re eyeing.</Text>
        </div>
        <Button onClick={triggerUpload}>Pick/take a picture</Button>
        <InputUploadPicture ref={inputRef} onChange={handleUpload} />
      </div>
    </OnboardingLayout>
  );
};
