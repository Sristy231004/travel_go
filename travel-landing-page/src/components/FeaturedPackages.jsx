import React from "react";
import { motion } from "framer-motion";
import { Clock, Star } from "lucide-react";
import { packages } from "../data/travelData";

const FeaturedPackages = () => {
  return (
    <section id="packages" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-14">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
          Featured Tour Packages
        </h2>
        <p className="text-gray-500 text-sm">
          Carefully planned vacation packages designed for comfort and unforgettable fun.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="relative h-52">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-gray-800">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {pkg.rating}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-blue-600 flex items-center gap-1 mb-2">
                  <Clock className="w-3.5 h-3.5" /> {pkg.duration}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{pkg.name}</h3>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">From</span>
                  <span className="text-xl font-extrabold text-gray-900">{pkg.price}</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-full hover:bg-blue-700 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPackages;