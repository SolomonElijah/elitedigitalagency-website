"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A simple 5-page website typically takes 2–3 weeks. A full web app or mobile app usually takes 6–12 weeks. We always give you a clear timeline in our proposal before work begins.",
  },
  {
    q: "Do you work with clients outside Nigeria / Africa?",
    a: "Absolutely. We have clients across Europe, North America, and the Middle East. We work fully remotely and are comfortable with different time zones. Most of our communication happens via Slack, Notion, and scheduled video calls.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just a brief explaining what you need, your budget range, and your deadline. We handle the rest — strategy, design, development, and launch. You don't need to be technical to work with us.",
  },
  {
    q: "Can you take over a project someone else started?",
    a: "Yes, we do project rescues. We'll do a thorough code review first, assess the state of the existing work, and give you an honest recommendation on whether to continue or rebuild. We'll always tell you the truth, even if it's not what you want to hear.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. For most projects we work on a 40/40/20 split — 40% upfront, 40% at midpoint, 20% on delivery. For larger enterprise projects we can arrange milestone-based billing. We accept bank transfer, card, and crypto.",
  },
  {
    q: "What happens after the project launches?",
    a: "We offer 30-day free post-launch support on all projects. After that, we have flexible maintenance retainer plans starting from $200/month that include bug fixes, minor updates, hosting management, and priority support.",
  },
  {
    q: "Do your IT training programs come with certificates?",
    a: "Yes. All our training programs include a completion certificate. For specific certifications like AWS, Azure, or CompTIA, we provide preparation coaching and practice exams — the official cert exam is taken through the respective body.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <FadeUp><SectionLabel>FAQ</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl">
              Common Questions
            </h2>
          </FadeUp>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer
                  ${openIndex === i
                    ? "border-accent/25 bg-accent/[0.04]"
                    : "border-white/[0.07] bg-surface hover:border-white/[0.12]"
                  }`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <h3 className={`font-syne font-semibold text-sm sm:text-base transition-colors ${openIndex === i ? "text-accent" : "text-white"}`}>
                    {q}
                  </h3>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200
                    ${openIndex === i
                      ? "border-accent/30 bg-accent/10 text-accent"
                      : "border-white/[0.1] text-white/40"
                    }`}
                  >
                    {openIndex === i ? <Minus size={13} /> : <Plus size={13} />}
                  </div>
                </div>

                {openIndex === i && (
                  <div className="px-6 pb-5">
                    <p className="text-white/50 text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
