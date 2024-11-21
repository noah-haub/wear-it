import ProgressiveImage from "@/shared/components/ProgressiveImage";
import Text from "@/shared/components/Text";
import { Star, X } from "lucide-react";
import { FC } from "react";
import { Result } from "../hooks/useResults";
import { FormattedDate } from "react-intl";
import { Dialog, DialogClose, DialogTrigger } from "@/shared/components/Dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import { Button } from "@/shared/components/Button";
import { motion } from "motion/react";

interface Props {
  result: Result;
}

const ResultCard: FC<Props> = ({ result }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-lightGray rounded-xl p-1.5 flex flex-col gap-1.5 text-center">
          <ProgressiveImage
            src={result.imageUrl}
            className="w-full aspect-square rounded-lg object-cover"
          />
          <div className="flex flex-col gap-0 mx-auto">
            <div className="flex flex-row gap-1">
              {Array.from({ length: result.rating }).map((_, index) => (
                <Star key={index} fill="#FFE821" strokeWidth={0} />
              ))}
              {Array.from({ length: 5 - result.rating }).map((_, index) => (
                <Star key={index} fill="#DDDDDD" strokeWidth={0} />
              ))}
            </div>
            <p className="text-lg font-medium">AI-Rating</p>
          </div>
          <Text>
            <FormattedDate
              value={result.createdAt}
              day="2-digit"
              year="numeric"
              month="short"
            />
          </Text>
        </div>
      </DialogTrigger>

      <DialogClose asChild>
        <DialogContent className="fixed z-50 inset-0 flex justify-center items-center bg-primary/25">
          <motion.div
            className="sm:max-w-md aspect-square rounded-md bg-primary relative"
            animate={{
              opacity: [0, 1],
            }}
            exit={{
              opacity: [1, 0],
            }}
          >
            <DialogClose asChild className="absolute top-2 right-2">
              <button className="bg-lightGray rounded-full size-8 p-1 flex items-center justify-center">
                <X size={16} />
              </button>
            </DialogClose>
            <div onClick={(e) => e.stopPropagation()}>
              <ProgressiveImage
                src={result.imageUrl}
                className="md:w-full w-screen aspect-square rounded-lg object-cover"
              />
            </div>
          </motion.div>
        </DialogContent>
      </DialogClose>
    </Dialog>
  );
};

export default ResultCard;
