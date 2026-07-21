import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { destinations } from "../data/travelData";

const PopularDestinations = () => {
  return (
    <section id="destinations" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-14">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
          Popular Destinations
        </h2>
        <p className="text-gray-500 text-sm">
          Explore top-rated travel destinations loved by thousands of travelers around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="h-56 overflow-hidden relative">
              <img
                src={item.image}
                alt={item.city}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-gray-800">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {item.rating}
              </div>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-bold text-gray-900">{item.city}</h3>
                <span className="text-blue-600 font-bold text-sm">{item.price}</span>
              </div>
              <p className="text-gray-500 text-xs flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gray-400" /> {item.country}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;