import { useNavigate } from "react-router";
import { routePaths } from "./routePaths";
import { Button } from "@/shared/components/Button";

export default function Root() {
  const navigate = useNavigate();

  navigate("/home");

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3">
      <Button onClick={() => navigate(routePaths.HOME)}>Home</Button>
      <Button onClick={() => navigate(routePaths.ONBOARDING)}>
        Onboarding
      </Button>
    </div>
  );
}
