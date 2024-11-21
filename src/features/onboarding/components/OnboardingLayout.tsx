import { FC, PropsWithChildren } from "react";

type Props = {
  backgroundImageSrc?: string;
};

export const OnboardingLayout: FC<PropsWithChildren<Props>> = ({
  children,
  backgroundImageSrc,
}) => {
  return backgroundImageSrc ? (
    <div className="h-screen text-primary">
      <div className="relative w-full h-full">
        <img
          src={backgroundImageSrc}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="background"
        />
        <div className="absolute bottom-0 bg-primary rounded-t-3xl w-full p-6 h-1/4">
          {children}
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full flex items-center justify-center px-4 h-screen bg-primary text-primary">
      {children}
    </div>
  );
};
