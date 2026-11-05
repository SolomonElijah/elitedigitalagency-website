import type { ReactNode } from "react";

export default function PageIntro({ label, title, description, children }: {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="shell">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="intro-copy">{description}</p>
        {children}
      </div>
    </section>
  );
}
