"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 grid-bg"
        style={{ maskImage: "radial-gradient(ellipse 100% 80% at 50% 0%, black 40%, transparent 100%)" }}
      />
      {/* Violet glow top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(123,92,250,0.13) 0%, transparent 70%)" }}
      />
      {/* Accent glow bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,229,176,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <SectionLabel>What We Offer</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-syne font-extrabold text-white tracking-tight leading-[1.06] mb-6 text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto"
        >
          Services Built for
          <span className="block gradient-text">Real Business Growth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/50 font-light leading-relaxed text-sm sm:text-lg max-w-2xl mx-auto mb-12"
        >
          From websites to mobile apps, digital marketing to IT training — every service we offer
          is crafted with strategy, precision, and your growth in mind.
        </motion.p>

        {/* Service quick-nav pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            "Web Development",
            "Mobile Apps",
            "Digital Marketing",
            "IT Training",
            "UI/UX Design",
            "IT Consulting",
          ].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/[^a-z]/g, "-")}`}
              className="text-xs font-syne font-semibold px-4 py-2 rounded-full border border-white/[0.08] text-white/50 hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
