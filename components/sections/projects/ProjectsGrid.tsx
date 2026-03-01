"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const categories = ["All", "Web Dev", "Mobile App", "E-Commerce", "EdTech", "Marketing"];

const projects = [
  {
    title: "FinTech Banking Dashboard",
    category: "Web Dev",
    desc: "A real-time analytics and transaction management platform for a leading micro-finance institution. Handles 50k+ daily transactions.",
    outcome: "10× faster data processing",
    duration: "12 weeks",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    gradient: "from-[#0d1b3e] via-[#1a3a6b] to-[#2d1b69]",
    accentColor: "#7b5cfa",
    emoji: "🏦",
    size: "large",
  },
  {
    title: "HealthTrack Pro",
    category: "Mobile App",
    desc: "Patient management & appointment booking app for a private healthcare chain. 50k+ downloads in first 6 months.",
    outcome: "50k+ downloads",
    duration: "16 weeks",
    tech: ["React Native", "Firebase", "Node.js"],
    gradient: "from-[#0d2e1a] to-[#1a4a2e]",
    accentColor: "#00e5b0",
    emoji: "🏥",
    size: "medium",
  },
  {
    title: "FashionHub Store",
    category: "E-Commerce",
    desc: "Full e-commerce redesign and performance overhaul for a fashion retailer. New UX + SEO drove a 3× revenue increase in 90 days.",
    outcome: "3× revenue growth",
    duration: "8 weeks",
    tech: ["Shopify", "React", "SEO"],
    gradient: "from-[#2e1a0d] to-[#4a2e1a]",
    accentColor: "#f59e0b",
    emoji: "👗",
    size: "medium",
  },
  {
    title: "LearnElite LMS",
    category: "EdTech",
    desc: "A full-featured online learning management system with live classes, quizzes, certificates, and student progress tracking.",
    outcome: "2,000+ active students",
    duration: "20 weeks",
    tech: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    gradient: "from-[#1a0d2e] to-[#2d1b4a]",
    accentColor: "#a78bfa",
    emoji: "🎓",
    size: "large",
  },
  {
    title: "AgriConnect Platform",
    category: "Web Dev",
    desc: "B2B marketplace connecting farmers directly with buyers and logistics providers across West Africa.",
    outcome: "1,200+ farmers onboarded",
    duration: "14 weeks",
    tech: ["React", "Node.js", "MongoDB", "Maps API"],
    gradient: "from-[#0d2e10] to-[#1a4a20]",
    accentColor: "#22c55e",
    emoji: "🌾",
    size: "medium",
  },
  {
    title: "PaySwift Mobile App",
    category: "Mobile App",
    desc: "Cross-border payment app supporting 8 African currencies. Integrated with major local payment gateways.",
    outcome: "$2M+ processed monthly",
    duration: "18 weeks",
    tech: ["Flutter", "Firebase", "Flutterwave"],
    gradient: "from-[#0d1e3e] to-[#1a3060]",
    accentColor: "#3b82f6",
    emoji: "💸",
    size: "medium",
  },
  {
    title: "TechBlog SEO Overhaul",
    category: "Marketing",
    desc: "Complete SEO strategy and content overhaul for a tech media brand. Grew organic traffic from 8k to 85k monthly visitors.",
    outcome: "10× organic traffic",
    duration: "6 months",
    tech: ["SEMrush", "GA4", "HubSpot", "WordPress"],
    gradient: "from-[#1e0d2e] to-[#2e1a4a]",
    accentColor: "#ec4899",
    emoji: "📊",
    size: "medium",
  },
  {
    title: "RealEstate Pro",
    category: "Web Dev",
    desc: "Property listing and management platform with virtual tour integrations, mortgage calculators, and agent dashboards.",
    outcome: "500+ active listings",
    duration: "10 weeks",
    tech: ["Next.js", "Prisma", "Mapbox", "Stripe"],
    gradient: "from-[#1e1a0d] to-[#3a2e1a]",
    accentColor: "#f59e0b",
    emoji: "🏠",
    size: "medium",
  },
  {
    title: "FoodieNow Delivery App",
    category: "Mobile App",
    desc: "On-demand food delivery app with real-time tracking, multi-restaurant ordering, and driver app.",
    outcome: "30 min avg delivery time",
    duration: "22 weeks",
    tech: ["React Native", "Node.js", "Socket.io", "Stripe"],
    gradient: "from-[#2e0d0d] to-[#4a1a1a]",
    accentColor: "#ef4444",
    emoji: "🍔",
    size: "medium",
  },
];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter tabs */}
        <FadeUp>
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-syne font-semibold px-4 py-2 rounded-full border transition-all duration-200
                  ${activeFilter === cat
                    ? "bg-accent text-black border-accent"
                    : "border-white/[0.1] text-white/50 hover:border-accent/40 hover:text-accent bg-transparent"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.07}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col min-h-[280px]">

                {/* Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`} />

                {/* Grid overlay */}
                <div className="absolute inset-0 grid-bg opacity-15" />

                {/* Emoji center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none">
                    {project.emoji}
                  </span>
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Top: category + arrow */}
                <div className="relative z-10 flex items-start justify-between p-5">
                  <span
                    className="text-[0.65rem] font-syne font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border"
                    style={{ color: project.accentColor, borderColor: `${project.accentColor}30`, background: `${project.accentColor}10` }}
                  >
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white/20">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>

                {/* Bottom: content */}
                <div className="relative z-10 mt-auto p-5">
                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[0.6rem] px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-syne font-bold text-white text-base sm:text-lg mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.desc}
                  </p>

                  {/* Outcome badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.accentColor }} />
                      <span className="text-[0.7rem] font-syne font-semibold" style={{ color: project.accentColor }}>
                        {project.outcome}
                      </span>
                    </div>
                    <span className="text-[0.65rem] text-white/30">{project.duration}</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30 text-sm">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
