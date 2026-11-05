import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Brand from "./Brand";
import { hosting, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <Brand />
            <p className="footer-description">Software development and digital services for businesses in Nigeria and beyond.</p>
          </div>
          <div className="footer-links">
            <h2>Explore</h2>
            <Link href="/services">Services</Link>
            <Link href="/projects">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-links">
            <h2>Get in touch</h2>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phone}`}>{site.phoneLabel}</a>
            <span>Auchi & Lagos, Nigeria</span>
          </div>
          <div className="footer-links">
            <h2>Our hosting brand</h2>
            <Link href="/hosting">About {hosting.name}</Link>
            <a href={hosting.website}>Hosting plans <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href={hosting.account}>Client area <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Elite Digital Agency</p>
          <a href="#main-content">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
