import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import DeliverySection from "@/components/sections/DeliverySection";
import HostingSection from "@/components/sections/HostingSection";
import ServicesPricing from "@/components/sections/services/ServicesPricing";
import ServicesFAQ from "@/components/sections/services/ServicesFAQ";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom software, web and mobile development, product design, digital marketing, IT training, and cloud consulting.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro label="Services" title="Software engineering and digital services." description="Work with us on a new product, an existing system, or the design, marketing, and infrastructure around it.">
        <nav className="service-index" aria-label="Jump to a service">
          {services.map(({ id, name }) => <a key={id} href={`#${id}`}>{name}</a>)}
        </nav>
      </PageIntro>
      <div className="shell section">
        {services.map(({ id, name, description, capabilities }, index) => (
          <section className="service-detail" id={id} key={id} aria-labelledby={`${id}-heading`}>
            <div>
              <p className="index-label" aria-hidden="true">0{index + 1}</p>
              <h2 id={`${id}-heading`}>{name}</h2>
            </div>
            <div>
              <p>{description}</p>
              <ul className="service-tags">{capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
              <Link className="text-link" href={`/contact?service=${id}`}>Enquire about this service <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
          </section>
        ))}
      </div>
      <DeliverySection />
      <ServicesPricing />
      <ServicesFAQ />
      <HostingSection />
      <CTASection />
    </>
  );
}
