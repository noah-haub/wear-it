import { useState, useEffect, FC } from "react";
import { cn } from "../utils";
import { Skeleton } from "./Skeleton";

interface Props {
  src: string;
  className?: string;
}

const ProgressiveImage: FC<Props> = ({ src, className }) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <>
      {imgSrc ? (
        <img {...{ src: imgSrc }} className={cn("image", className)} />
      ) : (
        <Skeleton className={cn("bg-primary/40", className)} />
      )}
    </>
  );
};
export default ProgressiveImage;
