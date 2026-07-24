import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TripSearch from "./components/TripSearch";
import PopularDestinations from "./components/PopularDestinations";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedPackages from "./components/FeaturedPackages";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Destinations from "./components/Destinations";

// Home Page Component
const Home = () => (
  <>
    <Hero />
    <TripSearch />
    <PopularDestinations />
    <WhyChooseUs />
    <FeaturedPackages />
    <Testimonials />
    <Newsletter />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;