import React from "react";
import { motion } from "framer-motion";
import { Tag, UserCheck, Headphones, ShieldCheck, Hotel, Calendar } from "lucide-react";
import { whyUsFeatures } from "../data/travelData";

const iconMap = {
  Tag: Tag,
  UserCheck: UserCheck,
  Headphones: Headphones,
  ShieldCheck: ShieldCheck,
  Hotel: Hotel,
  Calendar: Calendar,
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-sm">
            We aim to deliver smooth, safe, and top-quality travel experiences tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsFeatures.map((feature, index) => {
            const Icon = iconMap[feature.iconName];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60"
              >
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-4">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;