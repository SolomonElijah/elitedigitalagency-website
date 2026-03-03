// "use client";

// import Link from "next/link";
// import { ArrowRight, ArrowUpRight } from "lucide-react";
// import FadeUp from "@/components/ui/FadeUp";
// import SectionLabel from "@/components/ui/SectionLabel";

// const projects = [
//   {
//     title: "FinTech Banking Dashboard",
//     category: "Web Development",
//     desc: "Real-time analytics platform for a leading micro-finance institution — 10x faster data processing.",
//     emoji: "🏦",
//     gradient: "from-[#0d1b3e] via-[#1a3a6b] to-[rgba(123,92,250,0.4)]",
//     span: "lg:col-span-2",
//     tall: false,
//   },
//   {
//     title: "HealthTrack Pro",
//     category: "Mobile App",
//     desc: "Patient management app with 50k+ downloads across iOS & Android.",
//     emoji: "📱",
//     gradient: "from-[#1a0d2e] to-[rgba(0,229,176,0.25)]",
//     span: "",
//     tall: true,
//   },
//   {
//     title: "FashionHub Store",
//     category: "E-Commerce",
//     desc: "3× revenue growth via redesign, performance tuning & SEO.",
//     emoji: "🛍️",
//     gradient: "from-[#0d2e1a] to-[rgba(0,180,100,0.3)]",
//     span: "",
//     tall: false,
//   },
//   {
//     title: "LearnElite LMS",
//     category: "EdTech Platform",
//     desc: "Online learning platform serving 2,000+ active students.",
//     emoji: "🎓",
//     gradient: "from-[#2e1a0d] to-[rgba(250,150,50,0.3)]",
//     span: "",
//     tall: false,
//   },
// ];

// export default function ProjectsPreviewSection() {
//   return (
//     <section className="section-padding bg-surface">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
//           <div>
//             <FadeUp><SectionLabel>Our Work</SectionLabel></FadeUp>
//             <FadeUp delay={0.1}>
//               <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
//                 Featured Projects
//               </h2>
//             </FadeUp>
//           </div>
//           <FadeUp delay={0.2}>
//             <Link href="/projects" className="inline-flex items-center gap-2 text-accent text-sm font-syne font-semibold hover:gap-3 transition-all duration-200">
//               View All Projects <ArrowRight size={15} />
//             </Link>
//           </FadeUp>
//         </div>

//         {/* Projects grid */}
//         <div className="grid lg:grid-cols-3 gap-5">
//           {projects.map(({ title, category, desc, emoji, gradient, span, tall }, i) => (
//             <FadeUp key={title} delay={i * 0.1} className={span}>
//               <div
//                 className={`group relative rounded-2xl overflow-hidden cursor-pointer ${tall ? "min-h-[320px]" : "min-h-[240px]"}`}
//               >
//                 {/* Background */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-105`} />

//                 {/* Subtle grid on card */}
//                 <div className="absolute inset-0 grid-bg opacity-20" />

//                 {/* Emoji / visual */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <span className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
//                     {emoji}
//                   </span>
//                 </div>

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//                 {/* Content */}
//                 <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
//                   <p className="text-[0.68rem] font-syne font-semibold text-accent uppercase tracking-[0.1em] mb-1.5">
//                     {category}
//                   </p>
//                   <h3 className="font-syne font-bold text-white text-base mb-2">{title}</h3>
//                   <p className="text-white/50 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     {desc}
//                   </p>
//                 </div>

//                 {/* Arrow icon */}
//                 <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <ArrowUpRight size={14} className="text-white" />
//                 </div>
//               </div>
//             </FadeUp>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

// ─────────────────────────────────────────────────────────────────────────────
// ProjectsPreviewSection.tsx
// Home page "Featured Projects" section.
// Fetches from: GET /api/v1/projects/featured
// All cards are equal size — no bento/wide cards
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

