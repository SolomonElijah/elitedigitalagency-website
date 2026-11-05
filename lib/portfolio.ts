import { site } from "./site";

export interface Project {
  id: number;
  slug?: string;
  title: string;
  description: string | null;
  category: string;
  thumbnail: string | null;
  demo_url: string | null;
  github_url: string | null;
  tech_stack?: string[] | null;
}

const highlights: Record<string, { title: string; description: string }> = {
  ejccars: {
    title: "Excellent J&C Autos",
    description: "An automotive platform in Abuja for browsing vehicles, requesting pre-orders, and exploring finance.",
  },
  "stylewares-ng": {
    title: "Stylewares NG",
    description: "A mobile commerce application built with React Native and a Laravel backend.",
  },
  "furniture-expert": {
    title: "Ola Expert Furniture",
    description: "A website showcasing custom furniture, cabinetry, and interior solutions in Abuja.",
  },
  "logistics-service": {
    title: "Pacific Logistics Service",
    description: "A website for a logistics provider.",
  },
};

export function projectCopy(project: Project) {
  return (project.slug && highlights[project.slug]) || project;
}

export async function fetchPortfolio(path: string, options?: RequestInit) {
  const response = await fetch(`${site.portalApi}${path}`, {
    ...options,
    headers: { Accept: "application/json" },
  });

  if (!response.ok) throw new Error("Portfolio request failed");
  return response.json();
}
