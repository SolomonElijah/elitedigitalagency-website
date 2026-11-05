export const services = [
  {
    id: "web-development",
    name: "Software & web development",
    enquiry: "Web Development",
    description: "Build the website, customer portal, online store, or internal tool your business needs.",
    capabilities: ["Business websites & CMS", "Custom web apps & SaaS", "E-commerce", "APIs & integrations"],
  },
  {
    id: "mobile-apps",
    name: "Mobile app development",
    enquiry: "Mobile App Development",
    description: "Take your product to iOS and Android, from the first prototype through app store release.",
    capabilities: ["iOS & Android apps", "Cross-platform development", "Backend integration", "App store submission"],
  },
  {
    id: "ui-ux-design",
    name: "Product & UI/UX design",
    enquiry: "UI/UX Design",
    description: "Turn complex tasks into clear, accessible interfaces that are easy to learn and use.",
    capabilities: ["User journeys", "Interactive prototypes", "Interface design", "Design systems"],
  },
  {
    id: "digital-marketing",
    name: "Digital marketing",
    enquiry: "Digital Marketing",
    description: "Help customers find you through search, paid campaigns, social, and email, with tracking in place to see what works.",
    capabilities: ["Search engine optimisation", "Paid search & social", "Email marketing", "Analytics & reporting"],
  },
  {
    id: "it-consulting",
    name: "Cloud & IT consulting",
    enquiry: "Cloud & IT Consulting",
    description: "Plan a migration, improve your deployment process, or choose infrastructure that fits your product.",
    capabilities: ["Cloud architecture", "Deployment & migration", "Performance review", "Technical planning"],
  },
  {
    id: "it-training",
    name: "IT training",
    enquiry: "IT Training & Consultations",
    description: "Build practical skills through hands-on web, mobile, or cloud training for individuals and teams.",
    capabilities: ["Team workshops", "Development training", "Cloud fundamentals", "One-to-one guidance"],
  },
] as const;

export const delivery = [
  { title: "Scope the work", description: "We agree on the problem, who the product serves, and what the first release needs to do." },
  { title: "Design & build", description: "We prototype the key flows, then build and review the product with you in stages." },
  { title: "Launch & hand over", description: "We test the release, plan deployment, and show your team how to run what we built." },
];
