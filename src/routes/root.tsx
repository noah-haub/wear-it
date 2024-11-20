import { useNavigate } from "react-router";
import { routePaths } from "./routePaths";

export default function Root() {
  const isOnboardingCompleted = localStorage.getItem("onboarding");
  const navigate = useNavigate();
  return (
    <>
      {isOnboardingCompleted
        ? navigate(routePaths.HOME)
        : navigate(routePaths.ONBOARDING)}
    </>
  );
}
