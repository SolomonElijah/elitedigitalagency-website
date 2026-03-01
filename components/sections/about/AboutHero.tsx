"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 grid-bg"
        style={{ maskImage: "radial-gradient(ellipse 100% 80% at 50% 0%, black 40%, transparent 100%)" }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,229,176,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>About Us</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-syne font-extrabold text-white tracking-tight leading-[1.06] mb-6 text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            We Are the Agency
            <span className="block gradient-text">Behind Your Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 font-light leading-relaxed text-sm sm:text-lg max-w-2xl mx-auto"
          >
            Founded on the belief that great technology should be accessible to every business,
            Elite Digital Agency has spent 8+ years turning ambitious ideas into powerful digital realities.
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {[
            { num: "2016",  label: "Year Founded",        icon: "🏛️" },
            { num: "200+",  label: "Projects Delivered",  icon: "🚀" },
            { num: "50+",   label: "Global Clients",      icon: "🌍" },
            { num: "98%",   label: "Satisfaction Rate",   icon: "⭐" },
          ].map(({ num, label, icon }) => (
            <div key={label} className="bg-surface px-6 py-8 text-center group hover:bg-white/[0.03] transition-colors duration-200">
              <div className="text-2xl mb-3">{icon}</div>
              <div className="font-syne font-extrabold text-white text-3xl sm:text-4xl leading-none mb-2">{num}</div>
              <div className="text-white/35 text-xs uppercase tracking-[0.12em]">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
