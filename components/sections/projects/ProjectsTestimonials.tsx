"use client";

import { Star, Quote } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote: "Elite Digital completely transformed our banking platform. The new dashboard handles 10× the transaction volume and our customers love it. The team was professional, on-time, and delivered beyond expectations.",
    name: "Chukwuemeka Obi",
    title: "CTO, MicroBank West Africa",
    project: "FinTech Banking Dashboard",
    initials: "CO",
    gradient: "from-violet/30 to-accent/20",
    rating: 5,
  },
  {
    quote: "The HealthTrack app they built for us became our #1 patient touchpoint within 3 months of launch. The UX is exceptional — our patients aged 50+ find it easy to use, which says everything.",
    name: "Dr. Ngozi Eze",
    title: "CEO, HealthFirst Clinics",
    project: "HealthTrack Pro",
    initials: "NE",
    gradient: "from-accent/30 to-violet/20",
    rating: 5,
  },
  {
    quote: "We went from 8,000 to 85,000 monthly visitors in 6 months. The SEO strategy was methodical, data-driven, and honestly better than any agency we'd worked with in London. Phenomenal value.",
    name: "James Whitfield",
    title: "Editor-in-Chief, TechBlog Africa",
    project: "TechBlog SEO Overhaul",
    initials: "JW",
    gradient: "from-[#ec4899]/20 to-violet/20",
    rating: 5,
  },
];

export default function ProjectsTestimonials() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <FadeUp><SectionLabel>Client Voices</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl">
              Straight From Our Clients
            </h2>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, title, project, initials, gradient, rating }, i) => (
            <FadeUp key={name} delay={i * 0.1}>
              <div className="group h-full bg-black border border-white/[0.07] hover:border-accent/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col">

                {/* Quote icon */}
                <Quote size={24} className="text-accent/30 mb-4 flex-shrink-0" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Project tag */}
                <span className="text-[0.65rem] font-syne font-bold uppercase tracking-[0.12em] text-accent/70 bg-accent/8 border border-accent/15 px-2.5 py-1 rounded-full self-start mb-4">
                  {project}
                </span>

                {/* Quote */}
                <p className="text-white/55 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} border border-white/[0.08] flex items-center justify-center flex-shrink-0`}>
                    <span className="font-syne font-extrabold text-white text-xs">{initials}</span>
                  </div>
                  <div>
                    <p className="font-syne font-semibold text-white text-sm">{name}</p>
                    <p className="text-white/35 text-xs">{title}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
