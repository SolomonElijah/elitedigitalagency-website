"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

export default function ServicesCTA() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="relative rounded-3xl overflow-hidden text-center px-6 py-16 sm:px-12 sm:py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-accent/8 to-transparent" />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 rounded-3xl border border-white/[0.07]" />

            <div className="absolute -top-20 right-1/4 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(123,92,250,0.12) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,229,176,0.1) 0%, transparent 70%)" }} />

            <div className="relative z-10">
              <p className="font-syne text-[0.7rem] font-semibold text-accent tracking-[0.18em] uppercase mb-4">
                Free discovery call — no commitment
              </p>
              <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight mb-5 text-3xl sm:text-4xl lg:text-5xl">
                Not Sure Which Service<br />
                <span className="gradient-text">You Need?</span>
              </h2>
              <p className="text-white/40 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-10">
                Book a free 30-minute call with our team. We'll listen to your goals and recommend exactly what you need — no upselling, just honest advice.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Free Call <Phone size={15} />
                </Link>
                <Link href="/projects" className="btn-outline">
                  See Our Work <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
