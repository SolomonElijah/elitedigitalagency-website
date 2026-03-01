"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

export default function ProjectsCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="relative rounded-3xl overflow-hidden text-center px-6 py-16 sm:px-12 sm:py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-violet/12 to-transparent" />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 rounded-3xl border border-white/[0.07]" />

            <div className="absolute -top-20 left-1/3 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,229,176,0.1) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-20 right-1/3 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(123,92,250,0.12) 0%, transparent 70%)" }} />

            <div className="relative z-10">
              <p className="font-syne text-[0.7rem] font-semibold text-accent tracking-[0.18em] uppercase mb-4">
                Your project could be next
              </p>
              <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight mb-5 text-3xl sm:text-4xl lg:text-5xl">
                Ready to Build Something
                <span className="block gradient-text">That Gets Results?</span>
              </h2>
              <p className="text-white/40 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-10">
                Every project in this portfolio started with a single conversation. Let&apos;s have ours.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Start Your Project <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-outline">
                  <Sparkles size={15} /> View Services
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
