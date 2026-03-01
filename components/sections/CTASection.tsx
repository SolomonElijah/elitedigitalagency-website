"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

export default function CTASection() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="relative rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center">

            {/* BG gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-violet/15 to-transparent" />
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Glow orbs */}
            <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,229,176,0.15) 0%, transparent 70%)" }}
            />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(123,92,250,0.15) 0%, transparent 70%)" }}
            />

            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-white/[0.08]" />

            <div className="relative z-10">
              <p className="font-syne text-[0.7rem] font-semibold text-accent tracking-[0.18em] uppercase mb-4">
                Ready to get started?
              </p>
              <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Let&apos;s Build Something<br />
                <span className="gradient-text">Remarkable Together.</span>
              </h2>
              <p className="text-white/45 text-sm leading-relaxed max-w-md mx-auto mb-10">
                Have a project in mind? Our team is ready to turn your ideas into a digital reality that drives real business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link href="/about" className="btn-outline">
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
