import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/pages/login";
import DashboardPage from "@/pages/admin/dashboard";
import MainLayout from "@/layouts/main-layout";
import DefaultLayout from "@/layouts/default-layout";
import SuppliersPage from "@/pages/admin/suppliers";
import CustomersPage from "@/pages/admin/customers";
import InventoryPage from "@/pages/admin/inventory";
import EmployeesPage from "@/pages/admin/employees";
import InvoicePage from "@/pages/admin/invoice";
import NewInvoicePage from "@/pages/admin/invoice/new-invoice";
import RestockPage from "@/pages/admin/restock";
import NewRestockPage from "@/pages/admin/restock/new-restock";
import PORestockPage from "@/pages/admin/restock/po-restock";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="admin">
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="restock" element={<RestockPage />} />
            <Route path="restock/new" element={<NewRestockPage />} />
            <Route path="restock/po-restock/:poId" element={<PORestockPage />} />
            <Route path="invoice" element={<InvoicePage />} />
            <Route path="invoice/new" element={<NewInvoicePage />} />
            <Route path="suppliers" element={<SuppliersPage />} />
            <Route path="customers" element={<CustomersPage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route path="employees" element={<EmployeesPage />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}
