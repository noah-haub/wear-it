import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type Context = {
  personImageUrl: string;
  clothingImageUrl: string;
  setPersonImageUrl: (file: File | string) => void;
  setClothingImageUrl: (file: File | string) => void;
};

const ImageGeneratorContext = createContext<Context>({
  personImageUrl: "",
  clothingImageUrl: "",
  setPersonImageUrl: () => {},
  setClothingImageUrl: () => {},
});

export const useImageGeneratorContext = () => {
  const context = useContext(ImageGeneratorContext);

  if (!context) {
    throw new Error(
      "useOnboardingContext must be used within a OnboardingContextProvider"
    );
  }

  return context;
};

export const ImageGeneratorContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [personImageUrl, setPersonImageUrl] = useState("");
  const [clothingImageUrl, setClothingImageUrl] = useState("");

  const convertFileToBase64Picture = (
    file: File,
    callback: (base64: string) => void
  ) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string; // This will be a base64 string
      callback(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleSetPersonFile = (file: File | string) => {
    if (typeof file === "string") {
      setPersonImageUrl(file);
    } else {
      convertFileToBase64Picture(file, (picture: string) =>
        setPersonImageUrl(picture)
      );
    }
  };
  const handleSetClothingFile = (file: File | string) => {
    if (typeof file === "string") {
      setClothingImageUrl(file);
    } else {
      convertFileToBase64Picture(file, (picture: string) =>
        setClothingImageUrl(picture)
      );
    }
  };

  const contextValue = {
    personImageUrl: personImageUrl,
    clothingImageUrl: clothingImageUrl,
    setPersonImageUrl: handleSetPersonFile,
    setClothingImageUrl: handleSetClothingFile,
  };

  return (
    <ImageGeneratorContext.Provider value={contextValue}>
      {children}
    </ImageGeneratorContext.Provider>
  );
};
