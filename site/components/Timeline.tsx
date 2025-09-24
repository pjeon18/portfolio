"use client";

import { motion } from "framer-motion";

type Item = { year: string; title: string; description: string };

export function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-s border-border">
      {items.map((it, idx) => (
        <motion.li
          key={it.year + it.title}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="ms-6 mb-8"
        >
          <span className="absolute -start-3 mt-1 size-5 rounded-full bg-gradient-to-r from-[var(--color-primary-from)] to-[var(--color-primary-to)]" />
          <div className="text-xs text-muted-foreground">{it.year}</div>
          <h3 className="font-medium">{it.title}</h3>
          <p className="text-sm text-muted-foreground">{it.description}</p>
        </motion.li>
      ))}
    </ol>
  );
}


