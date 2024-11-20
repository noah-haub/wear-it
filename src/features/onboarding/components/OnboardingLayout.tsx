import { FC, PropsWithChildren } from "react";

type Props = {
  backgroundImageSrc?: string;
};

export const OnboardingLayout: FC<PropsWithChildren<Props>> = ({
  children,
  backgroundImageSrc,
}) => {
  return (
    <div className="w-full flex items-center justify-center h-screen px-4">
      {backgroundImageSrc ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat">
            <img src={backgroundImageSrc} alt="background" />
            {children}
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
};
