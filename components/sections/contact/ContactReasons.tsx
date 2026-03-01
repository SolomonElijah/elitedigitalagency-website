"use client";

import { Zap, MessageCircle, ShieldCheck, Trophy } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const reasons = [
  {
    icon: Zap,
    title: "Fast Response",
    desc: "We reply to every inquiry within 4 hours on business days. You'll never be left waiting to hear back from us.",
    color: "accent",
  },
  {
    icon: MessageCircle,
    title: "Free Discovery Call",
    desc: "Book a free 30-minute consultation — no pressure, no pitch. Just an honest conversation about your project.",
    color: "violet",
  },
  {
    icon: ShieldCheck,
    title: "No Hidden Costs",
    desc: "Every proposal we send is detailed, transparent, and fixed. The price you agree to is the price you pay.",
    color: "accent",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    desc: "200+ delivered projects, 98% client satisfaction rate, and clients who come back again and again.",
    color: "violet",
  },
];

export default function ContactReasons() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-xl mx-auto mb-12">
          <FadeUp><SectionLabel>Why Us</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl">
              Why Teams Choose<br />Elite Digital Agency
            </h2>
          </FadeUp>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ icon: Icon, title, desc, color }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <div className={`group h-full bg-surface border border-white/[0.07] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] text-center
                ${color === "accent" ? "hover:border-accent/25" : "hover:border-violet/25"}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 mx-auto transition-colors duration-300
                  ${color === "accent"
                    ? "bg-accent/10 border border-accent/20 group-hover:bg-accent/15"
                    : "bg-violet/10 border border-violet/20 group-hover:bg-violet/15"
                  }`}
                >
                  <Icon size={20} style={{ color: color === "accent" ? "#00e5b0" : "#a78bfa" }} />
                </div>
                <h3 className="font-syne font-bold text-white text-base mb-3">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
