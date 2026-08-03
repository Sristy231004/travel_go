import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Menu, Bell, Download, CheckCircle, Clock, XCircle } from "lucide-react";
import AdminSidebar from "../components/AdminSidebar";
import { allAdminBookings } from "../data/travelData";

const AdminBookings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-800">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/80 py-4 px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden sm:block w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Search bookings..." className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-xl text-xs outline-none" />
            </div>
          </div>
          <button className="p-2.5 bg-slate-100 rounded-xl text-gray-600"><Bell className="w-5 h-5" /></button>
        </header>

        <main className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Manage Bookings</h1>
              <p className="text-xs text-gray-400">View, search, and update customer package reservations</p>
            </div>
            <button className="px-4 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 self-start">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-400 uppercase text-[10px] tracking-wider">
                    <th className="pb-3 font-bold">Booking ID</th>
                    <th className="pb-3 font-bold">Customer</th>
                    <th className="pb-3 font-bold">Destination</th>
                    <th className="pb-3 font-bold">Date</th>
                    <th className="pb-3 font-bold">Payment</th>
                    <th className="pb-3 font-bold">Amount</th>
                    <th className="pb-3 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                  {allAdminBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 text-blue-600 font-bold">{b.id}</td>
                      <td className="py-4">
                        <p className="font-bold text-gray-900">{b.customer}</p>
                        <p className="text-[10px] text-gray-400">{b.email}</p>
                      </td>
                      <td className="py-4">{b.destination}</td>
                      <td className="py-4">{b.date}</td>
                      <td className="py-4 font-semibold text-gray-600">{b.payment}</td>
                      <td className="py-4 font-black text-gray-900">{b.amount}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold ${
                          b.status === "Confirmed" ? "bg-emerald-50 text-emerald-600" : b.status === "Pending" ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
                        }`}>
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminBookings;