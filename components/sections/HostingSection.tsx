import Link from "next/link";
import { ArrowRight, ArrowUpRight, Server } from "lucide-react";
import { hosting } from "@/lib/site";

export default function HostingSection() {
  return (
    <section className="section hosting-section" aria-labelledby="hosting-heading">
      <div className="shell hosting-feature">
        <div className="hosting-copy">
          <p className="eyebrow">Our hosting company</p>
          <h2 id="hosting-heading">From the first commit to going live.</h2>
          <p>EliteByte Hosting is our sister company for web hosting, domain registration, and business email. You can use it for a project we build together or a site you already run.</p>
          <div className="actions">
            <Link href="/hosting" className="button button-light">Explore EliteByte Hosting <ArrowRight size={17} aria-hidden="true" /></Link>
            <a href={hosting.account} className="text-link">Client area <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hosting-art">
          <span className="hosting-caption"><Server size={18} aria-hidden="true" /> EliteByte Hosting</span>
        </div>
      </div>
    </section>
  );
}
