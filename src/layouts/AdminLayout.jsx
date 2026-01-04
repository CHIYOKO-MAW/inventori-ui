import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";


export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1">
        <div className="px-6 py-6 lg:px-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
