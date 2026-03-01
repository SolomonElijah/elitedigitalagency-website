import type { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesDetail from "@/components/sections/services/ServicesDetail";
import ServicesProcess from "@/components/sections/services/ServicesProcess";
import ServicesPricing from "@/components/sections/services/ServicesPricing";
import ServicesFAQ from "@/components/sections/services/ServicesFAQ";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services — Elite Digital Agency",
  description:
    "Web development, mobile apps, digital marketing, IT training, UI/UX design and cloud consulting. Full-service digital solutions built for real business growth.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetail />
      <ServicesProcess />
      <ServicesPricing />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
}
