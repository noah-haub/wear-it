import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import { Onboarding } from "./features/onboarding/components/Onboarding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  { path: "/onboarding", element: <Onboarding /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
