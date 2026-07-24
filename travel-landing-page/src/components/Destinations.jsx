import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Search, Filter } from "lucide-react";
import { allDestinations } from "../data/travelData";

const Destinations = () => {
  return (
    <div className="pt-20 pb-20 min-h-screen bg-slate-50">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-slate-900 text-white py-24 px-6 mb-12">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1920"
            alt="Destinations Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            Explore All Destinations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Discover beautiful cities, tropical beaches, and historic landmarks across the globe.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 2. Search & Filter Bar (UI Only) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 mb-12 flex flex-col md:flex-row gap-4 justify-between items-center"
        >
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destination or country..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl text-sm outline-none border border-gray-100 focus:border-blue-500 transition-all text-gray-800"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap sm:flex-nowrap w-full md:w-auto gap-3">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-blue-600" />
              <select className="bg-transparent text-sm font-medium text-gray-700 outline-none w-full">
                <option value="all">All Categories</option>
                <option value="beach">Beach</option>
                <option value="cultural">Cultural</option>
                <option value="adventure">Adventure</option>
                <option value="historical">Historical</option>
                <option value="city">City</option>
              </select>
            </div>

            <select className="bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 text-sm font-medium text-gray-700 outline-none w-full sm:w-auto">
              <option value="popular">Sort by: Popularity</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </motion.div>

        {/* 3. 12+ Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allDestinations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-gray-800">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {item.rating}
                  </div>
                  <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] uppercase font-semibold px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    <span className="text-blue-600 font-bold text-base">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-xs flex items-center gap-1 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" /> {item.country}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5">
                <button className="w-full py-2.5 bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white border border-gray-200 hover:border-blue-600 rounded-xl text-xs font-semibold transition-all shadow-sm">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Destinations;