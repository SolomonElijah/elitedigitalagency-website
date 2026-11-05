import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fetchPortfolio, type Project } from "@/lib/portfolio";
import ProjectCard from "./projects/ProjectCard";
import ProjectsGrid from "./projects/ProjectsGrid";

async function getFeaturedProjects() {
  try {
    const payload = await fetchPortfolio("/projects/featured", {
      next: { revalidate: 600 },
      signal: AbortSignal.timeout(5500),
    });
    const projects: Project[] = Array.isArray(payload) ? payload : payload?.data;
    return Array.isArray(projects) ? projects : [];
  } catch {
    return [];
  }
}

export default async function ProjectsPreviewSection() {
  const projects = await getFeaturedProjects();

  return (
    <section className="section projects-section featured-section" aria-labelledby="featured-work">
      <div className="shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="featured-work">Built for real businesses.</h2>
          </div>
          <Link href="/projects" className="text-link">View the portfolio <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        {projects.length ? (
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.id} project={project} useApiCopy />)}
          </div>
        ) : <ProjectsGrid featured />}
      </div>
    </section>
  );
}
