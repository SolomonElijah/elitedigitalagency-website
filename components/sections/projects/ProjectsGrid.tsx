// "use client";

// import { useState } from "react";
// import { ArrowUpRight } from "lucide-react";
// import FadeUp from "@/components/ui/FadeUp";

// const categories = ["All", "Web Dev", "Mobile App", "E-Commerce", "EdTech", "Marketing"];

// const projects = [
//   {
//     title: "FinTech Banking Dashboard",
//     category: "Web Dev",
//     desc: "A real-time analytics and transaction management platform for a leading micro-finance institution. Handles 50k+ daily transactions.",
//     outcome: "10× faster data processing",
//     duration: "12 weeks",
//     tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
//     gradient: "from-[#0d1b3e] via-[#1a3a6b] to-[#2d1b69]",
//     accentColor: "#7b5cfa",
//     emoji: "🏦",
//     size: "large",
//   },
//   {
//     title: "HealthTrack Pro",
//     category: "Mobile App",
//     desc: "Patient management & appointment booking app for a private healthcare chain. 50k+ downloads in first 6 months.",
//     outcome: "50k+ downloads",
//     duration: "16 weeks",
//     tech: ["React Native", "Firebase", "Node.js"],
//     gradient: "from-[#0d2e1a] to-[#1a4a2e]",
//     accentColor: "#00e5b0",
//     emoji: "🏥",
//     size: "medium",
//   },
//   {
//     title: "FashionHub Store",
//     category: "E-Commerce",
//     desc: "Full e-commerce redesign and performance overhaul for a fashion retailer. New UX + SEO drove a 3× revenue increase in 90 days.",
//     outcome: "3× revenue growth",
//     duration: "8 weeks",
//     tech: ["Shopify", "React", "SEO"],
//     gradient: "from-[#2e1a0d] to-[#4a2e1a]",
//     accentColor: "#f59e0b",
//     emoji: "👗",
//     size: "medium",
//   },
//   {
//     title: "LearnElite LMS",
//     category: "EdTech",
//     desc: "A full-featured online learning management system with live classes, quizzes, certificates, and student progress tracking.",
//     outcome: "2,000+ active students",
//     duration: "20 weeks",
//     tech: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
//     gradient: "from-[#1a0d2e] to-[#2d1b4a]",
//     accentColor: "#a78bfa",
//     emoji: "🎓",
//     size: "large",
//   },
//   {
//     title: "AgriConnect Platform",
//     category: "Web Dev",
//     desc: "B2B marketplace connecting farmers directly with buyers and logistics providers across West Africa.",
//     outcome: "1,200+ farmers onboarded",
//     duration: "14 weeks",
//     tech: ["React", "Node.js", "MongoDB", "Maps API"],
//     gradient: "from-[#0d2e10] to-[#1a4a20]",
//     accentColor: "#22c55e",
//     emoji: "🌾",
//     size: "medium",
//   },
//   {
//     title: "PaySwift Mobile App",
//     category: "Mobile App",
//     desc: "Cross-border payment app supporting 8 African currencies. Integrated with major local payment gateways.",
//     outcome: "$2M+ processed monthly",
//     duration: "18 weeks",
//     tech: ["Flutter", "Firebase", "Flutterwave"],
//     gradient: "from-[#0d1e3e] to-[#1a3060]",
//     accentColor: "#3b82f6",
//     emoji: "💸",
//     size: "medium",
//   },
//   {
//     title: "TechBlog SEO Overhaul",
//     category: "Marketing",
//     desc: "Complete SEO strategy and content overhaul for a tech media brand. Grew organic traffic from 8k to 85k monthly visitors.",
//     outcome: "10× organic traffic",
//     duration: "6 months",
//     tech: ["SEMrush", "GA4", "HubSpot", "WordPress"],
//     gradient: "from-[#1e0d2e] to-[#2e1a4a]",
//     accentColor: "#ec4899",
//     emoji: "📊",
//     size: "medium",
//   },
//   {
//     title: "RealEstate Pro",
//     category: "Web Dev",
//     desc: "Property listing and management platform with virtual tour integrations, mortgage calculators, and agent dashboards.",
//     outcome: "500+ active listings",
//     duration: "10 weeks",
//     tech: ["Next.js", "Prisma", "Mapbox", "Stripe"],
//     gradient: "from-[#1e1a0d] to-[#3a2e1a]",
//     accentColor: "#f59e0b",
//     emoji: "🏠",
//     size: "medium",
//   },
//   {
//     title: "FoodieNow Delivery App",
//     category: "Mobile App",
//     desc: "On-demand food delivery app with real-time tracking, multi-restaurant ordering, and driver app.",
//     outcome: "30 min avg delivery time",
//     duration: "22 weeks",
//     tech: ["React Native", "Node.js", "Socket.io", "Stripe"],
//     gradient: "from-[#2e0d0d] to-[#4a1a1a]",
//     accentColor: "#ef4444",
//     emoji: "🍔",
//     size: "medium",
//   },
// ];

