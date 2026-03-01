import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-accent font-syne font-semibold",
        "text-[0.7rem] tracking-[0.16em] uppercase mb-3",
        className
      )}
    >
      <span className="w-7 h-px bg-accent" />
      {children}
    </div>
  );
}
