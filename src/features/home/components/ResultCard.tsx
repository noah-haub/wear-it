import { FC } from "react";
import { Result } from "../hooks/useResults";
import { Card, CardContent } from "@/shared/components/Card";
import { FormattedDate } from "react-intl";
import Text from "@/shared/components/Text";
import ProgressiveImage from "@/shared/components/ProgressiveImage";
import { Star } from "lucide-react";

interface Props {
  result: Result;
}

const ResultCard: FC<Props> = ({ result }) => {
  return (
    <Card className={"bg-lightGray text-black border-none"}>
      <CardContent className="flex flex-col gap-4 p-4">
        <ProgressiveImage
          src={result.imageUrl}
          className="w-full aspect-square rounded-md"
        />
        <div className="flex flex-row gap-1">
          {Array.from({ length: result.rating / 2 }).map((_, index) => (
            <Star key={index} fill="#FFE821" strokeWidth={0} />
          ))}
          {Array.from({ length: 5 - result.rating / 2 }).map((_, index) => (
            <Star key={index} fill="#DDDDDD" strokeWidth={0} />
          ))}
        </div>
        <Text>
          <FormattedDate
            value={result.createdAt}
            day="2-digit"
            year="numeric"
            month="short"
          />
        </Text>
      </CardContent>
    </Card>
  );
};

export default ResultCard;

// const ResultCard: FC<Props> = ({ result }) => {
//   return (
//     <div
//       key={result.id}
//       className="bg-lightGray rounded-xl p-1.5 flex flex-col gap-1.5 text-center"
//     >
//       <ProgressiveImage
//         src={result.imageUrl}
//         className="w-full aspect-square rounded-lg object-cover"
//       />
//       <div className="flex flex-col gap-0 mx-auto">
//         <div className="flex flex-row gap-1">
//           {Array.from({ length: result.rating / 2 }).map((_, index) => (
//             <Star key={index} fill="#FFE821" strokeWidth={0} />
//           ))}
//           {Array.from({ length: 5 - result.rating / 2 }).map((_, index) => (
//             <Star key={index} fill="#DDDDDD" strokeWidth={0} />
//           ))}
//         </div>
//         {/* <p className="text-lg font-medium">AI-Rating</p> */}
//       </div>
//       <p className="text-sm text-black/50">
//         {new Date(result.createdAt).toLocaleDateString()}
//       </p>
//     </div>
//   );
// };
