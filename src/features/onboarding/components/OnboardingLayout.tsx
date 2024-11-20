import { FC, PropsWithChildren } from "react";

type Props = {
  backgroundImageSrc?: string;
};

export const OnboardingLayout: FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      {children}
    </div>
  );
};
