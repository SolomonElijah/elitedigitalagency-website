"use client";

import { useEffect, useState } from "react";
import { fetchPortfolio, type Project } from "@/lib/portfolio";
import ProjectCard, { categoryLabel } from "./ProjectCard";

interface Category { category: string; count: number }

function getPortfolio(path: string, signal: AbortSignal) {
  return fetchPortfolio(path, { signal: AbortSignal.any([signal, AbortSignal.timeout(8000)]) });
}

export default function ProjectsGrid({ featured = false }: { featured?: boolean }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<{ projects: Project[]; lastPage: number } | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (featured) return;
    const request = new AbortController();
    getPortfolio("/projects/categories", request.signal).then((data) => {
      if (!request.signal.aborted && Array.isArray(data?.data)) setCategories(data.data);
    }).catch(() => {
      // The unfiltered portfolio still works when categories are unavailable.
    });
    return () => request.abort();
  }, [featured]);

  useEffect(() => {
    const request = new AbortController();
    const query = new URLSearchParams({ page: String(page) });
    if (filter) query.set("category", filter);
    const path = featured ? "/projects/featured" : `/projects?${query}`;

    setResult(null);
    setError(false);
    getPortfolio(path, request.signal).then((data) => {
      if (request.signal.aborted) return;
      const projects: Project[] = Array.isArray(data) ? data : data?.data;
      if (!Array.isArray(projects)) throw new Error("Invalid portfolio response");
      setResult({ projects, lastPage: Number(data?.meta?.last_page) || 1 });
    }).catch(() => {
      if (!request.signal.aborted) setError(true);
    });

    return () => request.abort();
  }, [featured, filter, page, attempt]);

  return (
    <>
      {!featured && categories.length > 0 && (
        <div className="filter-row" role="group" aria-label="Filter projects by category">
          <button type="button" aria-pressed={!filter} onClick={() => { setFilter(""); setPage(1); }}>All projects</button>
          {categories.map(({ category, count }) => (
            <button key={category} type="button" aria-pressed={filter === category} onClick={() => { setFilter(category); setPage(1); }}>
              {categoryLabel(category)} ({count})
            </button>
          ))}
        </div>
      )}
      {error ? (
        <div className="project-status">
          <p role="status">The portfolio is temporarily unavailable.</p>
          <button type="button" className="text-link" onClick={() => setAttempt(attempt + 1)}>Try again</button>
        </div>
      ) : !result ? (
        <p className="project-status" role="status">Loading projects…</p>
      ) : result.projects.length === 0 ? (
        <p className="project-status" role="status">{featured ? "No featured projects are available yet." : "No projects in this category yet."}</p>
      ) : (
        <div className="project-grid">
          {result.projects.map((project) => <ProjectCard key={project.id} project={project} useApiCopy={featured} />)}
        </div>
      )}
      {!featured && result && result.lastPage > 1 && (
        <nav className="pagination" aria-label="Project pages">
          <button className="button button-outline" type="button" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
          <span>Page {page} of {result.lastPage}</span>
          <button className="button button-outline" type="button" disabled={page >= result.lastPage} onClick={() => setPage(page + 1)}>Next</button>
        </nav>
      )}
    </>
  );
}
