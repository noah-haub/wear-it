import ProgressiveImage from "@/shared/components/ProgressiveImage";
import { Star } from "lucide-react";
import { FC } from "react";
import { Result } from "../hooks/useResults";

interface Props {
    result: Result;
}

const ResultCard: FC<Props> = ({ result }) => {
    return (
        <div className="bg-lightGray rounded-xl p-1.5 flex flex-col gap-1.5 text-center">
            <ProgressiveImage src={result.imageUrl} className="w-full aspect-square rounded-lg object-cover" />
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
            <p className="text-sm text-black/50">{new Date(result.createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default ResultCard;
