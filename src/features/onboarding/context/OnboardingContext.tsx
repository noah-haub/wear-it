import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type Context = {
  personPicture: string;
  clothingPicture: string;
  setPersonPicture: (file: File) => void;
  setClothingPicture: (file: File) => void;
};

const OnboardingContext = createContext<Context>({
  personPicture: "",
  clothingPicture: "",
  setPersonPicture: () => {},
  setClothingPicture: () => {},
});

export const useOnboardingContext = () => {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error(
      "useOnboardingContext must be used within a OnboardingContextProvider"
    );
  }

  return context;
};

export const OnboardingContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [personPicture, setPersonPicture] = useState("");
  const [clothingPicture, setClothingPicture] = useState("");

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

  const handleSetPersonFile = (file: File) => {
    convertFileToBase64Picture(file, (picture: string) =>
      setPersonPicture(picture)
    );
  };
  const handleSetClothingFile = (file: File) => {
    convertFileToBase64Picture(file, (picture: string) =>
      setClothingPicture(picture)
    );
  };

  const contextValue = {
    personPicture,
    clothingPicture,
    setPersonPicture: handleSetPersonFile,
    setClothingPicture: handleSetClothingFile,
  };

  return (
    <OnboardingContext.Provider value={contextValue}>
      {children}
    </OnboardingContext.Provider>
  );
};
