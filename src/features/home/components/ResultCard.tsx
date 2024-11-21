import ProgressiveImage from "@/shared/components/ProgressiveImage";
import Text from "@/shared/components/Text";
import { Star, X } from "lucide-react";
import { FC, useState } from "react";
import { Result } from "../hooks/useResults";
import { FormattedDate } from "react-intl";
import { Dialog, DialogClose, DialogTrigger } from "@/shared/components/Dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import { Button } from "@/shared/components/Button";
import { motion } from "motion/react";
import { ImageViewer } from "antd-mobile";

interface Props {
  result: Result;
}

const ResultCard: FC<Props> = ({ result }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className="bg-lightGray rounded-xl p-1.5 flex flex-col gap-1.5 text-center"
        onClick={() => setVisible(true)}
      >
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
      <ImageViewer
        classNames={{
          mask: "customize-mask",
          body: "customize-body",
        }}
        image={result.imageUrl}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default ResultCard;
