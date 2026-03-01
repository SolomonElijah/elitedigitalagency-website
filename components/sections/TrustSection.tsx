"use client";

import { Star } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote: "Elite Digital completely transformed our online presence. Our conversion rate jumped 180% in just 3 months. Exceptional team.",
    name: "Sarah Johnson",
    title: "CEO, NovaTech Solutions",
    avatar: "SJ",
    rating: 5,
  },
  {
    quote: "The mobile app they built for us became our top revenue channel within 6 months. The attention to UX detail is unmatched.",
    name: "Marcus Okafor",
    title: "Founder, HealthTrack",
    avatar: "MO",
    rating: 5,
  },
  {
    quote: "From strategy to execution, they handled our digital marketing with precision. ROI exceeded expectations by 240%.",
    name: "Priya Sharma",
    title: "CMO, GrowthBridge",
    avatar: "PS",
    rating: 5,
  },
];

const trustedBy = ["TechCorp", "NovaBank", "HealthHub", "GrowthBridge", "FinEdge", "LearnPro"];

export default function TrustSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Trusted by */}
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-[0.72rem] text-white/25 uppercase tracking-[0.2em] mb-8">Trusted by forward-thinking companies</p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
              {trustedBy.map((name) => (
                <span key={name} className="font-syne font-bold text-white/15 text-lg tracking-tight hover:text-white/30 transition-colors duration-200 cursor-default">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-16" />

        {/* Testimonials */}
        <FadeUp><SectionLabel>Client Love</SectionLabel></FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight mb-10" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            What Our Clients Say
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, title, avatar, rating }, i) => (
            <FadeUp key={name} delay={i * 0.1}>
              <div className="group h-full bg-surface border border-white/[0.07] hover:border-accent/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} size={13} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-violet flex items-center justify-center text-black font-syne font-bold text-xs flex-shrink-0">
                    {avatar}
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
