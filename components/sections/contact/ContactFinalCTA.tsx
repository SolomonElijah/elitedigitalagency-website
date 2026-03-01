"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

export default function ContactFinalCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-5">

          {/* Book a call card */}
          <FadeUp>
            <div className="relative rounded-2xl overflow-hidden border border-accent/20 bg-gradient-to-br from-accent/8 to-transparent p-8 h-full flex flex-col group hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,229,176,0.12) 0%, transparent 70%)" }}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center mb-5">
                  <Calendar size={20} className="text-accent" />
                </div>
                <h3 className="font-syne font-extrabold text-white text-xl mb-3">Book a Free Call</h3>
                <p className="text-white/45 text-sm leading-relaxed flex-1 mb-6">
                  Schedule a free 30-minute discovery call with one of our experts. We&apos;ll listen, advise, and outline a path forward — no commitment required.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 text-accent text-sm font-syne font-semibold hover:gap-3 transition-all duration-200">
                  Schedule Now <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* WhatsApp / quick chat card */}
          <FadeUp delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-surface p-8 h-full flex flex-col group hover:border-violet/25 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(123,92,250,0.1) 0%, transparent 70%)" }}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-violet/15 border border-violet/25 flex items-center justify-center mb-5">
                  <MessageCircle size={20} style={{ color: "#a78bfa" }} />
                </div>
                <h3 className="font-syne font-extrabold text-white text-xl mb-3">Chat on WhatsApp</h3>
                <p className="text-white/45 text-sm leading-relaxed flex-1 mb-6">
                  Prefer a quick chat? Reach us directly on WhatsApp. We&apos;re active during business hours and typically reply within minutes.
                </p>
                <a
                  href="https://wa.me/2347081087376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-syne font-semibold hover:gap-3 transition-all duration-200"
                  style={{ color: "#a78bfa" }}
                >
                  Open WhatsApp <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Bottom nav row */}
        <FadeUp delay={0.2}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: "View Our Services", href: "/services" },
              { label: "See Our Projects",  href: "/projects" },
              { label: "Learn About Us",    href: "/about" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-1.5 text-xs font-syne font-semibold text-white/35 hover:text-accent border border-white/[0.08] hover:border-accent/25 px-4 py-2.5 rounded-full transition-all duration-200"
              >
                {label} <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
