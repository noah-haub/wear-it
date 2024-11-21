import { Button } from "@/shared/components/Button";

type Props = {
    setShowModal: (show: boolean) => void;
};

export const ModalGenerateImage = ({ setShowModal }: Props) => {
    return (
        <div className="w-full h-full bg-black/25 fixed top-0 left-0" onClick={() => setShowModal(false)}>
            <div className="bg-white rounded-t-3xl fixed w-full p-6 bottom-0 flex flex-col gap-8" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-normal">Generation</h2>
                    <button className="bg-lightGray rounded-full size-8 p-1" onClick={() => setShowModal(false)}>
                        x
                    </button>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-xl font-normal">1. Your picture</h3>
                        <p className="text-base font-normal text-black/50">
                            Upload a picture of yourself or take one right now. Make sure the picture shows everything needed for the clothes you want to try on
                        </p>
                    </div>
                    <button
                        className="rounded-xl w-full py-6 border-2 border-black/50 text-black/50 border-dashed"
                        onClick={() => {
                            // TODO: Add input for image
                        }}
                    >
                        +
                    </button>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-xl font-normal">2. The clothes</h3>
                        <p className="text-base font-normal text-black/50">Upload a picture of the clothes you want to try.</p>
                    </div>
                    <button
                        className="rounded-xl w-full py-6 border-2 border-black/50 text-black/50 border-dashed"
                        onClick={() => {
                            // TODO: Add input for image
                        }}
                    >
                        +
                    </button>
                </div>

                <div className="text-center">
                    <Button
                        className="w-fit bg-black text-white"
                        onClick={() => {
                            // TODO: Generate image
                        }}
                    >
                        Generate
                    </Button>
                </div>
            </div>
        </div>
    );
};
