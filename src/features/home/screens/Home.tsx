import { FC } from "react";
import useResults, { Result } from "../hooks/useResults";
import { Card, CardContent, CardTitle } from "@/shared/components/Card";
import Text from "@/shared/components/Text";
import { FormattedDate } from "react-intl";
import NavBar from "@/shared/components/NavBar";

const Home: FC = () => {
  const { data: results, isLoading } = useResults();

  return (
    <div className="p-6 flex flex-col gap-4">
      <NavBar>
        <Text variant="title">Results</Text>
      </NavBar>
      <div
        className={
          "w-full h-full grid grid-flow-row md:grid-cols-4 grid-cols-2 justify-between flex-wrap gap-4"
        }
      >
        {results &&
          results
            .sort((a: Result, b: Result) => +b.createdAt - +a.createdAt)
            .map((result) => (
              <Card className={"bg-white text-black"} key={result.id}>
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
            ))}
      </div>
    </div>
  );
};

export default Home;
