"use client";

import { Target, Eye, Heart, Zap, Shield, Users } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const values = [
  {
    icon: Target,
    title: "Mission",
    desc: "To empower businesses with cutting-edge digital solutions that drive measurable growth — making world-class technology accessible to companies of all sizes.",
    color: "accent",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "To be the most trusted digital partner in Africa and beyond — known not just for what we build, but for the results we deliver and the relationships we build.",
    color: "violet",
  },
  {
    icon: Heart,
    title: "Client First",
    desc: "Every decision starts with one question: what's best for our client? We listen deeply before we act, and we measure success by your success.",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Excellence",
    desc: "We hold ourselves to a high standard in everything — from the quality of our code to the clarity of our communication. Good enough is never good enough.",
    color: "violet",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "We're radically transparent about timelines, budgets, and challenges. No surprises, no excuses — just honest partnership built on trust.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Through our IT training programs, we're investing in the next generation of tech talent — building a stronger digital ecosystem for everyone.",
    color: "violet",
  },
];

export default function AboutValues() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeUp><SectionLabel>What Drives Us</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl">
              Our Mission, Vision<br />& Core Values
            </h2>
          </FadeUp>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map(({ icon: Icon, title, desc, color }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <div className={`group h-full bg-black border border-white/[0.07] rounded-2xl p-6 hover:-translate-y-1.5 transition-all duration-300 hover:border-${color === "accent" ? "accent" : "violet"}/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]`}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                  color === "accent"
                    ? "bg-accent/10 border border-accent/20 group-hover:bg-accent/15"
                    : "bg-violet/10 border border-violet/20 group-hover:bg-violet/15"
                } transition-colors duration-300`}>
                  <Icon size={20} className={color === "accent" ? "text-accent" : "text-violet-400"} style={color === "violet" ? { color: "#a78bfa" } : {}} />
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
