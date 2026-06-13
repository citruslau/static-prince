import { Outlet } from "react-router-dom";
import ProtectedRoute from "@/routes/protected-route";
import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function MainLayout() {
  return (
    <ProtectedRoute>
      <main>
        <Sidebar />
        <Outlet />
      </main>
      <Toaster />
    </ProtectedRoute>
  );
}
