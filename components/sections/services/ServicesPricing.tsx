"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const plans = [
  {
    name: "Starter",
    price: "$1,500",
    period: "from",
    tagline: "Perfect for small businesses & startups",
    features: [
      "5-page responsive website",
      "Custom UI design",
      "Mobile-first development",
      "Basic SEO setup",
      "Contact form integration",
      "30-day post-launch support",
    ],
    cta: "Get Started",
    highlighted: false,
    badge: null,
  },
  {
    name: "Growth",
    price: "$4,500",
    period: "from",
    tagline: "For businesses ready to scale",
    features: [
      "Everything in Starter",
      "Up to 20 pages / full web app",
      "CMS integration",
      "E-commerce functionality",
      "Digital marketing setup",
      "3-month support & maintenance",
      "Performance & SEO optimization",
    ],
    cta: "Most Popular",
    highlighted: true,
    badge: "⭐ Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "Tailored for complex & large-scale needs",
    features: [
      "Everything in Growth",
      "Mobile app development",
      "Custom integrations & APIs",
      "Cloud infrastructure setup",
      "Dedicated project manager",
      "SLA-backed ongoing support",
      "IT training for your team",
    ],
    cta: "Let's Talk",
    highlighted: false,
    badge: null,
  },
];

export default function ServicesPricing() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeUp><SectionLabel>Pricing</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl mb-4">
              Transparent Pricing
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-white/40 text-sm leading-relaxed">
              No hidden fees. No surprises. Every project is scoped and priced clearly before we begin.
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map(({ name, price, period, tagline, features, cta, highlighted, badge }, i) => (
            <FadeUp key={name} delay={i * 0.1}>
              <div className={`relative h-full flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 overflow-hidden
                ${highlighted
                  ? "bg-gradient-to-b from-accent/10 to-transparent border-accent/30 shadow-[0_0_40px_rgba(0,229,176,0.1)]"
                  : "bg-black border-white/[0.07] hover:border-white/[0.15]"
                }`}
              >
                {/* Popular badge */}
                {badge && (
                  <div className="absolute top-5 right-5 text-[0.65rem] font-syne font-bold px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/25">
                    {badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-syne font-extrabold text-white text-xl mb-1">{name}</h3>
                  <p className="text-white/40 text-xs mb-5">{tagline}</p>
                  <div className="flex items-end gap-1">
                    {period && <span className="text-white/30 text-sm mb-1">{period}</span>}
                    <span className={`font-syne font-extrabold leading-none ${highlighted ? "text-accent" : "text-white"} text-4xl`}>
                      {price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-white/60">
                      <CheckCircle2
                        size={15}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: highlighted ? "#00e5b0" : "#ffffff50" }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full text-center py-3 rounded-full font-syne font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2
                    ${highlighted
                      ? "bg-accent text-black hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,229,176,0.35)]"
                      : "border border-white/[0.12] text-white hover:border-white/25 hover:bg-white/[0.04]"
                    }`}
                >
                  {cta} <ArrowRight size={14} />
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p className="text-center text-white/25 text-xs mt-8">
            All prices are starting points. Final cost depends on project scope. Book a free discovery call for an exact quote.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
