"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#bio", label: "Bio" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function Nav() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => setMounted(true), []);
  const current = theme === "system" ? systemTheme : theme;

  const [active, setActive] = useState<string>("/#work");
  useEffect(() => {
    const ids = links.filter(l => l.href.startsWith("/#")).map(l => l.href.replace("/", ""));
    const sections = ids.map(id => document.querySelector<HTMLElement>(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`/#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const indicator = useMemo(() => (
    <motion.div
      layoutId="nav-underline"
      className="h-[5px] rounded-full bg-gradient-to-r from-[var(--color-primary-from)] to-[var(--color-primary-to)]"
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
    />
  ), []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <motion.div className="h-0.5 bg-gradient-to-r from-[var(--color-primary-from)] to-[var(--color-primary-to)]" style={{ scaleX, transformOrigin: "0% 50%" }} />
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold tracking-tight">
          PJ
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href} className="relative">
                <Link href={l.href} className="text-sm font-medium hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-to)] rounded">
                  {l.label}
                </Link>
                {active === l.href && (
                  <div className="absolute -bottom-2.5 left-0 right-0">
                    {indicator}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-to)]"
            onClick={() => setTheme(current === "dark" ? "light" : "dark")}
          >
            {mounted && current === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}


