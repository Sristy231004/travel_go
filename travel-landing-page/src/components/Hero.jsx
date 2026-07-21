import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { stats } from "../data/travelData";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 px-6">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920"
          alt="Hero Travel Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-white"
        >
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold mb-4 border border-white/30">
            Explore the World with Ease
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
            Find Your Next <span className="text-blue-400">Unforgettable</span> Escape
          </h1>
          <p className="text-gray-200 text-base sm:text-lg mb-8 max-w-xl">
            Discover incredible places at unbeatably low prices. Create lifelong memories with customized tours and luxury stays.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#destinations"
              className="px-7 py-3.5 bg-blue-600 text-white rounded-full font-semibold shadow-lg flex items-center gap-2 hover:bg-blue-700 transition-all text-sm"
            >
              Explore Now <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#packages"
              className="px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all text-sm"
            >
              View Packages
            </motion.a>
          </div>

          {/* Travel Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-lg">
            {stats.map((item) => (
              <div key={item.id}>
                <p className="text-2xl sm:text-3xl font-bold text-blue-400">{item.value}</p>
                <p className="text-xs text-gray-300">{item.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column Floating Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-3xl text-white shadow-xl">
            <div className="h-60 rounded-2xl overflow-hidden mb-4 relative">
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=800"
                alt="Featured Place"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 right-3 bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                Top Rated
              </span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold">Maldives Water Villa</h3>
                <p className="text-xs text-gray-300 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" /> South Male Atoll
                </p>
              </div>
              <span className="text-lg font-bold text-blue-400"> ₹67,000</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;