import { cva, VariantProps } from "class-variance-authority";
import { FC, PropsWithChildren } from "react";
import { cn } from "../utils";

const textVariants = cva("", {
  variants: {
    variant: {
      title: "text-primary text-5xl",
      body: "text-primary text-base",
    },
  },
});

type Props = { className?: string } & VariantProps<typeof textVariants>;

const Text: FC<PropsWithChildren<Props>> = ({
  variant,
  children,
  className,
}) => {
  return (
    <div className={cn(textVariants({ variant }), className)}>{children}</div>
  );
};

export default Text;
