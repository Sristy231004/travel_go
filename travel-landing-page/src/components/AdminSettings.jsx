import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Menu, Bell, Save, Lock, User, Globe } from "lucide-react";
import AdminSidebar from "../components/AdminSidebar";

const AdminSettings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-800">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/80 py-4 px-6 flex items-center justify-between sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-700">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2.5 bg-slate-100 rounded-xl text-gray-600"><Bell className="w-5 h-5" /></button>
          </div>
        </header>

        <main className="p-6 sm:p-8 space-y-6 max-w-4xl mx-auto w-full">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Admin Settings</h1>
            <p className="text-xs text-gray-400">Configure profile preferences, security, and site settings</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <div className="space-y-4">
              <h2 className="text-sm font-extrabold text-gray-900 border-b pb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" /> Admin Profile
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Full Name</label>
                  <input type="text" defaultValue="Muskan Sharma" className="w-full p-3 bg-slate-50 border rounded-xl outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Email Address</label>
                  <input type="email" defaultValue="admin@travelgo.com" className="w-full p-3 bg-slate-50 border rounded-xl outline-none focus:border-blue-500" />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-sm font-extrabold text-gray-900 border-b pb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" /> Currency & Locale
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Primary Currency</label>
                  <select className="w-full p-3 bg-slate-50 border rounded-xl outline-none font-bold text-gray-700">
                    <option value="INR">Indian Rupee (₹)</option>
                    <option value="USD">US Dollar ($)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-md hover:bg-blue-700 transition-all flex items-center gap-2">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminSettings;