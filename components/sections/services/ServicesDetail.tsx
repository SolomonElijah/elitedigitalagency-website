"use client";

import { Globe, Smartphone, BarChart2, GraduationCap, Palette, Cloud, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    id: "web-development",
    num: "01",
    icon: Globe,
    title: "Web Development",
    tagline: "Fast, beautiful, and built to convert.",
    desc: "We build websites and web applications that look world-class and perform even better. Whether it's a marketing site, an e-commerce store, or a complex SaaS platform — we engineer it with scalability, speed, and user experience at the core.",
    features: [
      "Custom design — no templates, ever",
      "Lightning-fast Core Web Vitals scores",
      "Fully responsive across all devices",
      "CMS integration (Sanity, Contentful, WordPress)",
      "E-commerce (Shopify, WooCommerce, custom)",
      "SEO-optimized from day one",
    ],
    tech: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
    accentColor: "accent",
    gradient: "from-accent/10 via-accent/5 to-transparent",
    glowColor: "rgba(0,229,176,0.12)",
    emoji: "🌐",
  },
  {
    id: "mobile-apps",
    num: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Apps people actually love to use.",
    desc: "We craft high-performance iOS and Android applications with intuitive interfaces, robust backends, and seamless user experiences. From MVP to full launch — we take your idea from concept to App Store.",
    features: [
      "Cross-platform with React Native & Flutter",
      "Native iOS (Swift) & Android (Kotlin) available",
      "Push notifications & real-time features",
      "Offline-first architecture",
      "App Store & Google Play submission support",
      "Ongoing maintenance & version updates",
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Supabase"],
    accentColor: "violet",
    gradient: "from-violet/10 via-violet/5 to-transparent",
    glowColor: "rgba(123,92,250,0.12)",
    emoji: "📱",
  },
  {
    id: "digital-marketing",
    num: "03",
    icon: BarChart2,
    title: "Digital Marketing",
    tagline: "Data-driven campaigns that convert.",
    desc: "We don't just drive traffic — we drive the right traffic. Our digital marketing team combines SEO, paid ads, social media, and email marketing into one cohesive strategy designed to grow your revenue.",
    features: [
      "SEO strategy & technical optimization",
      "Google Ads & Meta Ads management",
      "Social media content & community management",
      "Email marketing & automation",
      "Conversion rate optimization (CRO)",
      "Monthly analytics & performance reports",
    ],
    tech: ["Google Ads", "Meta Ads", "Mailchimp", "HubSpot", "SEMrush", "GA4"],
    accentColor: "accent",
    gradient: "from-accent/10 via-accent/5 to-transparent",
    glowColor: "rgba(0,229,176,0.12)",
    emoji: "📈",
  },
  {
    id: "it-training",
    num: "04",
    icon: GraduationCap,
    title: "IT Training & Consultations",
    tagline: "Build skills. Transform careers. Grow teams.",
    desc: "Whether you're an individual looking to break into tech or a company wanting to upskill your team, our expert-led programs deliver practical, hands-on training with real job-ready outcomes.",
    features: [
      "Web & mobile development bootcamps",
      "Cloud computing (AWS, Azure, GCP)",
      "Cybersecurity & ethical hacking",
      "Corporate & team training programs",
      "1-on-1 mentorship & consultation",
      "Certification preparation & support",
    ],
    tech: ["HTML/CSS/JS", "React", "Python", "AWS", "Azure", "CompTIA"],
    accentColor: "violet",
    gradient: "from-violet/10 via-violet/5 to-transparent",
    glowColor: "rgba(123,92,250,0.12)",
    emoji: "🎓",
  },
  {
    id: "ui-ux-design",
    num: "05",
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Interfaces that delight and convert.",
    desc: "Great design is more than aesthetics — it's how your product feels. We create user-centered designs backed by research, tested with real users, and refined until every interaction feels effortless.",
    features: [
      "User research & persona development",
      "Information architecture & user flows",
      "Wireframing & interactive prototyping",
      "High-fidelity UI design in Figma",
      "Brand identity & design systems",
      "Usability testing & iteration",
    ],
    tech: ["Figma", "Adobe XD", "Framer", "Maze", "Hotjar", "Miro"],
    accentColor: "accent",
    gradient: "from-accent/10 via-accent/5 to-transparent",
    glowColor: "rgba(0,229,176,0.12)",
    emoji: "🎨",
  },
  {
    id: "it-consulting",
    num: "06",
    icon: Cloud,
    title: "Cloud & IT Consulting",
    tagline: "Modern infrastructure for modern businesses.",
    desc: "We help businesses modernize their technology stack, migrate to the cloud, and build secure, scalable infrastructure. Our certified consultants bring deep expertise across AWS, Azure, and GCP.",
    features: [
      "Cloud migration strategy & execution",
      "Infrastructure architecture & design",
      "DevOps & CI/CD pipeline setup",
      "Security audits & compliance (GDPR, ISO)",
      "Cost optimization & performance tuning",
      "24/7 monitoring & incident response",
    ],
    tech: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
    accentColor: "violet",
    gradient: "from-violet/10 via-violet/5 to-transparent",
    glowColor: "rgba(123,92,250,0.12)",
    emoji: "☁️",
  },
];

