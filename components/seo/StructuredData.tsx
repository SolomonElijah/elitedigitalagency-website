// Structured data (JSON-LD) for rich Google search results
// Drop <StructuredData /> anywhere in layout or individual pages

const BASE_URL = "https://www.elitedigitalagency.net";

// ── Organization schema ─────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elite Digital Agency",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Elite Digital Agency builds world-class websites, mobile apps, digital marketing campaigns, and IT training programs for businesses across Africa and beyond.",
  foundingDate: "2016",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 35 },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1st powerline, Auchi Edo State",
    addressLocality: "Auchi",
    addressRegion: "Edo State",
    addressCountry: "NG",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+2347081087376",
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: ["NG", "GB", "US", "DE"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+2347081087376",
      contactType: "sales",
      availableLanguage: "English",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/elite-digital-agency",
    "https://twitter.com/elitedigitalagency",
    "https://www.instagram.com/elitedigitalagency",
    "https://www.facebook.com/elitedigitalagency",
  ],
  email: "hello@elitedigital.agency",
};

// ── Local Business schema ───────────────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "Elite Digital Agency",
  image: `${BASE_URL}/og-image.png`,
  url: BASE_URL,
  telephone: "+2347081087376",
  email: "info@elitedigitalagency.net",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1st powerline, Auchi Edo State",
    addressLocality: "Auchi",
    addressRegion: "Edo State",
    postalCode: "101241",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.4281,
    longitude: 3.4219,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── Website / Sitelinks Searchbox schema ───────────────────────
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Elite Digital Agency",
  description: "Web Development, Mobile Apps, Digital Marketing & IT Training",
  publisher: { "@id": `${BASE_URL}/#organization` },
};

// ── Services schema ────────────────────────────────────────────
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Elite Digital Agency Services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Web Development",
        description: "Custom websites and web applications built with Next.js, React, and Node.js",
        provider: { "@id": `${BASE_URL}/#organization` },
        url: `${BASE_URL}/services#web-development`,
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Mobile App Development",
        description: "iOS and Android apps built with React Native and Flutter",
        provider: { "@id": `${BASE_URL}/#organization` },
        url: `${BASE_URL}/services#mobile-apps`,
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Digital Marketing",
        description: "SEO, Google Ads, social media marketing, and email campaigns",
        provider: { "@id": `${BASE_URL}/#organization` },
        url: `${BASE_URL}/services#digital-marketing`,
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "IT Training & Consultations",
        description: "Web development bootcamps, cloud training, and corporate IT consultations",
        provider: { "@id": `${BASE_URL}/#organization` },
        url: `${BASE_URL}/services#it-training`,
        areaServed: ["NG", "GB", "US"],
      },
    },
  ],
};

// ── FAQ schema (for Services page) ────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a typical web development project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple 5-page website typically takes 2–3 weeks. A full web app or mobile app usually takes 6–12 weeks. We always give you a clear timeline in our proposal before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international clients outside Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We have clients across Europe, North America, and the Middle East. We work fully remotely and are comfortable with different time zones.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our web development projects start from $1,500 for a simple site and scale based on complexity. We provide detailed, transparent proposals with no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer payment plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For most projects we work on a 40/40/20 split — 40% upfront, 40% at midpoint, 20% on delivery. We accept bank transfer, card, and crypto.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after my website launches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer 30-day free post-launch support on all projects. After that, flexible maintenance retainer plans are available starting from $200/month.",
      },
    },
  ],
};

// ── Breadcrumb schema helper ───────────────────────────────────
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ── React component to inject any schema ──────────────────────
interface StructuredDataProps {
  schema: object | object[];
}

export default function StructuredData({ schema }: StructuredDataProps) {
  const data = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {data.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
