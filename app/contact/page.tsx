import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import ContactForm from "@/components/sections/contact/ContactForm";
import { services } from "@/lib/services";
import { hosting, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Elite Digital Agency about your software, website, mobile app, or digital marketing project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage({ searchParams }: { searchParams: { service?: string | string[] } }) {
  const selected = services.find(({ id }) => id === searchParams.service);

  return (
    <>
      <PageIntro label="Contact the agency" title="Tell us what you’re working on." description="Share the problem you’re trying to solve, what you already have, and when you’d like to start." />
      <section className="section">
        <div className="shell contact-layout">
          <aside className="contact-details" aria-labelledby="contact-options">
            <h2 id="contact-options">Get in touch</h2>
            <p>You can also reach the agency by email, phone, or WhatsApp.</p>
            <ul>
              <li><Mail size={18} aria-hidden="true" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><Phone size={18} aria-hidden="true" /><a href={`tel:${site.phone}`}>{site.phoneLabel}</a></li>
              <li><MessageCircle size={18} aria-hidden="true" /><a href={site.whatsapp}>Chat on WhatsApp</a></li>
              <li><MapPin size={18} aria-hidden="true" />Auchi &amp; Lagos, Nigeria</li>
            </ul>
            <div className="contact-hosting">
              <h3>Need hosting support?</h3>
              <p>For hosting, domains, or billing, speak directly with EliteByte Hosting.</p>
              <a className="text-link" href={hosting.support}>Contact EliteByte support <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </aside>
          <ContactForm key={selected?.id} initialService={selected?.enquiry} />
        </div>
      </section>
    </>
  );
}
