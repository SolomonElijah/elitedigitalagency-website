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
import { ArrowRight, ArrowUpRight, RefreshCw } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

// ── Types ────────────────────────────────────────────────────────
interface FeaturedProject {
  id:          string | number;
  title:       string;
  category:    string;
  description: string;
  emoji?:      string;
  gradient?:   string;
  span?:       string;
  tall?:       boolean;
  image_url?:  string;
  outcome?:    string;
  tech?:       string[];
}

// ── Fallback data (shown if API fails) ──────────────────────────
const FALLBACK: FeaturedProject[] = [
  {
    id: 1,
    title:       "FinTech Banking Dashboard",
    category:    "Web Development",
    description: "Real-time analytics platform for a leading micro-finance institution — 10× faster data processing.",
    emoji:       "🏦",
    gradient:    "from-[#0d1b3e] via-[#1a3a6b] to-[rgba(123,92,250,0.4)]",
    span:        "lg:col-span-2",
    tall:        false,
  },
  {
    id: 2,
    title:       "HealthTrack Pro",
    category:    "Mobile App",
    description: "Patient management app with 50k+ downloads across iOS & Android.",
    emoji:       "📱",
    gradient:    "from-[#1a0d2e] to-[rgba(0,229,176,0.25)]",
    span:        "",
    tall:        true,
  },
  {
    id: 3,
    title:       "FashionHub Store",
    category:    "E-Commerce",
    description: "3× revenue growth via redesign, performance tuning & SEO.",
    emoji:       "🛍️",
    gradient:    "from-[#0d2e1a] to-[rgba(0,180,100,0.3)]",
    span:        "",
    tall:        false,
  },
  {
    id: 4,
    title:       "LearnElite LMS",
    category:    "EdTech Platform",
    description: "Online learning platform serving 2,000+ active students.",
    emoji:       "🎓",
    gradient:    "from-[#2e1a0d] to-[rgba(250,150,50,0.3)]",
    span:        "",
    tall:        false,
  },
];

// ── Gradient + emoji pool for API projects missing them ─────────
const GRADIENTS = [
  "from-[#0d1b3e] via-[#1a3a6b] to-[rgba(123,92,250,0.4)]",
  "from-[#1a0d2e] to-[rgba(0,229,176,0.25)]",
  "from-[#0d2e1a] to-[rgba(0,180,100,0.3)]",
  "from-[#2e1a0d] to-[rgba(250,150,50,0.3)]",
  "from-[#1e0d2e] to-[rgba(236,72,153,0.25)]",
  "from-[#0d1e3e] to-[rgba(59,130,246,0.3)]",
];
const EMOJIS = ["🚀", "💡", "🌐", "📊", "🎯", "⚡", "🛠️", "✨"];

function decorateProject(p: FeaturedProject, i: number): FeaturedProject {
  return {
    ...p,
    emoji:    p.emoji    ?? EMOJIS[i % EMOJIS.length],
    gradient: p.gradient ?? GRADIENTS[i % GRADIENTS.length],
    span:     i === 0 ? "lg:col-span-2" : (p.span ?? ""),
    tall:     p.tall     ?? i === 1,
  };
}

// ── Skeleton card ────────────────────────────────────────────────
function SkeletonCard({ wide = false }: { wide?: boolean }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden bg-surface border border-white/[0.06] min-h-[240px] animate-pulse ${wide ? "lg:col-span-2" : ""}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
        <div className="h-2.5 w-16 rounded-full bg-white/[0.08]" />
        <div className="h-4 w-40 rounded-full bg-white/[0.06]" />
        <div className="h-3 w-56 rounded-full bg-white/[0.04]" />
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────
export default function ProjectsPreviewSection() {
  const [projects, setProjects] = useState<FeaturedProject[]>([]);
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
          headers: { "Accept": "application/json" },
          signal:  AbortSignal.timeout(8000),
        }
      );

      if (!res.ok) throw new Error(`API error ${res.status}`);

      const data = await res.json();

      // Support both { data: [...] } and plain array responses
      const raw: FeaturedProject[] = Array.isArray(data)
        ? data
        : Array.isArray(data?.data)
          ? data.data
          : [];

      if (raw.length === 0) throw new Error("Empty response");

      setProjects(raw.slice(0, 4).map(decorateProject));
    } catch (err) {
      console.warn("[ProjectsPreview] API unavailable — using fallback.", err);
      setError(err instanceof Error ? err.message : "Failed to load");
      setProjects(FALLBACK.map(decorateProject));
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
                className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/60 text-xs font-syne transition-colors duration-200 disabled:opacity-40"
                title="Retry loading from API"
              >
                <RefreshCw size={12} className={retrying ? "animate-spin" : ""} />
                {retrying ? "Retrying…" : "Retry"}
              </button>
            )}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-accent text-sm font-syne font-semibold hover:gap-3 transition-all duration-200"
            >
              View All Projects <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>

        {/* Loading — skeleton cards */}
        {loading && (
          <div className="grid lg:grid-cols-3 gap-5">
            <SkeletonCard wide />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}

        {/* Loaded — project cards */}
        {!loading && (
          <>
            {error && (
              <div className="mb-5 px-4 py-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] flex items-center gap-2 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 flex-shrink-0" />
                <p className="text-white/25 text-[0.68rem] font-syne">
                  Showing cached projects · Live data temporarily unavailable
                </p>
              </div>
            )}

            <div className="grid lg:grid-cols-3 gap-5">
              {projects.map(({ id, title, category, description, emoji, gradient, span, tall }, i) => (
                <FadeUp key={id} delay={i * 0.1} className={span}>
                  <div className={`group relative rounded-2xl overflow-hidden cursor-pointer ${tall ? "min-h-[320px]" : "min-h-[240px]"}`}>

                    {/* Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-105`} />
                    <div className="absolute inset-0 grid-bg opacity-20" />

                    {/* Emoji */}
                    <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                      <span className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                        {emoji}
                      </span>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[0.68rem] font-syne font-semibold text-accent uppercase tracking-[0.1em] mb-1.5">
                        {category}
                      </p>
                      <h3 className="font-syne font-bold text-white text-base mb-2">{title}</h3>
                      <p className="text-white/50 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={14} className="text-white" />
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}