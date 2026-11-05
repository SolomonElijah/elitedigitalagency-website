import type { Metadata } from "next";
import { Code2, PencilRuler, Rocket } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import DeliverySection from "@/components/sections/DeliverySection";
import HostingSection from "@/components/sections/HostingSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the Nigerian software development and digital agency behind EliteByte Hosting.",
  alternates: { canonical: "/about" },
};

const principles = [
  { icon: PencilRuler, title: "Start with the people using it", description: "We work through real user tasks early, while the design is still easy to change." },
  { icon: Code2, title: "Build for the next developer", description: "We choose maintainable tools and document the decisions your team will need to understand later." },
  { icon: Rocket, title: "Plan for launch early", description: "We discuss hosting, handover, and ongoing support while there’s still time to make good choices." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro label="About the agency" title="A software team based in Nigeria." description="From Auchi and Lagos, we work with businesses that need to build a product, improve an existing system, or reach customers online. Our team brings software engineering, design, and digital marketing together." />
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">What guides our work</p>
            <h2>Built to be used and maintained.</h2>
          </div>
          <div className="info-grid">
            {principles.map(({ icon: Icon, title, description }) => (
              <article key={title}>
                <Icon size={25} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <DeliverySection />
      <HostingSection />
      <CTASection />
    </>
  );
}
