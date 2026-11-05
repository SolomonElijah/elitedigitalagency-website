import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsPreviewSection from "@/components/sections/ProjectsPreviewSection";
import HostingSection from "@/components/sections/HostingSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsPreviewSection />
      <ServicesSection />
      <HostingSection />
      <CTASection />
    </>
  );
}
