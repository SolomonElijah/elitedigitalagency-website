import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { label: "Product engineering", detail: "Web, mobile & custom software", href: "/services#web-development" },
  { label: "Design & growth", detail: "Product design & digital marketing", href: "/services#ui-ux-design" },
  { label: "Cloud & hosting", detail: "Infrastructure & launch support", href: "/hosting" },
];

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-stage">
        <div className="shell">
          <div className="hero-copy">
            <p className="eyebrow">Software development company · {site.cac}</p>
            <h1 id="hero-heading">We build the software <em>your business runs on.</em></h1>
            <p className="hero-description">We design and build websites, mobile apps, desktop apps, custom APIs, and internal tools for businesses across Nigeria.</p>
            <div className="actions">
              <Link href="/contact" className="button button-light">Discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link>
              <Link href="#featured-work" className="button button-ghost">Explore our work <ArrowDown size={17} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <Image src="/engineering-team.webp" alt="" fill priority sizes="(max-width: 760px) 100vw, 75vw" />
        </div>
        <div className="shell hero-location">
          <MapPin size={15} aria-hidden="true" /> Based in Auchi &amp; Lagos, Nigeria
        </div>
      </div>
      <ul className="shell hero-links">
        {links.map(({ label, detail, href }, index) => (
          <li key={label}>
            <Link href={href}>
              <span className="index-label" aria-hidden="true">0{index + 1}</span>
              <span><strong>{label}</strong><small>{detail}</small></span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
