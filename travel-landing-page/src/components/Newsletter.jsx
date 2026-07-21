import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl"
      >
        <div className="max-w-xl mx-auto">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm mb-6">
            Get travel updates, exclusive discount offers, and destination ideas straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-5 py-3 rounded-full text-gray-800 text-sm placeholder-gray-400 outline-none w-full"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-slate-900 text-white font-semibold text-sm rounded-full hover:bg-slate-800 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;