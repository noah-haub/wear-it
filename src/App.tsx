import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Root from "./routes/root";
import Home from "./features/home/screens/Home";
import { IntlProvider } from "react-intl";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { wearItApi } from "./shared/utils/base.api";
import { useEffect, useState } from "react";
import { OnboardingOverview } from "./features/onboarding/screens/OnboardingOverview";
import { ImageGeneratorContextProvider } from "./features/onboarding/context/ImageGeneratorContext";
import { OnboardingYourPicture } from "./features/onboarding/screens/OnboardingYourPicture";
import { OnboardingDesiredClothing } from "./features/onboarding/screens/OnboardingDesiredClothing";
import { OnboardingResult } from "./features/onboarding/screens/OnboardingResult";

const App = () => {
  return (
    <BrowserRouter>
      <IntlProvider locale="en">
        <ApiProvider api={wearItApi}>
          <Content />
        </ApiProvider>
      </IntlProvider>
    </BrowserRouter>
  );
};

function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Root />} />

        <Route
          path="/onboarding"
          element={
            <ImageGeneratorContextProvider>
              <Outlet />
            </ImageGeneratorContextProvider>
          }
        >
          <Route path="" element={<OnboardingOverview />} />
          <Route path="your-picture" element={<OnboardingYourPicture />} />
          <Route
            path="desired-clothing"
            element={<OnboardingDesiredClothing />}
          />
          <Route path="result" element={<OnboardingResult />} />
        </Route>

        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
