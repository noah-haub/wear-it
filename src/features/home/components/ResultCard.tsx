import { FC } from "react";
import { Result } from "../hooks/useResults";
import { Card, CardContent, CardTitle } from "@/shared/components/Card";
import { FormattedDate } from "react-intl";
import Text from "@/shared/components/Text";
import ProgressiveImage from "@/shared/components/ProgressiveImage";

interface Props {
  result: Result;
}

const ResultCard: FC<Props> = ({ result }) => {
  return (
    <Card className={"bg-white text-black"}>
      <CardContent className="flex flex-col gap-2 p-2">
        <ProgressiveImage
          src={result.imageUrl}
          className="w-full aspect-square rounded-md"
        />
        <CardTitle>{result.rating}</CardTitle>
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
