import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import { OnboardingOverview } from "./features/onboarding/components/OnboardingOverview";
import { OnboardingYourPicture } from "./features/onboarding/components/OnboardingYourPicture";
import Home from "./features/home/screens/Home";
import { IntlProvider } from "react-intl";

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
      { path: "desired-clothing", element: null },
      { path: "result", element: null },
    ],
  },
  { path: "/home", element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IntlProvider locale="en">
      <RouterProvider router={router} />
    </IntlProvider>
  </React.StrictMode>
);
