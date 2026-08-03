import React, { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "./AdminSidebar";
import {
  CalendarCheck,
  Users,
  IndianRupee,
  MapPin,
  Bell,
  Search,
  Menu,
  TrendingUp,
  Clock,
  ChevronRight,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";
import {
  dashboardStats,
  chartData,
  recentBookings,
  popularAdminDestinations,
  recentActivities
} from "../data/travelData";

const iconMap = {
  CalendarCheck: CalendarCheck,
  Users: Users,
  IndianRupee: IndianRupee,
  MapPin: MapPin,
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 backdrop-blur-md text-white p-3.5 rounded-xl border border-slate-700 shadow-xl text-xs">
        <p className="font-bold text-gray-300 mb-1">{label}</p>
        <p className="text-blue-400 font-semibold">
          Bookings: <span className="text-white">{payload[0].value}</span>
        </p>
        <p className="text-emerald-400 font-semibold">
          Revenue: <span className="text-white">₹{(payload[1]?.value || 0).toLocaleString("en-IN")}</span>
        </p>
      </div>
    );
  }
  return null;
};

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-800">
      
      {/* 1. Shared Reusable Admin Sidebar */}
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* 2. Top Header Navbar */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/80 py-4 px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-700 hover:text-blue-600">
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden sm:block w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search bookings, users, or destinations..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100/70 border border-transparent rounded-xl text-xs outline-none focus:bg-white focus:border-blue-500 transition-all text-gray-800"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2.5 bg-slate-100/70 hover:bg-blue-50 rounded-xl text-gray-600 hover:text-blue-600 transition-all border border-gray-100">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white" />
            </button>

            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                alt="Admin Profile"
                className="w-9 h-9 rounded-xl object-cover border-2 border-blue-600 shadow-xs"
              />
              <div className="hidden md:block">
                <p className="text-xs font-bold text-gray-900 leading-tight">Muskan Sharma</p>
                <p className="text-[10px] font-medium text-gray-400">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 sm:p-8 space-y-8 overflow-y-auto max-w-7xl mx-auto w-full">
          
          {/* Hero Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/20 backdrop-blur-md rounded-full text-[11px] font-semibold text-blue-300 border border-blue-500/30 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Admin Workspace
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Welcome Back, Muskan!</h1>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                  Here is the latest live activity and revenue overview for your TravelGo platform today.
                </p>
              </div>
              <a
                href="/destinations"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2"
              >
                Manage Destinations <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* 3. Styled Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dashboardStats.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.title}</p>
                    <h3 className="text-2xl font-black text-gray-900 mt-1">{item.value}</h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-600 mt-2 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <TrendingUp className="w-3 h-3" /> {item.change}
                    </span>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 rounded-2xl border border-blue-100/50">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 4. Smooth Dual-Area Revenue & Bookings Chart */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h2 className="text-lg font-extrabold text-gray-900">Bookings & Revenue Performance</h2>
                <p className="text-xs text-gray-400 mt-0.5">Monthly analytics for current active calendar year</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" /> Bookings
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" /> Revenue
                </div>
              </div>
            </div>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="Bookings" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorBookings)" />
                  <Area type="monotone" dataKey="Revenue" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* 5. Recent Bookings Table & Right Activity Side Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Table Container */}
            <div className="lg:col-span-2 bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900">Recent Bookings</h2>
                  <p className="text-xs text-gray-400 mt-0.5">Live status of customer package purchases</p>
                </div>
                <a href="/admin/bookings" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 uppercase text-[10px] tracking-wider">
                      <th className="pb-3 font-bold">Booking ID</th>
                      <th className="pb-3 font-bold">Customer</th>
                      <th className="pb-3 font-bold">Destination</th>
                      <th className="pb-3 font-bold">Amount</th>
                      <th className="pb-3 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                    {recentBookings.map((b) => (
                      <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 text-blue-600 font-bold">{b.id}</td>
                        <td className="py-4 font-bold text-gray-900">{b.customer}</td>
                        <td className="py-4">{b.destination}</td>
                        <td className="py-4 font-black text-gray-900">{b.amount}</td>
                        <td className="py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-[10px] font-extrabold ${
                              b.status === "Confirmed"
                                ? "bg-emerald-50 text-emerald-600 border border-emerald-200/60"
                                : b.status === "Pending"
                                ? "bg-amber-50 text-amber-600 border border-amber-200/60"
                                : "bg-rose-50 text-rose-600 border border-rose-200/60"
                            }`}
                          >
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Side Panel */}
            <div className="space-y-6">
              
              {/* Popular Destinations List */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-base font-extrabold text-gray-900 mb-4">Top Performing Places</h2>
                <div className="space-y-3">
                  {popularAdminDestinations.map((d) => (
                    <div key={d.id} className="flex items-center justify-between p-3.5 bg-slate-50/80 rounded-2xl border border-gray-100">
                      <div>
                        <p className="text-xs font-bold text-gray-900">{d.name}, {d.country}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{d.bookings} Total Bookings</p>
                      </div>
                      <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">{d.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent System Activity */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-base font-extrabold text-gray-900 mb-4">System Activity Log</h2>
                <div className="space-y-4">
                  {recentActivities.map((a) => (
                    <div key={a.id} className="flex items-start gap-3 text-xs">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-xl mt-0.5 shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-gray-700 leading-snug">
                          <span className="font-bold text-gray-900">{a.user}</span> {a.action}
                        </p>
                        <span className="text-[10px] font-medium text-gray-400 mt-1 block">{a.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </main>
      </div>

    </div>
  );
};

export default AdminDashboard;