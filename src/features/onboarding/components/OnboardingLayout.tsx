import { FC, PropsWithChildren } from "react";

type Props = {
  backgroundImageSrc?: string;
};

export const OnboardingLayout: FC<PropsWithChildren<Props>> = ({
  children,
  backgroundImageSrc,
}) => {
  return backgroundImageSrc ? (
    <div className="h-screen">
      <div className="relative w-full h-full">
        <img
          src={backgroundImageSrc}
          className="absolute top-0 left-0 w-full h-full"
          alt="background"
        />
        <div className="absolute bottom-0 bg-primary rounded-t-3xl w-full p-10 h-1/3">
          {children}
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full flex items-center justify-center px-4 h-screen">
      {children}
    </div>
  );
};