// ─── API TYPE ─────────────────────────────────────────────────────────────────
interface ApiProject {
  id:          number;
  title:       string;
  slug:        string;
  description: string;
  thumbnail:   string | null;
  tech_stack:  string[];
  demo_url:    string | null;
  github_url:  string | null;
  client_name: string;
  category:    string;
  featured:    boolean;
  created_at:  string;
}

// ─── CATEGORY → COLOUR & LABEL ───────────────────────────────────────────────
const CATEGORY_META: Record<string, { label: string; color: string }> = {
  web:       { label: "Web Development", color: "#00e5b0" },
  mobile:    { label: "Mobile App",      color: "#a78bfa" },
  design:    { label: "UI/UX Design",    color: "#ec4899" },
  marketing: { label: "Marketing",       color: "#fbbf24" },
  default:   { label: "Project",         color: "#00e5b0" },
};
function getMeta(category: string) {
  return CATEGORY_META[category.toLowerCase()] ?? CATEGORY_META.default;
}

// ─── GRADIENT FALLBACKS (used when thumbnail is null) ────────────────────────
const GRADIENTS = [
  "from-[#0d1b3e] via-[#1a3a6b] to-[#2d1b69]",
  "from-[#1a0d2e] to-[#0d2e2a]",
  "from-[#0d2e1a] to-[#1a3a2e]",
  "from-[#2e1a0d] to-[#3a2010]",
];
const EMOJIS = ["🌐", "📱", "🛍️", "🎓"];

// ─── FALLBACK DATA (shown if API is unreachable) ──────────────────────────────
const FALLBACK: ApiProject[] = [
  { id: 1, title: "FinTech Banking Dashboard", slug: "fintech",     description: "Real-time analytics platform — 10× faster data processing.",  thumbnail: null, tech_stack: ["Next.js", "Node.js"],       demo_url: null, github_url: null, client_name: "MicroBank",   category: "web",    featured: true, created_at: "" },
  { id: 2, title: "HealthTrack Pro",           slug: "healthtrack", description: "Patient management app with 50k+ downloads on iOS & Android.", thumbnail: null, tech_stack: ["React Native", "Firebase"], demo_url: null, github_url: null, client_name: "HealthFirst", category: "mobile", featured: true, created_at: "" },
  { id: 3, title: "FashionHub Store",          slug: "fashionhub",  description: "3× revenue growth via redesign, performance tuning & SEO.",    thumbnail: null, tech_stack: ["Shopify", "React"],         demo_url: null, github_url: null, client_name: "FashionHub",  category: "web",    featured: true, created_at: "" },
  { id: 4, title: "LearnElite LMS",            slug: "learnelite",  description: "Online learning platform serving 2,000+ active students.",     thumbnail: null, tech_stack: ["Next.js", "Stripe"],        demo_url: null, github_url: null, client_name: "LearnElite",  category: "web",    featured: true, created_at: "" },
];

// ─── SKELETON CARD ────────────────────────────────────────────────────────────
// Pulsing placeholder shown while the API is loading
// No wide variant needed — all cards are equal size now
function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#0d0d1a] border border-white/[0.06] animate-pulse">
      {/* Fake image area */}
      <div className="h-44 bg-white/[0.04]" />
      {/* Fake text area */}
      <div className="p-5 space-y-2.5">
        <div className="h-2.5 w-20 rounded-full bg-white/[0.06]" />
        <div className="h-4 w-40 rounded-full bg-white/[0.05]" />
        <div className="h-3 w-32 rounded-full bg-white/[0.04]" />
      </div>
    </div>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
