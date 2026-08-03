import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Compass,
  MapPin,
  BookOpen,
  Users,
  Settings,
  LogOut,
  X
} from "lucide-react";

const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Destinations", path: "/destinations", icon: MapPin },
    { name: "Bookings", path: "/admin/bookings", icon: BookOpen },
    { name: "Users", path: "/admin/users", icon: Users },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-white flex flex-col justify-between transition-transform duration-300 ease-in-out border-r border-slate-800 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:static`}
    >
      <div className="flex flex-col min-h-0">
        <div className="p-6 flex items-center justify-between border-b border-slate-800/80 shrink-0">
          <Link to="/admin" className="flex items-center gap-2.5">
            <div className="p-2 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl shadow-md">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-extrabold tracking-tight">
              Travel<span className="text-blue-500">Go</span>
            </span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1.5 overflow-y-auto text-sm font-medium">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "text-slate-400 hover:bg-slate-800/80 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" /> {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-800/80 space-y-1 bg-slate-900/50 shrink-0">
        <Link
          to="/admin/settings"
          onClick={() => setSidebarOpen(false)}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
            location.pathname === "/admin/settings"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
              : "text-slate-400 hover:bg-slate-800/80 hover:text-white"
          }`}
        >
          <Settings className="w-5 h-5" /> Settings
        </Link>
        <Link to="/" className="flex items-center gap-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 rounded-xl transition-all text-sm font-medium">
          <LogOut className="w-5 h-5" /> Exit to Website
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;