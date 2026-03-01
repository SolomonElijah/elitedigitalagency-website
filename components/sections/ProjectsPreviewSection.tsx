"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const projects = [
  {
    title: "FinTech Banking Dashboard",
    category: "Web Development",
    desc: "Real-time analytics platform for a leading micro-finance institution — 10x faster data processing.",
    emoji: "🏦",
    gradient: "from-[#0d1b3e] via-[#1a3a6b] to-[rgba(123,92,250,0.4)]",
    span: "lg:col-span-2",
    tall: false,
  },
  {
    title: "HealthTrack Pro",
    category: "Mobile App",
    desc: "Patient management app with 50k+ downloads across iOS & Android.",
    emoji: "📱",
    gradient: "from-[#1a0d2e] to-[rgba(0,229,176,0.25)]",
    span: "",
    tall: true,
  },
  {
    title: "FashionHub Store",
    category: "E-Commerce",
    desc: "3× revenue growth via redesign, performance tuning & SEO.",
    emoji: "🛍️",
    gradient: "from-[#0d2e1a] to-[rgba(0,180,100,0.3)]",
    span: "",
    tall: false,
  },
  {
    title: "LearnElite LMS",
    category: "EdTech Platform",
    desc: "Online learning platform serving 2,000+ active students.",
    emoji: "🎓",
    gradient: "from-[#2e1a0d] to-[rgba(250,150,50,0.3)]",
    span: "",
    tall: false,
  },
];

export default function ProjectsPreviewSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeUp><SectionLabel>Our Work</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Featured Projects
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link href="/projects" className="inline-flex items-center gap-2 text-accent text-sm font-syne font-semibold hover:gap-3 transition-all duration-200">
              View All Projects <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {projects.map(({ title, category, desc, emoji, gradient, span, tall }, i) => (
            <FadeUp key={title} delay={i * 0.1} className={span}>
              <div
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${tall ? "min-h-[320px]" : "min-h-[240px]"}`}
              >
                {/* Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-105`} />

                {/* Subtle grid on card */}
                <div className="absolute inset-0 grid-bg opacity-20" />

                {/* Emoji / visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    {emoji}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[0.68rem] font-syne font-semibold text-accent uppercase tracking-[0.1em] mb-1.5">
                    {category}
                  </p>
                  <h3 className="font-syne font-bold text-white text-base mb-2">{title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {desc}
                  </p>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
