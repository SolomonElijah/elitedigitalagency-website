import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section project-cta">
      <div className="shell project-cta-inner">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>What would you like to build?</h2>
        </div>
        <Link href="/contact" className="button button-ink">
          Tell us about your project <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
