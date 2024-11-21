import { X } from "lucide-react";
import { FC, MouseEvent } from "react";

type Props = {
  imageSrc: string;
  onClose: () => void;
};

const ImagePreview: FC<Props> = ({ imageSrc, onClose }) => {
  const handleClose = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    onClose();
  };
  return (
    <div className="relative self-center flex justify-center h-36 p-2">
      <button
        className="bg-lightGray absolute rounded-full -right-3 top-0 size-8 p-2 flex items-center justify-center"
        onClick={handleClose}
      >
        <X size={16} />
      </button>
      <img alt="image preview" className="h-full w-fit" src={imageSrc} />
    </div>
  );
};

export default ImagePreview;
