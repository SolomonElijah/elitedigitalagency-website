import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe, Mail, Server } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import { hosting } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hosting by EliteByte",
  description: "Get web hosting, domain names, and business email through EliteByte Hosting, our sister brand.",
  alternates: { canonical: "/hosting" },
};

const options = [
  { icon: Server, title: "Web hosting", description: "Find shared, WordPress, or VPS hosting for a new site or one you’re moving." },
  { icon: Globe, title: "Domain names", description: "Register or transfer your domain, including .com, .ng, and .com.ng." },
  { icon: Mail, title: "Business email", description: "Set up branded inboxes using your own domain name." },
];

export default function HostingPage() {
  return (
    <>
      <PageIntro
        label="Our hosting brand"
        title="Meet EliteByte Hosting."
        description="Elite Digital Agency and EliteByte Hosting share the same ownership. We build your site or software. EliteByte provides hosting, domain registration, and business email."
      >
        <div className="actions">
          <a className="button button-primary" href={hosting.website}>Browse hosting plans <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a className="button button-outline" href={hosting.account}>Open client area <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </PageIntro>
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">What EliteByte provides</p>
            <h2>Everything your site needs to go live.</h2>
          </div>
          <div className="info-grid">
            {options.map(({ icon: Icon, title, description }) => (
              <article key={title}>
                <Icon size={26} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section hosting-support">
        <div className="shell reading-grid">
          <h2>Already hosting with EliteByte?</h2>
          <div className="reading-copy">
            <p>Use the client area to manage services, domains, billing, and support tickets. For questions about hosting or help getting started, contact EliteByte support directly.</p>
            <div className="actions">
              <a className="button button-ink" href={hosting.support}>Get hosting support <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>
      <section className="section project-cta">
        <div className="shell project-cta-inner">
          <div>
            <p className="eyebrow">Agency projects</p>
            <h2>Need a website built first?</h2>
          </div>
          <Link className="button button-ink" href="/contact?service=web-development">Talk to the agency <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
