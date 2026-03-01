"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Smartphone, BarChart2, GraduationCap } from "lucide-react";

const floatCards = [
  { icon: Code2,         label: "Web Dev",       sub: "Custom Solutions",   delay: 0,   y: "20px" },
  { icon: Smartphone,    label: "Mobile Apps",   sub: "iOS & Android",      delay: 0.1, y: "-20px" },
  { icon: BarChart2,     label: "Digital Mktg",  sub: "Growth Focused",     delay: 0.2, y: "10px" },
  { icon: GraduationCap, label: "IT Training",   sub: "Expert-Led",         delay: 0.3, y: "-10px" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">

      {/* Backgrounds */}
      <div
        className="absolute inset-0 grid-bg"
        style={{ maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)" }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(123,92,250,0.15) 0%, transparent 65%)", transform: "translate(30%, -30%)" }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,176,0.1) 0%, transparent 65%)", transform: "translate(-30%, 30%)" }}
      />

      {/* Spinning ring — desktop only */}
      <div className="absolute top-1/2 right-[10vw] -translate-y-1/2 w-[420px] h-[420px] hidden xl:block pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-white/[0.04] animate-spin-slow" />
        <div className="absolute inset-8 rounded-full border border-accent/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
        <div className="absolute inset-16 rounded-full border border-violet/10 animate-spin-slow" style={{ animationDuration: "25s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

          {/* Left: copy */}
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full min-w-0">

            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent rounded-full px-3.5 py-1.5 text-[0.68rem] font-syne font-semibold tracking-[0.1em] uppercase mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot flex-shrink-0" />
                Trusted Digital Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="font-syne font-extrabold leading-[1.06] tracking-tight mb-5 sm:mb-6">
              <span className="block text-white text-[1.9rem] sm:text-5xl lg:text-6xl xl:text-[5.2rem]">
                We Build
              </span>
              <span className="block gradient-text text-[1.9rem] sm:text-5xl lg:text-6xl xl:text-[5.2rem]">
                Digital Experiences
              </span>
              <span className="block text-white/35 font-light text-xl sm:text-3xl lg:text-4xl xl:text-[3.6rem] mt-1">
                That Drive Growth.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="font-dm-sans text-white/50 font-light leading-[1.85] mb-8 sm:mb-10 text-sm sm:text-base max-w-[520px]">
              From stunning websites and mobile apps to performance-driven digital marketing
              and expert IT training — Elite Digital Agency transforms your vision into measurable results.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14">
              <Link href="/services" className="btn-primary text-sm">
                Explore Services <ArrowRight size={15} />
              </Link>
              <Link href="/projects" className="btn-outline text-sm">
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-5 sm:gap-8 pt-7 sm:pt-8 border-t border-white/[0.07]">
              {[
                { num: "200+", label: "Projects Delivered" },
                { num: "98%",  label: "Client Satisfaction" },
                { num: "8+",   label: "Years of Excellence" },
                { num: "50+",  label: "Global Clients" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-syne font-extrabold text-white leading-none mb-1 text-3xl sm:text-4xl lg:text-[2.4rem]">
                    {num}
                  </div>
                  <div className="text-[0.68rem] text-white/35 uppercase tracking-[0.1em]">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: floating cards — lg+ only */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            {floatCards.map(({ icon: Icon, label, sub, delay, y }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y }}
                transition={{ delay: delay + 0.4, duration: 0.8, ease: "easeOut" }}
                style={{ animation: `float ${6 + delay * 2}s ease-in-out ${delay}s infinite` }}
                className="bg-surface border border-white/[0.07] rounded-2xl p-5 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-accent" />
                </div>
                <p className="font-syne font-bold text-sm text-white mb-1">{label}</p>
                <p className="text-[0.72rem] text-white/35">{sub}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-accent/50 animate-pulse" />
        <span className="text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}