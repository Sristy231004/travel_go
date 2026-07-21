import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Search } from "lucide-react";

const TripSearch = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative -mt-10 z-20 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
      >
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Destination */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
            <MapPin className="w-5 h-5 text-blue-600" />
            <div className="w-full">
              <label className="block text-[10px] font-bold text-gray-400 uppercase">Destination</label>
              <input
                type="text"
                placeholder="Where to?"
                className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none"
              />
            </div>
          </div>

          {/* Check-In */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
            <Calendar className="w-5 h-5 text-blue-600" />
            <div className="w-full">
              <label className="block text-[10px] font-bold text-gray-400 uppercase">Check-In</label>
              <input
                type="date"
                className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none"
              />
            </div>
          </div>

          {/* Check-Out */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
            <Calendar className="w-5 h-5 text-blue-600" />
            <div className="w-full">
              <label className="block text-[10px] font-bold text-gray-400 uppercase">Check-Out</label>
              <input
                type="date"
                className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none"
              />
            </div>
          </div>

          {/* Guests & Submit Button */}
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
              <Users className="w-5 h-5 text-blue-600" />
              <div className="w-full">
                <label className="block text-[10px] font-bold text-gray-400 uppercase">Guests</label>
                <select className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3+ Family</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="h-[52px] px-5 bg-blue-600 text-white rounded-xl flex items-center justify-center gap-2 font-semibold hover:bg-blue-700 transition-all shadow-md"
            >
              <Search className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">Search</span>
            </button>
          </div>

        </form>
      </motion.div>
    </section>
  );
};

export default TripSearch;