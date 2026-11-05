import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const scopes = [
  { name: "Starter", price: "From $1,500", description: "A custom, responsive website of up to five pages with basic SEO and a contact form." },
  { name: "Growth", price: "From $4,500", description: "A larger website, online store, or web application with content management and marketing setup." },
  { name: "Enterprise", price: "Custom quote", description: "A larger build with options for mobile apps, custom integrations, cloud infrastructure, and team training." },
];

export default function ServicesPricing() {
  return (
    <section className="section" aria-labelledby="pricing-heading">
      <div className="shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">Pricing</p>
            <h2 id="pricing-heading">Plan your project budget.</h2>
          </div>
          <p>We confirm what’s included and agree on a price before work begins.</p>
        </div>
        <div className="info-grid pricing-grid">
          {scopes.map(({ name, price, description }) => (
            <article key={name}>
              <h3>{name}</h3>
              <p className="index-label">{price}</p>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <Link className="text-link pricing-link" href="/contact">Ask for a quote <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
