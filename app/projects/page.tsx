import type { Metadata } from "next";
import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import ProjectsGrid from "@/components/sections/projects/ProjectsGrid";
import ProjectsResults from "@/components/sections/projects/ProjectsResults";
import ProjectsTestimonials from "@/components/sections/projects/ProjectsTestimonials";
import ProjectsCTA from "@/components/sections/projects/ProjectsCTA";

export const metadata: Metadata = {
  title: "Projects — Elite Digital Agency",
  description:
    "Browse our portfolio of 200+ delivered projects — websites, mobile apps, digital marketing campaigns, and IT training programs across 15+ industries.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsResults />
      <ProjectsTestimonials />
      <ProjectsCTA />
    </>
  );
}
