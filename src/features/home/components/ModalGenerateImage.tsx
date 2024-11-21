import { useImageGeneratorContext } from "@/features/onboarding/context/ImageGeneratorContext";
import { useGenerateResult } from "@/features/onboarding/hooks/useGenerateResult";
import { Button } from "@/shared/components/Button";
import { InputUploadPicture } from "@/shared/components/InputUploadPicture";
import { Plus, X } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import ImagePreview from "./ImagePreview";

type Props = {
  setShowModal: (show: boolean) => void;
};

export const ModalGenerateImage = ({ setShowModal }: Props) => {
  const {
    clothingImageUrl,
    personImageUrl,
    setClothingImageUrl,
    setPersonImageUrl,
  } = useImageGeneratorContext();
  const personImageInputRef = useRef<HTMLInputElement | null>(null);
  const clothingImageInputRef = useRef<HTMLInputElement | null>(null);
  const { generateResult, isLoading } = useGenerateResult();

  const triggerPersonImageUpload = () => {
    if (personImageInputRef.current) {
      personImageInputRef.current?.click();
    }
  };

  const handlePersonImageChange = (file: File) => {
    setPersonImageUrl(file);
  };
  const triggerClothingImageUpload = () => {
    if (clothingImageInputRef.current) {
      clothingImageInputRef.current?.click();
    }
  };

  const handleClothingImageChange = (file: File) => {
    setClothingImageUrl(file);
  };

  const handleGenerateImage = () => {
    generateResult({ clothingImageUrl, personImageUrl });
  };

  return (
    <motion.div
      className="w-full h-full bg-black/25 fixed top-0 left-0"
      animate={{
        opacity: [0, 1],
      }}
      exit={{
        opacity: [1, 0],
      }}
      onClick={() => setShowModal(false)}
    >
      <motion.div
        className="bg-white rounded-t-3xl fixed w-full p-6 bottom-0 flex flex-col gap-8"
        animate={{
          y: ["100%", "0%"],
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        exit={{
          y: ["0%", "100%"],
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-normal">Generation</h2>
          <button
            className="bg-lightGray rounded-full size-8 p-1 flex items-center justify-center"
            onClick={() => setShowModal(false)}
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl font-normal">1. Your picture</h3>
            <p className="text-base font-normal text-black/50">
              Upload a picture of yourself or take one right now. Make sure the
              picture shows everything needed for the clothes you want to try on
            </p>
          </div>

          {personImageUrl ? (
            <ImagePreview
              onClose={() => setPersonImageUrl("")}
              imageSrc={personImageUrl}
            />
          ) : (
            <button
              className="rounded-xl w-full py-6 border-2 border-black/50 text-black/50 border-dashed flex items-center justify-center"
              onClick={triggerPersonImageUpload}
            >
              <Plus size={20} />
            </button>
          )}

          <InputUploadPicture
            ref={personImageInputRef}
            onChange={handlePersonImageChange}
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl font-normal">2. The clothes</h3>
            <p className="text-base font-normal text-black/50">
              Upload a picture of the clothes you want to try.
            </p>
          </div>

          {clothingImageUrl ? (
            <ImagePreview
              onClose={() => setClothingImageUrl("")}
              imageSrc={clothingImageUrl}
            />
          ) : (
            <button
              className="rounded-xl w-full py-6 border-2 border-black/50 text-black/50 border-dashed flex items-center justify-center"
              onClick={triggerClothingImageUpload}
            >
              <Plus size={20} />
            </button>
          )}

          <InputUploadPicture
            ref={clothingImageInputRef}
            onChange={handleClothingImageChange}
          />
        </div>

        <div className="text-center">
          <Button
            variant="secondary"
            className="w-fit bg-black text-white"
            disabled={isLoading}
            onClick={handleGenerateImage}
          >
            Generate
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
