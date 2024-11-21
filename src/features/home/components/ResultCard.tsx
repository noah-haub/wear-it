import { FC } from "react";
import { Result } from "../hooks/useResults";
import { Card, CardContent, CardTitle } from "@/shared/components/Card";
import { FormattedDate } from "react-intl";
import Text from "@/shared/components/Text";

interface Props {
  result: Result;
}

const ResultCard: FC<Props> = ({ result }) => {
  return (
    <Card className={"bg-white text-black"}>
      <CardContent className="flex flex-col gap-2 p-2">
        <img
          src={result.imageUrl}
          className="w-full aspect-square rounded-md object-cover"
          alt={result.id.toString()}
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