// export default function ProjectsGrid() {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const filtered = activeFilter === "All"
//     ? projects
//     : projects.filter((p) => p.category === activeFilter);

//   return (
//     <section className="section-padding bg-surface">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Filter tabs */}
//         <FadeUp>
//           <div className="flex flex-wrap gap-2 mb-10 justify-center">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveFilter(cat)}
//                 className={`text-xs font-syne font-semibold px-4 py-2 rounded-full border transition-all duration-200
//                   ${activeFilter === cat
//                     ? "bg-accent text-black border-accent"
//                     : "border-white/[0.1] text-white/50 hover:border-accent/40 hover:text-accent bg-transparent"
//                   }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </FadeUp>

//         {/* Projects grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {filtered.map((project, i) => (
//             <FadeUp key={project.title} delay={i * 0.07}>
//               <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col min-h-[280px]">

//                 {/* Background */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`} />

//                 {/* Grid overlay */}
//                 <div className="absolute inset-0 grid-bg opacity-15" />

//                 {/* Emoji center */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <span className="text-7xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none">
//                     {project.emoji}
//                   </span>
//                 </div>

//                 {/* Dark overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

//                 {/* Top: category + arrow */}
//                 <div className="relative z-10 flex items-start justify-between p-5">
//                   <span
//                     className="text-[0.65rem] font-syne font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border"
//                     style={{ color: project.accentColor, borderColor: `${project.accentColor}30`, background: `${project.accentColor}10` }}
//                   >
//                     {project.category}
//                   </span>
//                   <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white/20">
//                     <ArrowUpRight size={14} className="text-white" />
//                   </div>
//                 </div>

//                 {/* Bottom: content */}
//                 <div className="relative z-10 mt-auto p-5">
//                   {/* Tech pills */}
//                   <div className="flex flex-wrap gap-1.5 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
//                     {project.tech.map((t) => (
//                       <span key={t} className="text-[0.6rem] px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10">
//                         {t}
//                       </span>
//                     ))}
//                   </div>

//                   <h3 className="font-syne font-bold text-white text-base sm:text-lg mb-2 leading-tight">
//                     {project.title}
//                   </h3>
//                   <p className="text-white/50 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                     {project.desc}
//                   </p>

//                   {/* Outcome badge */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-1.5">
//                       <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.accentColor }} />
//                       <span className="text-[0.7rem] font-syne font-semibold" style={{ color: project.accentColor }}>
//                         {project.outcome}
//                       </span>
//                     </div>
//                     <span className="text-[0.65rem] text-white/30">{project.duration}</span>
//                   </div>
//                 </div>
//               </div>
//             </FadeUp>
//           ))}
//         </div>

//         {/* Empty state */}
//         {filtered.length === 0 && (
//           <div className="text-center py-20">
//             <p className="text-white/30 text-sm">No projects in this category yet.</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
"use client";

// ─────────────────────────────────────────────────────────────────────────────
// ProjectsGrid.tsx
// This component lives on the /projects page.
// It does two things:
//   1. Fetches all categories from the API → builds the filter tabs dynamically
//   2. Fetches all projects from the API → displays them in a filterable grid
//
// API endpoints used:
//   GET https://portal.elitedigitalagency.net/api/v1/projects/categories
//   GET https://portal.elitedigitalagency.net/api/v1/projects
//     └─ supports ?category=web  (we pass this when a filter is selected)
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Loader2 } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

// ─── BASE URL ─────────────────────────────────────────────────────────────────
// Defined once so it's easy to change if the API moves
const API_BASE = "https://portal.elitedigitalagency.net/api/v1";

// ─── TYPESCRIPT TYPES ─────────────────────────────────────────────────────────
// These mirror exactly what the API sends back so TypeScript can help us

// One project from the API
interface Project {
  id:          number;
  title:       string;
  slug:        string;
  description: string;
  thumbnail:   string | null;   // can be null if no image uploaded
  tech_stack:  string[];
  demo_url:    string | null;   // can be null if no live URL
  github_url:  string | null;
  client_name: string;
  category:    string;          // e.g. "web", "mobile"
  featured:    boolean;
  created_at:  string;
}

