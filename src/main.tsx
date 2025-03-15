import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AllProviders } from "./providers/AllProviders.tsx";
import { Router } from "./router/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AllProviders>
      <Router />
    </AllProviders>
  </StrictMode>
);
