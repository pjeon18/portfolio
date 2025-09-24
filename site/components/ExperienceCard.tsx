"use client";
import { motion } from "framer-motion";

type Item = { role: string; org: string; location?: string; dates?: string; bullets: string[] };

export function ExperienceCard({ item, className = "" }: { item: Item; className?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-sm p-5 md:p-6 ${className}`}
    >
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base md:text-lg font-semibold tracking-tight">
          {item.role} <span className="text-muted-foreground">· {item.org}</span>
        </h3>
        {item.dates ? <span className="text-xs md:text-sm text-muted-foreground">{item.dates}</span> : null}
      </header>
      {item.location ? <div className="mt-1 text-xs text-muted-foreground">{item.location}</div> : null}
      <hr className="my-4 border-border/50" />
      <ul className="list-disc pl-5 space-y-1.5 text-sm leading-relaxed">
        {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </motion.article>
  );
}
