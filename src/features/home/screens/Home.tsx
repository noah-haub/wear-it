import { FC } from "react";
import useResults, { Result } from "../hooks/useResults";
import Text from "@/shared/components/Text";
import NavBar from "@/shared/components/NavBar";
import ResultCard from "../components/ResultCard";

const Home: FC = () => {
  const { data: results, isLoading } = useResults();

  return (
    <div className="p-6 flex flex-col gap-4">
      <NavBar>Results</NavBar>
      <div
        className={
          "w-full h-full grid grid-flow-row md:grid-cols-4 grid-cols-2 justify-between flex-wrap gap-4"
        }
      >
        {results &&
          results
            .sort((a: Result, b: Result) => +b.createdAt - +a.createdAt)
            .map((result) => (
              <>
                <ResultCard result={result} key={result.id} />
                <ResultCard result={result} key={result.id} />
                <ResultCard result={result} key={result.id} />
                <ResultCard result={result} key={result.id} />
                <ResultCard result={result} key={result.id} />
                <ResultCard result={result} key={result.id} />
                <ResultCard result={result} key={result.id} />
              </>
            ))}
      </div>
    </div>
  );
};

export default Home;
