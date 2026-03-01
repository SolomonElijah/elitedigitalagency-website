"use client";

import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const results = [
  { metric: "3×",    label: "Average revenue increase",        desc: "for e-commerce clients after redesign & SEO", accent: true },
  { metric: "10×",   label: "Organic traffic growth",          desc: "achieved for content & SEO projects",         accent: false },
  { metric: "95%",   label: "IT Training job placement rate",  desc: "within 3 months of program completion",       accent: true },
  { metric: "$2M+",  label: "Processed monthly",              desc: "through apps we've built in fintech",          accent: false },
  { metric: "50k+",  label: "App downloads",                   desc: "across mobile apps delivered to clients",     accent: true },
  { metric: "<2s",   label: "Average page load time",          desc: "across all websites we build and maintain",   accent: false },
];

const industries = [
  { name: "Fintech & Banking",   icon: "🏦" },
  { name: "Healthcare",          icon: "🏥" },
  { name: "E-Commerce & Retail", icon: "🛍️" },
  { name: "Education & EdTech",  icon: "🎓" },
  { name: "Real Estate",         icon: "🏠" },
  { name: "Food & Delivery",     icon: "🍔" },
  { name: "Agriculture",         icon: "🌾" },
  { name: "Media & Publishing",  icon: "📰" },
];

export default function ProjectsResults() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Impact numbers */}
        <div className="text-center mb-14">
          <FadeUp><SectionLabel>Impact</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl">
              Results We&apos;ve Delivered
            </h2>
          </FadeUp>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {results.map(({ metric, label, desc, accent }, i) => (
            <FadeUp key={metric + label} delay={i * 0.08}>
              <div className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 group
                ${accent
                  ? "bg-surface border-white/[0.07] hover:border-accent/25"
                  : "bg-black border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                <div className={`font-syne font-extrabold text-4xl sm:text-5xl mb-2 leading-none ${accent ? "text-accent" : "text-white"}`}>
                  {metric}
                </div>
                <div className="font-syne font-bold text-white text-sm mb-1">{label}</div>
                <div className="text-white/35 text-xs leading-relaxed">{desc}</div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Industries */}
        <div className="text-center mb-10">
          <FadeUp><SectionLabel>Industries</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl mb-2">
              Sectors We&apos;ve Worked In
            </h2>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map(({ name, icon }) => (
              <div
                key={name}
                className="flex items-center gap-3 bg-surface border border-white/[0.07] hover:border-accent/20 rounded-xl px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <span className="text-xl flex-shrink-0">{icon}</span>
                <span className="text-white/60 text-xs font-syne font-semibold group-hover:text-white transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
