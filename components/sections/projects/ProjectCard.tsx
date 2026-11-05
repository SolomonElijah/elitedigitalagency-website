"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { type Project, projectCopy } from "@/lib/portfolio";
import { site } from "@/lib/site";

const categoryLabels: Record<string, string> = {
  web: "Web development",
  mobile: "Mobile apps",
  marketing: "Digital marketing",
  training: "IT training",
};

export function categoryLabel(category: string) {
  return categoryLabels[category] ?? category.replace(/[-_]/g, " ");
}

function externalUrl(value: string | null) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url : null;
  } catch {
    return null;
  }
}

export default function ProjectCard({ project, useApiCopy = false }: { project: Project; useApiCopy?: boolean }) {
  const thumbnail = externalUrl(project.thumbnail);
  const [failedImage, setFailedImage] = useState(false);
  const demo = externalUrl(project.demo_url);
  const repository = externalUrl(project.github_url);
  const link = demo ?? repository;
  const { title, description } = useApiCopy ? project : projectCopy(project);
  const portalImage = thumbnail?.origin === new URL(site.portalApi).origin && thumbnail.pathname.startsWith("/storage/");
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];
  const mediaClass = project.category === "mobile" ? "project-media project-media-mobile" : "project-media";

  return (
    <article className="project-card">
      <div className={mediaClass} aria-hidden="true">
        {portalImage && !failedImage ? (
          <div className="project-preview">
            <Image
              src={thumbnail.href}
              alt=""
              fill
              sizes="(min-width: 1420px) 550px, (min-width: 551px) 39vw, 78vw"
              onError={() => setFailedImage(true)}
            />
          </div>
        ) : <Layers3 size={48} strokeWidth={1.2} />}
      </div>
      <div className="project-meta">
        <div>
          <p className="index-label">{categoryLabel(project.category)}</p>
          <h3>{title}</h3>
          {description && <p>{description}</p>}
          {stack.length > 0 && (
            <ul className="project-stack" aria-label="Technologies used">
              {stack.map((technology, index) => <li key={`${technology}-${index}`}>{technology === "Next JS" ? "Next.js" : technology}</li>)}
            </ul>
          )}
        </div>
        {link && (
          <a href={link.href} aria-label={demo ? `Visit ${title}` : `View ${title} repository`}>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
