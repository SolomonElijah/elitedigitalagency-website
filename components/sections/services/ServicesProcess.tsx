"use client";

import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We start by listening. A free 30-minute call to understand your goals, challenges, budget, and timeline. No pitch, just conversation.",
    icon: "🤝",
    accent: true,
  },
  {
    num: "02",
    title: "Strategy & Proposal",
    desc: "Within 48 hours we send a detailed proposal with scope, timeline, pricing, and our recommended approach — no hidden costs.",
    icon: "📋",
    accent: false,
  },
  {
    num: "03",
    title: "Design & Build",
    desc: "Our team gets to work. You get regular updates, sprint reviews, and full access to progress. We build in the open.",
    icon: "⚙️",
    accent: true,
  },
  {
    num: "04",
    title: "Test & Refine",
    desc: "Rigorous QA across devices, browsers, and user scenarios. We don't ship until it's bulletproof.",
    icon: "🧪",
    accent: false,
  },
  {
    num: "05",
    title: "Launch & Handover",
    desc: "We handle deployment, DNS, and go-live. Then we walk you through everything so you're fully in control.",
    icon: "🚀",
    accent: true,
  },
  {
    num: "06",
    title: "Ongoing Support",
    desc: "We don't disappear after launch. Retainer plans, maintenance packages, and on-call support — we're here for the long run.",
    icon: "🛡️",
    accent: false,
  },
];

export default function ServicesProcess() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeUp><SectionLabel>How We Work</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl mb-4">
              Our Process
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-white/40 text-sm leading-relaxed">
              A transparent, collaborative process that keeps you informed and in control at every step.
            </p>
          </FadeUp>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map(({ num, title, desc, icon, accent }, i) => (
            <FadeUp key={num} delay={i * 0.08}>
              <div className={`group relative h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] overflow-hidden
                ${accent
                  ? "bg-surface border-white/[0.07] hover:border-accent/25"
                  : "bg-black border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                {/* Hover glow */}
                {accent && (
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`font-syne font-extrabold text-xs tracking-[0.14em] uppercase ${accent ? "text-accent" : "text-white/25"}`}>
                      {num}
                    </span>
                    <span className="text-2xl">{icon}</span>
                  </div>

                  <h3 className="font-syne font-bold text-white text-base sm:text-lg mb-3">{title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
