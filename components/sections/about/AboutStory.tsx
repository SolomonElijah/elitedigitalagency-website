"use client";

import { CheckCircle2 } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const values = [
  "Client-first mindset in every decision",
  "Transparent communication & agile delivery",
  "Cutting-edge tech with proven methodology",
  "End-to-end ownership from brief to launch",
  "Measurable outcomes, not just deliverables",
  "Long-term partnerships over one-off projects",
];

export default function AboutStory() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left — visual */}
          <FadeUp>
            <div className="relative">
              {/* Main card */}
              <div className="relative rounded-3xl overflow-hidden bg-surface border border-white/[0.07] p-8 sm:p-10">
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(0,229,176,0.12) 0%, transparent 70%)" }}
                />
                <div className="absolute inset-0 grid-bg opacity-30" />

                <div className="relative z-10">
                  <div className="text-6xl mb-6">💡</div>
                  <h3 className="font-syne font-extrabold text-white text-2xl sm:text-3xl leading-tight mb-4">
                    Born from a passion for <span className="gradient-text">digital excellence</span>
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    What started as a small web studio in 2016 has grown into a full-service digital powerhouse — trusted by startups, SMEs, and enterprise clients across Africa, Europe, and beyond.
                  </p>
                </div>
              </div>

              {/* Floating accent cards */}
              <div className="absolute -bottom-5 -left-5 bg-[#0d2e1a] border border-accent/20 rounded-2xl px-5 py-4 hidden sm:block">
                <div className="text-accent font-syne font-extrabold text-2xl">8+</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-0.5">Years Active</div>
              </div>

              <div className="absolute -top-5 -right-5 bg-mid border border-violet/20 rounded-2xl px-5 py-4 hidden sm:block">
                <div className="text-violet-400 font-syne font-extrabold text-2xl" style={{ color: "#a78bfa" }}>35+</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-0.5">Team Members</div>
              </div>
            </div>
          </FadeUp>

          {/* Right — text */}
          <div>
            <FadeUp><SectionLabel>Our Story</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight mb-5 text-3xl sm:text-4xl lg:text-5xl">
                More Than an Agency —<br />
                <span className="text-white/40 font-light">A Growth Partner</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-4">
                We started with a simple idea: every business deserves a powerful digital presence. Over the years, we've refined our craft across hundreds of projects spanning fintech, healthcare, e-commerce, education, and more.
              </p>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8">
                Today, Elite Digital Agency is a team of 35+ designers, developers, marketers, and consultants united by one purpose — to help our clients win online.
              </p>
            </FadeUp>

            {/* Values checklist */}
            <FadeUp delay={0.2}>
              <ul className="grid sm:grid-cols-2 gap-3">
                {values.map((val, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/60">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {val}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
