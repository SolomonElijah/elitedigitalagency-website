"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

export default function AboutCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="relative rounded-3xl overflow-hidden text-center px-6 py-16 sm:px-12 sm:py-20">
            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-violet/12 to-transparent" />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 rounded-3xl border border-white/[0.07]" />

            {/* Glow orbs */}
            <div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,229,176,0.1) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(123,92,250,0.12) 0%, transparent 70%)" }} />

            <div className="relative z-10">
              <p className="font-syne text-[0.7rem] font-semibold text-accent tracking-[0.18em] uppercase mb-4">
                Join 50+ companies that trust us
              </p>
              <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight mb-5 text-3xl sm:text-4xl lg:text-5xl">
                Ready to Work With Us?
              </h2>
              <p className="text-white/40 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-10">
                Whether you need a new website, a mobile app, a marketing strategy, or IT training — we're ready to make it happen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-outline">
                  <MessageCircle size={16} /> Explore Services
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
