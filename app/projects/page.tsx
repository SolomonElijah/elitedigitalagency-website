import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import ProjectsGrid from "@/components/sections/projects/ProjectsGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore websites and mobile apps built by Elite Digital Agency.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro label="Our work" title="Web platforms and apps we’ve built." description="Browse our client work, from an automotive platform in Abuja to a mobile commerce app." />
      <section className="section projects-section" aria-label="Project portfolio">
        <div className="shell">
          <ProjectsGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
