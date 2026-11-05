import Link from "next/link";
import { ArrowUpRight, Boxes, Layers3, Server } from "lucide-react";
import { services } from "@/lib/services";

const groups = [
  { title: "Engineering", icon: Boxes, description: "Build the systems your customers and staff use every day.", services: [services[0], services[1]] },
  { title: "Design & growth", icon: Layers3, description: "Make your product easier to use and your business easier to find.", services: [services[2], services[3]] },
  { title: "Technology operations", icon: Server, description: "Plan your infrastructure and give your team the skills to run it.", services: [services[4], services[5]] },
];

export default function ServicesSection() {
  return (
    <section id="capabilities" className="section capabilities" aria-labelledby="capabilities-heading">
      <div className="shell">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 id="capabilities-heading">One team for design, code, and launch.</h2>
          </div>
          <Link href="/services" className="text-link">All services <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="capability-grid">
          {groups.map(({ title, icon: Icon, description, services: group }, index) => (
            <article key={title} className="capability">
              <div className="capability-symbol"><Icon size={25} strokeWidth={1.6} aria-hidden="true" /><span className="index-label">0{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {group.map(({ name, id }) => (
                  <li key={id}><Link href={`/services#${id}`}>{name} <ArrowUpRight size={15} aria-hidden="true" /></Link></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
