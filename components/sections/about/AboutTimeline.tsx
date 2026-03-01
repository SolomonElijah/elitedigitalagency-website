"use client";

import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const milestones = [
  {
    year: "2016",
    title: "The Beginning",
    desc: "Elite Digital Agency was founded with a team of 3, building websites for local businesses in Lagos.",
    accent: true,
  },
  {
    year: "2018",
    title: "Going Mobile",
    desc: "Launched our mobile app division. Delivered our first iOS & Android apps and grew to 12 team members.",
    accent: false,
  },
  {
    year: "2020",
    title: "Digital Marketing Division",
    desc: "Expanded into full digital marketing services. Helped 20+ clients achieve 3× average ROI during challenging times.",
    accent: true,
  },
  {
    year: "2021",
    title: "IT Training Academy",
    desc: "Launched our IT Training program. First cohort of 50 students. 95% job placement rate within 3 months.",
    accent: false,
  },
  {
    year: "2023",
    title: "International Expansion",
    desc: "Opened operations across West Africa and began serving clients in Europe. Team grew to 35+ specialists.",
    accent: true,
  },
  {
    year: "2025",
    title: "200+ Projects Milestone",
    desc: "Celebrated delivering 200+ successful projects. Launched our enterprise consulting division.",
    accent: false,
  },
];

export default function AboutTimeline() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-xl mx-auto mb-14">
          <FadeUp><SectionLabel>Our Journey</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl">
              8 Years of Growth
            </h2>
          </FadeUp>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Center line — desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.1] to-transparent hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {milestones.map(({ year, title, desc, accent }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <FadeUp key={year} delay={i * 0.1}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-8 md:items-center mb-8`}>

                    {/* Left side content */}
                    <div className={`${isLeft ? "md:text-right md:pr-10" : "md:col-start-2 md:pl-10"}`}>
                      <div className={`bg-black border ${accent ? "border-accent/25 hover:border-accent/40" : "border-white/[0.07] hover:border-white/15"} rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 group`}>
                        <div className={`inline-flex items-center gap-2 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                          <span className={`font-syne font-extrabold text-sm px-3 py-1 rounded-full ${accent ? "bg-accent/10 text-accent border border-accent/20" : "bg-white/[0.05] text-white/50 border border-white/[0.08]"}`}>
                            {year}
                          </span>
                        </div>
                        <h3 className="font-syne font-bold text-white text-base sm:text-lg mb-2">{title}</h3>
                        <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>

                    {/* Center dot — desktop */}
                    <div className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10`}>
                      <div className={`w-3.5 h-3.5 rounded-full border-2 ${accent ? "bg-accent border-accent shadow-[0_0_12px_rgba(0,229,176,0.5)]" : "bg-surface border-white/20"}`} />
                    </div>

                    {/* Empty col for grid alignment */}
                    {isLeft && <div className="hidden md:block" />}
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
