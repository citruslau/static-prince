import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/routes.tsx";
import { UserProvider } from "./context/use-auth";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <AppRouter />
      <Toaster />
    </UserProvider>
  </StrictMode>,
);
