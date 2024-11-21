import { useNavigate } from "react-router";
import { routePaths } from "./routePaths";
import { Button } from "@/shared/components/Button";
import { useEffect } from "react";

export default function Root() {
  const navigate = useNavigate();

  // navigate(routePaths.ONBOARDING);

  useEffect(() => {
    navigate(routePaths.ONBOARDING);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button onClick={() => navigate(routePaths.HOME)}>Home</Button>
      <Button onClick={() => navigate(routePaths.ONBOARDING)}>
        Onboarding
      </Button>
    </div>
  );
}
