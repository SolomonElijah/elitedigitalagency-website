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

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, RefreshCw } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

// ── API shape ────────────────────────────────────────────────────
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

// ── Category → visual mapping ────────────────────────────────────
const CATEGORY_STYLE: Record<string, { gradient: string; emoji: string; label: string }> = {
  web:      { gradient: "from-[#0d1b3e] via-[#1a3a6b] to-[rgba(123,92,250,0.35)]", emoji: "🌐", label: "Web Development" },
  mobile:   { gradient: "from-[#1a0d2e] to-[rgba(0,229,176,0.25)]",                emoji: "📱", label: "Mobile App" },
  design:   { gradient: "from-[#2e0d1a] to-[rgba(236,72,153,0.25)]",               emoji: "🎨", label: "UI/UX Design" },
  marketing:{ gradient: "from-[#1e1a0d] to-[rgba(250,180,50,0.3)]",               emoji: "📈", label: "Digital Marketing" },
  default:  { gradient: "from-[#0d2e1a] to-[rgba(0,180,100,0.3)]",                emoji: "🚀", label: "Project" },
};

function getCategoryStyle(category: string) {
  return CATEGORY_STYLE[category.toLowerCase()] ?? CATEGORY_STYLE.default;
}

// ── Fallback data ────────────────────────────────────────────────
const FALLBACK: ApiProject[] = [
  { id: 1, title: "FinTech Banking Dashboard", slug: "fintech-banking",  description: "Real-time analytics platform — 10× faster data processing.",     thumbnail: null, tech_stack: ["Next.js","Node.js","PostgreSQL"],    demo_url: null, github_url: null, client_name: "MicroBank",   category: "web",    featured: true, created_at: "" },
  { id: 2, title: "HealthTrack Pro",           slug: "healthtrack-pro",  description: "Patient management app with 50k+ downloads on iOS & Android.",    thumbnail: null, tech_stack: ["React Native","Firebase"],            demo_url: null, github_url: null, client_name: "HealthFirst", category: "mobile", featured: true, created_at: "" },
  { id: 3, title: "FashionHub Store",          slug: "fashionhub",       description: "3× revenue growth via redesign, performance tuning & SEO.",       thumbnail: null, tech_stack: ["Shopify","React"],                    demo_url: null, github_url: null, client_name: "FashionHub", category: "web",    featured: true, created_at: "" },
  { id: 4, title: "LearnElite LMS",            slug: "learnelite-lms",   description: "Online learning platform serving 2,000+ active students.",        thumbnail: null, tech_stack: ["Next.js","Stripe","AWS"],             demo_url: null, github_url: null, client_name: "LearnElite", category: "web",    featured: true, created_at: "" },
];

// ── Skeleton card ────────────────────────────────────────────────
function SkeletonCard({ wide = false }: { wide?: boolean }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden bg-surface border border-white/[0.06] min-h-[260px] animate-pulse ${wide ? "lg:col-span-2" : ""}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
        <div className="h-2.5 w-20 rounded-full bg-white/[0.08]" />
        <div className="h-4 w-44 rounded-full bg-white/[0.06]" />
        <div className="h-3 w-32 rounded-full bg-white/[0.04]" />
      </div>
    </div>
  );
}

// ── Project card ─────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: ApiProject; index: number }) {
  const { gradient, emoji, label } = getCategoryStyle(project.category);
  const isWide = index === 0;
  const isTall = index === 1;
  const href   = project.demo_url ?? "#";

  return (
    <FadeUp delay={index * 0.1} className={isWide ? "lg:col-span-2" : ""}>
      <a
        href={href}
        target={project.demo_url ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={`group relative rounded-2xl overflow-hidden flex flex-col ${isTall ? "min-h-[320px]" : "min-h-[260px]"}`}
      >
        {/* Background: real thumbnail or gradient fallback */}
        {project.thumbnail ? (
          <>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-105`} />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
              <span className="text-7xl opacity-15 group-hover:opacity-25 transition-opacity duration-300">{emoji}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          </>
        )}

        {/* Top: category pill + arrow */}
        <div className="relative z-10 flex items-start justify-between p-4">
          <span className="text-[0.65rem] font-syne font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-accent">
            {label}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight size={14} className="text-white" />
          </div>
        </div>

        {/* Bottom: content */}
        <div className="relative z-10 mt-auto p-5">
          {/* Tech stack pills — on hover */}
          <div className="flex flex-wrap gap-1.5 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            {project.tech_stack.slice(0, 4).map((t) => (
              <span key={t} className="text-[0.6rem] px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10">
                {t}
              </span>
            ))}
          </div>

          <h3 className="font-syne font-bold text-white text-base sm:text-lg mb-1 leading-tight capitalize">
            {project.title}
          </h3>

          <p className="text-white/40 text-xs mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <p className="text-white/30 text-[0.65rem] font-syne uppercase tracking-wider">
            {project.client_name}
          </p>
        </div>
      </a>
    </FadeUp>
  );
}

// ── Main section ─────────────────────────────────────────────────
export default function ProjectsPreviewSection() {
  const [projects, setProjects] = useState<ApiProject[]>([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState<string | null>(null);
  const [retrying, setRetrying] = useState(false);

  const fetchProjects = async (isRetry = false) => {
    if (isRetry) setRetrying(true);
    setError(null);

    try {
      const res = await fetch(
        "https://portal.elitedigitalagency.net/api/v1/projects/featured",
        {
          headers: { Accept: "application/json" },
          signal:  AbortSignal.timeout(8000),
        }
      );
      if (!res.ok) throw new Error(`API ${res.status}`);

      const json = await res.json();
      const raw: ApiProject[] = Array.isArray(json) ? json : Array.isArray(json?.data) ? json.data : [];
      if (raw.length === 0) throw new Error("Empty");

      setProjects(raw.slice(0, 4));
    } catch (err) {
      console.warn("[ProjectsPreview] using fallback –", err);
      setError("unavailable");
      setProjects(FALLBACK);
    } finally {
      setLoading(false);
      setRetrying(false);
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeUp><SectionLabel>Our Work</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl">
                Featured Projects
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2} className="flex items-center gap-4">
            {error && !loading && (
              <button
                onClick={() => fetchProjects(true)}
                disabled={retrying}
                className="inline-flex items-center gap-1.5 text-white/25 hover:text-white/50 text-xs font-syne transition-colors disabled:opacity-40"
              >
                <RefreshCw size={12} className={retrying ? "animate-spin" : ""} />
                {retrying ? "Retrying…" : "Retry"}
              </button>
            )}
            <Link href="/projects" className="inline-flex items-center gap-2 text-accent text-sm font-syne font-semibold hover:gap-3 transition-all duration-200">
              View All Projects <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid lg:grid-cols-3 gap-5">
            <SkeletonCard wide /><SkeletonCard /><SkeletonCard /><SkeletonCard />
          </div>
        )}

        {/* Loaded */}
        {!loading && (
          <>
            {error && (
              <div className="mb-6 px-4 py-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] flex items-center gap-2 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50 flex-shrink-0" />
                <p className="text-white/20 text-[0.67rem] font-syne">
                  Showing cached projects · Live data temporarily unavailable
                </p>
              </div>
            )}
            <div className="grid lg:grid-cols-3 gap-5">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}