import React, { useState } from "react";
import { Compass, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="p-2 bg-blue-600 text-white rounded-lg">
            <Compass className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Travel<span className="text-blue-600">Go</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-600 text-sm">
          <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
          <li><Link to="/destinations" className="hover:text-blue-600 transition-colors">Destinations</Link></li>
          <li><a href="/#why-us" className="hover:text-blue-600 transition-colors">Why Choose Us</a></li>
          <li><a href="/#packages" className="hover:text-blue-600 transition-colors">Packages</a></li>
          <li><a href="/#testimonials" className="hover:text-blue-600 transition-colors">Reviews</a></li>
        </ul>

        {/* Sign In Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md">
            Sign In
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button onClick={() => setNavOpen(!navOpen)} className="md:hidden text-gray-700">
          {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-6 py-4"
          >
            <ul className="flex flex-col gap-4 font-medium text-gray-700 text-sm">
              <li><Link to="/" onClick={() => setNavOpen(false)}>Home</Link></li>
              <li><Link to="/destinations" onClick={() => setNavOpen(false)}>Destinations</Link></li>
              <li><a href="/#why-us" onClick={() => setNavOpen(false)}>Why Choose Us</a></li>
              <li><a href="/#packages" onClick={() => setNavOpen(false)}>Packages</a></li>
              <li><a href="/#testimonials" onClick={() => setNavOpen(false)}>Reviews</a></li>
            </ul>
            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm">
              Sign In
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;