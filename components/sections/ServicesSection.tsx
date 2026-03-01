"use client";

import Link from "next/link";
import { Globe, Smartphone, BarChart2, GraduationCap, Palette, Cloud, ArrowRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    icon: Globe,
    num: "01",
    title: "Web Development",
    desc: "Fast, scalable, and beautifully crafted websites and web applications tailored to your brand — from landing pages to complex portals.",
    tags: ["React / Next.js", "Node.js", "CMS", "E-Commerce"],
    accent: "from-accent/10 to-accent/0",
    border: "hover:border-accent/30",
  },
  {
    icon: Smartphone,
    num: "02",
    title: "Mobile App Development",
    desc: "Intuitive iOS and Android apps with smooth UX, powerful backends, and ongoing maintenance — from concept to App Store.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    accent: "from-violet/10 to-violet/0",
    border: "hover:border-violet/30",
  },
  {
    icon: BarChart2,
    num: "03",
    title: "Digital Marketing",
    desc: "Data-driven campaigns across search, social, and email that convert traffic into loyal customers and measurable revenue.",
    tags: ["SEO", "Google Ads", "Social Media", "Email"],
    accent: "from-accent/10 to-accent/0",
    border: "hover:border-accent/30",
  },
  {
    icon: GraduationCap,
    num: "04",
    title: "IT Training & Consultations",
    desc: "Expert-led training programs and one-on-one IT consultations designed to upskill your team and accelerate your tech journey.",
    tags: ["Bootcamps", "Cloud & DevOps", "Corporate", "Cyber"],
    accent: "from-violet/10 to-violet/0",
    border: "hover:border-violet/30",
  },
  {
    icon: Palette,
    num: "05",
    title: "UI/UX Design",
    desc: "Pixel-perfect designs backed by user research. Wireframes, prototypes, and design systems that delight users and drive conversions.",
    tags: ["Figma", "Prototyping", "Branding", "Systems"],
    accent: "from-accent/10 to-accent/0",
    border: "hover:border-accent/30",
  },
  {
    icon: Cloud,
    num: "06",
    title: "Cloud & IT Consulting",
    desc: "Modernize your infrastructure with the right cloud strategy. Certified consultants guiding migrations, security, and performance.",
    tags: ["AWS / Azure", "DevOps", "Security", "Architecture"],
    accent: "from-violet/10 to-violet/0",
    border: "hover:border-violet/30",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding relative">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(123,92,250,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeUp><SectionLabel>What We Do</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Our Core Services
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Every service is built around your business goals and delivered by specialists who care about outcomes.
            </p>
          </FadeUp>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, num, title, desc, tags, accent, border }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <div className={`group relative h-full bg-surface border border-white/[0.07] ${border} rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-default`}>
                {/* Card glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Number */}
                  <p className="font-syne text-[0.65rem] font-semibold text-accent tracking-[0.12em] uppercase mb-5">{num}</p>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mb-5 group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors duration-300">
                    <Icon size={20} className="text-white/60 group-hover:text-accent transition-colors duration-300" />
                  </div>

                  <h3 className="font-syne font-bold text-white text-[1.05rem] mb-3">{title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-5">{desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="text-[0.68rem] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/35">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA */}
        <FadeUp delay={0.3}>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-outline text-sm">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
