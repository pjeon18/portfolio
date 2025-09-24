import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  // small-change: accent hook via data attribute
  sectionKey?: "work" | "about" | "bio" | "contact";
};

export function Section({ id, title, children, className, sectionKey }: SectionProps) {
  return (
    <section id={id} data-section={sectionKey} className={`py-16 md:py-20 section-surface ${className ?? ""}`} aria-labelledby={`${id}-heading`}>
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-6">
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


