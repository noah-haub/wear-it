import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import { OnboardingOverview } from "./features/onboarding/components/OnboardingOverview";
import { OnboardingYourPicture } from "./features/onboarding/components/OnboardingYourPicture";

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
  { path: "/home", element: null },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
