"use client";

import { Linkedin, Twitter } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const team = [
  {
    name: "Solomon Elijah",
    role: "CEO & Founder",
    bio: "10+ years in digital strategy. Passionate about building solutions that create real-world impact.",
    initials: "SE",
    gradient: "from-accent/30 to-violet/30",
  },
  {
    name: "Sarah Adebayo",
    role: "CTO",
    bio: "Full-stack architect with a love for scalable systems and clean, purposeful code.",
    initials: "SA",
    gradient: "from-violet/30 to-accent/20",
  },
  {
    name: "Amara Diallo",
    role: "Head of Design",
    bio: "UX visionary crafting interfaces that are as beautiful as they are intuitive.",
    initials: "AD",
    gradient: "from-accent/20 to-[#ff6b6b]/20",
  },
  {
    name: "James Osei",
    role: "Head of Marketing",
    bio: "Data-driven growth marketer who turns traffic into revenue through smart campaigns.",
    initials: "JO",
    gradient: "from-[#fbbf24]/20 to-accent/20",
  },
  {
    name: "Priya Adamu",
    role: "Lead Developer",
    bio: "React & Node specialist obsessed with performance, accessibility, and great DX.",
    initials: "PA",
    gradient: "from-violet/25 to-[#ec4899]/20",
  },
  {
    name: "Michael Adeyemi",
    role: "IT Training Lead",
    bio: "Educator and engineer who has trained 500+ developers and IT professionals.",
    initials: "MA",
    gradient: "from-accent/25 to-violet/25",
  },
];

export default function AboutTeam() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeUp><SectionLabel>The People</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl">
                Meet the Team
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              A diverse team of thinkers, builders, and strategists driven by a shared purpose.
            </p>
          </FadeUp>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map(({ name, role, bio, initials, gradient }, i) => (
            <FadeUp key={name} delay={i * 0.08}>
              <div className="group h-full bg-surface border border-white/[0.07] hover:border-accent/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)]">

                {/* Avatar */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} border border-white/[0.08] flex items-center justify-center`}>
                    <span className="font-syne font-extrabold text-white text-lg">{initials}</span>
                  </div>
                  {/* Social icons */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/30 transition-colors">
                      <Linkedin size={13} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/30 transition-colors">
                      <Twitter size={13} />
                    </a>
                  </div>
                </div>

                <h3 className="font-syne font-bold text-white text-base mb-0.5">{name}</h3>
                <p className="text-accent text-xs font-semibold tracking-wide uppercase mb-3">{role}</p>
                <p className="text-white/40 text-sm leading-relaxed">{bio}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
