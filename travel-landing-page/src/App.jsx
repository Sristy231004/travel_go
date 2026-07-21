import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TripSearch from "./components/TripSearch";
import PopularDestinations from "./components/PopularDestinations";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedPackages from "./components/FeaturedPackages";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TripSearch />
        <PopularDestinations />
        <WhyChooseUs />
        <FeaturedPackages />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;