// One category from the /categories endpoint
interface ApiCategory {
  category: string;  // e.g. "web"
  count:    string;  // comes as string from the API e.g. "3"
}

// What our filter tabs will look like after we process the API data
interface FilterTab {
  key:    string;   // used to filter — matches project.category or "all"
  label:  string;   // displayed in the button e.g. "Web (3)"
}

// ─── VISUAL HELPERS ───────────────────────────────────────────────────────────
// Since the API doesn't send colour/emoji, we map category → visual style

const CATEGORY_STYLE: Record<string, { color: string; emoji: string; gradient: string }> = {
  web:       { color: "#00e5b0", emoji: "🌐", gradient: "from-[#0d1b3e] via-[#1a3a6b] to-[#2d1b69]" },
  mobile:    { color: "#a78bfa", emoji: "📱", gradient: "from-[#1a0d2e] to-[#2d1b4a]"               },
  design:    { color: "#ec4899", emoji: "🎨", gradient: "from-[#2e0d1a] to-[#4a1a2e]"               },
  marketing: { color: "#fbbf24", emoji: "📈", gradient: "from-[#1e1a0d] to-[#3a2e10]"               },
  // fallback for any unknown category
  default:   { color: "#00e5b0", emoji: "🚀", gradient: "from-[#0d2e1a] to-[#1a4a2e]"               },
};

// Helper: get style for a category, fallback to default if unknown
function getStyle(category: string) {
  return CATEGORY_STYLE[category.toLowerCase()] ?? CATEGORY_STYLE.default;
}

// ─── SKELETON CARD ────────────────────────────────────────────────────────────
// Shown while data is loading — gives a pulsing placeholder effect
function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#0d0d1a] border border-white/[0.06] animate-pulse min-h-[280px]">
      {/* Fake image area */}
      <div className="h-44 bg-white/[0.04]" />
      {/* Fake text area */}
      <div className="p-5 space-y-2">
        <div className="h-3 w-20 rounded-full bg-white/[0.06]" />
        <div className="h-4 w-40 rounded-full bg-white/[0.05]" />
        <div className="h-3 w-32 rounded-full bg-white/[0.04]" />
      </div>
    </div>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
