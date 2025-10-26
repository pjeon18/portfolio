"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

type SectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  // small-change: accent hook via data attribute
  sectionKey?: "work" | "about" | "bio" | "contact";
};

function useFocusBand() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current; 
    if (!el) return;
    // Middle 80% band: trigger when the element intersects that central area
    const io = new IntersectionObserver(
      ([e]) => setActive(e.isIntersecting),
      { root: null, rootMargin: "-10% 0% -10% 0%", threshold: 0.01 }
    );
    io.observe(el); 
    return () => io.disconnect();
  }, []);
  return { ref, active } as const;
}

export function Section({ id, title, children, className, sectionKey }: SectionProps) {
  const { ref, active } = useFocusBand();
  return (
    <section 
      ref={ref} 
      id={id} 
      data-section={sectionKey} 
      className={`section-focus ${!active ? 'section-dim' : ''} py-20 md:py-28 section-surface ${className ?? ""}`} 
      aria-labelledby={`${id}-heading`}
    >
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


