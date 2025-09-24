import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className ?? ""}`} aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-6xl px-4">
        {title && (
          <h2 id={`${id}-heading`} className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold tracking-tight mb-8">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}


