import { useEffect, useState } from "react";

export type Result = {
  id: number;
  imageUrl: string;
  rating: number;
  createdAt: string;
};
const useResults = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    createDemoResults();
  }, []);

  const createDemoResults = (): void => {
    setResults([]);
    setIsLoading(true);

    setTimeout(() => {
      const results: Result[] = [];

      for (let i = 1; i <= 6; i++) {
        results.push({
          id: i,
          imageUrl: `https://via.placeholder.com/150?text=Image+${i}`, // Placeholder image URL
          rating: parseFloat((Math.random() * 5).toFixed(1)), // Random rating between 0 and 5
          createdAt: new Date(Date.now() - i * 86400000).toISOString(), // Date offset by i days
        });
      }

      setResults(results);
      setIsLoading(false);
    }, 1000);
  };

  return {
    data: results,
    isLoading,
  };
};

export default useResults;
