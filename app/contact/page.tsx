import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactReasons from "@/components/sections/contact/ContactReasons";
import ContactOffices from "@/components/sections/contact/ContactOffices";
import ContactFinalCTA from "@/components/sections/contact/ContactFinalCTA";

export const metadata: Metadata = {
  title: "Contact Us — Elite Digital Agency",
  description:
    "Get in touch with Elite Digital Agency. Start a project, book a free discovery call, or just say hello. We reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactReasons />
      <ContactOffices />
      <ContactFinalCTA />
    </>
  );
}
