import { ChangeEvent, forwardRef } from "react";

type Props = {
  onChange: (file: File) => void;
};

export const InputUploadPicture = forwardRef<HTMLInputElement, Props>(
  ({ onChange }, ref) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }

      onChange(file);
    };
    return (
      <input
        ref={ref}
        onChange={handleChange}
        type="file"
        className="hidden"
        capture="environment"
        accept="image/*"
      />
    );
  }
);
