"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ProjectsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 grid-bg"
        style={{ maskImage: "radial-gradient(ellipse 100% 80% at 50% 0%, black 40%, transparent 100%)" }}
      />
      {/* Accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,229,176,0.1) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(123,92,250,0.1) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <SectionLabel>Our Work</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-syne font-extrabold text-white tracking-tight leading-[1.06] mb-6 text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto"
        >
          Projects That
          <span className="block gradient-text">Speak for Themselves</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/50 font-light leading-relaxed text-sm sm:text-lg max-w-2xl mx-auto mb-10"
        >
          From fintech dashboards to mobile apps, e-commerce stores to learning platforms —
          here's a selection of work we're proud to have delivered.
        </motion.p>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {[
            { num: "200+", label: "Projects Delivered" },
            { num: "15+",  label: "Industries Served" },
            { num: "12",   label: "Countries" },
          ].map(({ num, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="font-syne font-extrabold text-accent text-xl">{num}</span>
              <span className="text-white/35 text-xs uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