export default function ServicesDetail() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeUp><SectionLabel>Deep Dive</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-syne font-extrabold text-white tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Everything We Do, In Detail
            </h2>
          </FadeUp>
        </div>

        <div className="space-y-8">
          {services.map(({ id, num, icon: Icon, title, tagline, desc, features, tech, accentColor, gradient, glowColor, emoji }, i) => {
            const isEven = i % 2 === 0;
            const color = accentColor === "accent" ? "#00e5b0" : "#a78bfa";
            return (
              <FadeUp key={id} delay={0.1}>
                <div
                  id={id}
                  className={`relative rounded-3xl border border-white/[0.07] overflow-hidden hover:border-white/[0.12] transition-all duration-300 group`}
                >
                  {/* Card bg gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60`} />
                  {/* Glow orb */}
                  <div
                    className={`absolute ${isEven ? "-top-16 -right-16" : "-top-16 -left-16"} w-64 h-64 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
                  />

                  <div className={`relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 p-7 sm:p-10 items-center`}>

                    {/* Text side */}
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="font-syne text-[0.65rem] font-semibold tracking-[0.14em] uppercase" style={{ color }}>
                          {num}
                        </span>
                        <span className="w-8 h-px" style={{ background: color }} />
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center border" style={{ background: `${color}15`, borderColor: `${color}30` }}>
                          <Icon size={17} style={{ color }} />
                        </div>
                      </div>

                      <h3 className="font-syne font-extrabold text-white text-2xl sm:text-3xl leading-tight mb-2">
                        {title}
                      </h3>
                      <p className="font-syne font-medium mb-4 text-sm" style={{ color }}>
                        {tagline}
                      </p>
                      <p className="text-white/50 text-sm leading-relaxed mb-6">
                        {desc}
                      </p>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {tech.map((t) => (
                          <span key={t} className="text-[0.68rem] font-syne font-semibold px-3 py-1.5 rounded-full border" style={{ borderColor: `${color}25`, color: `${color}cc`, background: `${color}08` }}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-syne font-semibold transition-all duration-200 hover:gap-3"
                        style={{ color }}
                      >
                        Get a Quote <ArrowRight size={15} />
                      </Link>
                    </div>

                    {/* Features side */}
                    <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                      <div className="bg-black/30 rounded-2xl border border-white/[0.06] p-6 backdrop-blur-sm">
                        <p className="font-syne font-bold text-white/60 text-xs uppercase tracking-[0.12em] mb-5">
                          What&apos;s Included
                        </p>
                        <ul className="space-y-3">
                          {features.map((feat) => (
                            <li key={feat} className="flex items-start gap-3 text-sm text-white/65">
                              <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color }} />
                              {feat}
                            </li>
                          ))}
                        </ul>

                        {/* Emoji visual */}
                        <div className="mt-6 pt-5 border-t border-white/[0.06] text-center">
                          <span className="text-4xl">{emoji}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
