import { Card, CardContent } from "@/shared/components/Card";
import { Skeleton } from "@/shared/components/Skeleton";
import { FC } from "react";

const ResultCardSkeleton: FC = () => {
  return (
    <Card className={"bg-white text-black"}>
      <CardContent className="flex flex-col gap-2 p-2">
        <Skeleton className="w-full aspect-square rounded-md bg-primary/40" />
        <Skeleton className="w-[40%] h-[24px] bg-primary/40" />
        <Skeleton className="w-[20%] h-[16px] bg-primary/40" />
      </CardContent>
    </Card>
  );
};

export default ResultCardSkeleton;
