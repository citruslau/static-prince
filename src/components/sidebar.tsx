import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/use-auth";
import {
  ChartPie,
  Archive,
  NotebookText,
  Truck,
  UsersRound,
  Package2,
  IdCard,
  LogOut,
} from "lucide-react";

const mainNav = [
  { label: "Dashboard", path: "/admin/dashboard", icon: ChartPie },
  { label: "Restock", path: "/admin/restock", icon: Archive },
  { label: "Invoice", path: "/admin/invoice", icon: NotebookText },
];

const recordsNav = [
  { label: "Suppliers", path: "/admin/suppliers", icon: Truck },
  { label: "Customers", path: "/admin/customers", icon: UsersRound },
  { label: "Inventory", path: "/admin/inventory", icon: Package2 },
  { label: "Employees", path: "/admin/employees", icon: IdCard },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-white text-custom-black shadow-sm border border-bellflower-gray"
        : "text-saltbox-gray hover:bg-white/50"
    }`;

  return (
    <aside className="w-full max-w-[82.5px] h-screen bg-custom-bg-white flex flex-col items-center py-6 border-r border-bellflower-gray">
      <div className="flex flex-col items-center gap-1 mb-8">
        <img src="/Company_Logo.svg" alt="Prince" className="w-10 h-10" />
        <span className="text-xs font-bold text-custom-black">Prince</span>
      </div>

      <nav className="flex flex-col gap-1 w-full px-2">
        <span className="text-[10px] font-semibold text-vesper-gray uppercase tracking-wider text-center mb-1">
          Main
        </span>
        {mainNav.map((item) => (
          <NavLink key={item.path} to={item.path} className={navLinkClass}>
            <item.icon className="w-5 h-5 shrink-0" />
          </NavLink>
        ))}

        <span className="text-[10px] font-semibold text-vesper-gray uppercase tracking-wider text-center mt-4 mb-1">
          Records
        </span>
        {recordsNav.map((item) => (
          <NavLink key={item.path} to={item.path} className={navLinkClass}>
            <item.icon className="w-5 h-5 shrink-0" />
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto flex flex-col items-center gap-2 w-full px-2">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-saltbox-gray hover:bg-white/50 transition-all cursor-pointer max-w-40"
        >
          <LogOut className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center gap-1 bg-white rounded-lg px-3 py-2 w-full border border-bellflower-gray">
          <div className="w-8 h-8 rounded-full bg-cake-pink flex items-center justify-center text-xs font-bold text-munch-pink">
            {user?.username?.slice(0, 2).toUpperCase() || "AA"}
          </div>
          <span className="text-[10px] font-semibold text-custom-black text-center leading-tight">
            {user?.username || "admin1"}
          </span>
          <span className="text-[9px] text-vesper-gray">{user?.role || "Administrator"}</span>
        </div>
      </div>
    </aside>
  );
}
