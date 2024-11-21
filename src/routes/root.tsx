import { useNavigate } from "react-router";
import { routePaths } from "./routePaths";
import { Button } from "@/shared/components/Button";
import { Fragment } from "react/jsx-runtime";

export default function Root() {
  const isOnboardingCompleted = localStorage.getItem("onboarding");
  const navigate = useNavigate();

  navigate("/home");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button onClick={() => navigate(routePaths.HOME)}>Home</Button>
      <Button onClick={() => navigate(routePaths.ONBOARDING)}>
        Onboarding
      </Button>
    </div>
  );
}