// Each card is identical in size — image on top, text below
// index is used only for gradient/emoji fallback cycling, NOT for sizing
function ProjectCard({ project, index }: { project: ApiProject; index: number }) {
  const { label, color } = getMeta(project.category);
  const isExternal = !!project.demo_url;
  const href = project.demo_url ?? "#";

  return (
    // ↓ No className for col-span here — all cards take exactly 1 column
    <FadeUp delay={index * 0.1}>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="group block rounded-2xl overflow-hidden bg-[#0d0d1a] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
      >
        {/* ── IMAGE SECTION ────────────────────────────────────────────── */}
        {/* Fixed height on all cards — keeps the grid perfectly uniform */}
        <div className="relative overflow-hidden h-44">

          {project.thumbnail ? (
            <>
              {/* Real thumbnail from the API */}
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient fade at bottom — seams image into dark card bg */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d1a]" />
            </>
          ) : (
            /* No image — show branded gradient + emoji */
            <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} flex items-center justify-center`}>
              <span className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 select-none">
                {EMOJIS[index % EMOJIS.length]}
              </span>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d0d1a]" />
            </div>
          )}

          {/* Category pill — top left, always readable over any image */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className="text-[0.62rem] font-syne font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border backdrop-blur-md"
              style={{
                color,
                borderColor: `${color}35`,
                background:  "rgba(8,8,16,0.80)",
              }}
            >
              {label}
            </span>
          </div>

          {/* External link icon — top right, appears on hover */}
          {isExternal && (
            <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <ExternalLink size={11} className="text-white/70" />
              </div>
            </div>
          )}
        </div>

        {/* ── TEXT SECTION ─────────────────────────────────────────────── */}
        {/* Solid dark bg — text is always readable regardless of the image */}
        <div className="px-5 pt-4 pb-5 bg-[#0d0d1a]">

          {/* Project title */}
          <h3 className="font-syne font-bold text-white text-base leading-tight mb-1.5 capitalize group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>

          {/* Description — clamped to 2 lines so all cards stay the same height */}
          <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Bottom row: client name (left) + tech pills (right) */}
          <div className="flex items-center justify-between gap-3">

            <span className="text-white/25 text-[0.62rem] font-syne uppercase tracking-wider truncate">
              {project.client_name}
            </span>

            {/* Show first 2 tech items, then "+N" if there are more */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {project.tech_stack.slice(0, 2).map((t) => (
                <span
                  key={t}
                  className="text-[0.58rem] font-syne font-semibold px-2 py-0.5 rounded-full border"
                  style={{
                    color:       `${color}cc`,
                    borderColor: `${color}25`,
                    background:  `${color}08`,
                  }}
                >
                  {t}
                </span>
              ))}
              {project.tech_stack.length > 2 && (
                <span className="text-[0.58rem] text-white/25 font-syne">
                  +{project.tech_stack.length - 2}
                </span>
              )}
            </div>
          </div>
        </div>
      </a>
    </FadeUp>
  );
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────
export default function ProjectsPreviewSection() {
  const [projects, setProjects] = useState<ApiProject[]>([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(false);

  useEffect(() => {
    fetch("https://portal.elitedigitalagency.net/api/v1/projects/featured", {
      headers: { Accept: "application/json" },
      signal:  AbortSignal.timeout(8000),
    })
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((json) => {
        const raw: ApiProject[] = Array.isArray(json) ? json : Array.isArray(json?.data) ? json.data : [];
        // Use API data if we got any, otherwise fall back to hardcoded data
        setProjects(raw.length ? raw.slice(0, 4) : FALLBACK);
      })
      .catch(() => {
        setError(true);
        setProjects(FALLBACK);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <FadeUp><SectionLabel>Our Work</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl">
                Featured Projects
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-accent text-sm font-syne font-semibold hover:gap-3 transition-all duration-200"
            >
              View All Projects <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>

        {/* Fallback notice — only shows if API failed */}
        {error && !loading && (
          <div className="mb-6 px-4 py-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] flex items-center gap-2 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50 flex-shrink-0" />
            <p className="text-white/20 text-[0.67rem] font-syne">
              Showing cached projects · Live data temporarily unavailable
            </p>
          </div>
        )}

        {/* Loading — 4 skeleton cards in a uniform grid */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* ↑ lg:grid-cols-4 so 4 skeletons sit side by side on desktop */}
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}

        {/* Loaded — uniform 4-column grid, no bento, no wide cards */}
        {!loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* ↑ All 4 cards equal width. Change to lg:grid-cols-3 if you prefer 3 columns */}
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}