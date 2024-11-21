import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { OnboardingOverview } from "./features/onboarding/screens/OnboardingOverview";
import { OnboardingYourPicture } from "./features/onboarding/screens/OnboardingYourPicture";
import Home from "./features/home/screens/Home";
import { IntlProvider } from "react-intl";
import { OnboardingDesiredClothing } from "./features/onboarding/screens/OnboardingDesiredClothing";
import { OnboardingResult } from "./features/onboarding/screens/OnboardingResult";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { wearItApi } from "./shared/utils/base.api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/onboarding",
    children: [
      { path: "", element: <OnboardingOverview /> },
      { path: "your-picture", element: <OnboardingYourPicture /> },
      { path: "desired-clothing", element: <OnboardingDesiredClothing /> },
      { path: "result", element: <OnboardingResult /> },
    ],
  },
  { path: "/home", element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <meta
      name="viewport"
      content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no viewport-fit=cover"
    />
    <IntlProvider locale="en">
      <ApiProvider api={wearItApi}>
        <RouterProvider router={router} />
      </ApiProvider>
    </IntlProvider>
  </React.StrictMode>
);