// Renders one individual project card
function ProjectCard({ project }: { project: Project }) {
  const { color, emoji, gradient } = getStyle(project.category);
  const hasDemo = !!project.demo_url;

  return (
    // If demo_url exists → link opens in new tab. Otherwise it's just a div.
    <a
      href={project.demo_url ?? "#"}
      target={hasDemo ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden bg-[#0d0d1a] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] h-full flex flex-col"
    >
      {/* ── IMAGE SECTION (top part of card) ────────────────────────── */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 175 }}>

        {/* If thumbnail exists → show it. Otherwise → show gradient + emoji */}
        {project.thumbnail ? (
          <>
            {/* Next.js optimised image — fill the container */}
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay fades image into the dark card background below */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d1a]" />
          </>
        ) : (
          /* No image? Show a branded gradient with a large emoji */
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 select-none">
              {emoji}
            </span>
            {/* Same gradient fade as above for consistency */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d0d1a]" />
          </div>
        )}

        {/* Category pill — always readable, sits on top of image */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="text-[0.62rem] font-syne font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border backdrop-blur-md"
            style={{
              color,
              borderColor: `${color}30`,
              background:  "rgba(8,8,16,0.80)",
            }}
          >
            {project.category}
          </span>
        </div>

        {/* External link icon — appears on hover if demo URL exists */}
        {hasDemo && (
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <ExternalLink size={11} className="text-white/70" />
            </div>
          </div>
        )}
      </div>

      {/* ── TEXT SECTION (bottom part of card) ───────────────────────── */}
      {/* Solid dark background so text is ALWAYS readable regardless of image */}
      <div className="px-5 pt-4 pb-5 bg-[#0d0d1a] flex flex-col flex-1">

        {/* Project title — turns accent colour on hover */}
        <h3 className="font-syne font-bold text-white text-base leading-tight mb-2 capitalize group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description — always visible, clamped to 2 lines */}
        <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Bottom row: client name + tech stack pills */}
        <div className="flex items-center justify-between gap-3 mt-auto">

          {/* Client name */}
          <span className="text-white/25 text-[0.62rem] font-syne uppercase tracking-wider truncate">
            {project.client_name}
          </span>

          {/* Tech stack — show first 2 pills, then "+N more" */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {project.tech_stack.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="text-[0.58rem] font-syne font-semibold px-2 py-0.5 rounded-full border"
                style={{
                  color:       `${color}cc`,
                  borderColor: `${color}25`,
                  background:  `${color}08`,
                }}
              >
                {tech}
              </span>
            ))}
            {/* If more than 2 tech items, show a count */}
            {project.tech_stack.length > 2 && (
              <span className="text-[0.58rem] text-white/25 font-syne">
                +{project.tech_stack.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ProjectsGrid() {

  // --- STATE ---
  // All projects fetched from the API
  const [projects, setProjects] = useState<Project[]>([]);

  // Filter tabs built from the /categories API
  // We always start with "All" as the first tab
  const [tabs, setTabs] = useState<FilterTab[]>([{ key: "all", label: "All" }]);

  // Which filter tab is currently active ("all", "web", "mobile", etc.)
  const [activeFilter, setActiveFilter] = useState("all");

  // Loading state — true while we're waiting for either API call
  const [loading, setLoading] = useState(true);

  // Error state — shown if both API calls fail
  const [error, setError] = useState(false);


  // --- FETCH CATEGORIES (runs once on mount) ---
  // We fetch categories separately so the filter tabs are built from real data
  useEffect(() => {
    fetch(`${API_BASE}/projects/categories`, {
      headers: { Accept: "application/json" },
      signal:  AbortSignal.timeout(8000),
    })
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((json) => {
        // json.data = [{ category: "web", count: "3" }, { category: "mobile", count: "1" }]
        const apiCategories: ApiCategory[] = json?.data ?? [];

        // Build tabs: "All" first, then one tab per API category
        // Label format: "Web (3)" so users know how many are in each category
        const builtTabs: FilterTab[] = [
          { key: "all", label: "All" },
          ...apiCategories.map((c) => ({
            key:   c.category,
            label: `${c.category.charAt(0).toUpperCase() + c.category.slice(1)} (${c.count})`,
          })),
        ];

        setTabs(builtTabs);
      })
      .catch(() => {
        // If categories fail, we just keep the default "All" tab
        // Not a critical failure — projects will still load
        console.warn("[ProjectsGrid] Could not load categories");
      });
  }, []); // empty array = runs once when component mounts


  // --- FETCH PROJECTS (runs when activeFilter changes) ---
  // When user clicks a filter tab, this re-runs with the new category
  useEffect(() => {
    setLoading(true);
    setError(false);

    // Build the URL — add ?category=web if a specific filter is active
    const url = activeFilter === "all"
      ? `${API_BASE}/projects`
      : `${API_BASE}/projects?category=${activeFilter}`;

    fetch(url, {
      headers: { Accept: "application/json" },
      signal:  AbortSignal.timeout(8000),
    })
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then((json) => {
        // json.data = array of projects
        const raw: Project[] = json?.data ?? [];
        setProjects(raw);
      })
      .catch((err) => {
        console.error("[ProjectsGrid] Failed to load projects:", err);
        setError(true);
        setProjects([]); // clear any old results so we show empty state
      })
      .finally(() => {
        setLoading(false);
      });

  }, [activeFilter]); // re-runs every time activeFilter changes


  // ─── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── FILTER TABS ─────────────────────────────────────────────── */}
        {/* Built dynamically from the /categories API */}
        <FadeUp>
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`text-xs font-syne font-semibold px-4 py-2 rounded-full border transition-all duration-200
                  ${activeFilter === tab.key
                    // Active tab: filled with accent colour
                    ? "bg-accent text-black border-accent"
                    // Inactive tab: outlined, faint text
                    : "border-white/[0.1] text-white/50 hover:border-accent/40 hover:text-accent bg-transparent"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* ── LOADING STATE ───────────────────────────────────────────── */}
        {/* Show 6 skeleton cards while API is responding */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* ── ERROR STATE ─────────────────────────────────────────────── */}
        {/* Only shown if the API call actually failed (not just empty) */}
        {!loading && error && (
          <div className="text-center py-20">
            <p className="text-white/30 text-sm mb-3">Could not load projects right now.</p>
            {/* Retry button — re-triggers the useEffect by updating the filter state */}
            <button
              onClick={() => setActiveFilter((f) => f)} // re-set same value to re-trigger effect
              className="text-accent text-xs font-syne underline hover:no-underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* ── PROJECTS GRID ───────────────────────────────────────────── */}
        {/* Only shown when not loading and no error */}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              // FadeUp staggered by index so cards animate in one by one
              <FadeUp key={project.id} delay={i * 0.07}>
                <ProjectCard project={project} />
              </FadeUp>
            ))}
          </div>
        )}

        {/* ── EMPTY STATE ─────────────────────────────────────────────── */}
        {/* Shown when API returned successfully but 0 projects matched */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30 text-sm">No projects in this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}
