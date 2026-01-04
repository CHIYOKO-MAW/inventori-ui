import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ArrowDownCircle,
  ArrowUpCircle,
  Truck,
  FileText,
} from "lucide-react";

const menus = [
  { name: "Dashboard", to: "/", icon: LayoutDashboard },
  { name: "Data Barang", to: "/barang", icon: Package },
  { name: "Barang Masuk", to: "/barang-masuk", icon: ArrowDownCircle },
  { name: "Barang Keluar", to: "/barang-keluar", icon: ArrowUpCircle },
  { name: "Supplier", to: "/supplier", icon: Truck },
  { name: "Laporan", to: "/laporan", icon: FileText },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 bg-white hidden lg:block">
      <div className="px-6 py-5 border-b border-slate-200">
        <h1 className="text-lg font-semibold text-slate-900">
          Inventory UI
        </h1>
        <p className="text-xs text-slate-500">
          Sistem Inventori Material
        </p>
      </div>

      <nav className="px-3 py-4 space-y-1">
        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition
              ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            <menu.icon className="h-4 w-4" />
            {menu.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
