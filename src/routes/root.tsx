import { useNavigate } from "react-router";
import { routePaths } from "./routePaths";
import { Button } from "@/shared/components/Button";
import { Fragment } from "react/jsx-runtime";

export default function Root() {
  const isOnboardingCompleted = localStorage.getItem("onboarding");
  const navigate = useNavigate();

  navigate("/home");

  return (
    <Fragment>
      <Button onClick={() => navigate(routePaths.HOME)}>Home</Button>
      <Button onClick={() => navigate(routePaths.ONBOARDING)}>Onboarding</Button>
    </Fragment>
  );
}
