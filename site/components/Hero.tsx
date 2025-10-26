"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLButtonElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 300, damping: 30 });
  const sy = useSpring(my, { stiffness: 300, damping: 30 });
  const translate = useTransform([sx, sy], ([x, y]) => `translate(${x}px, ${y}px)`);

  function onMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mx.set(x * 0.15);
    my.set(y * 0.15);
  }

  function onMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 80]);

  return (
    <div className="relative overflow-hidden">
      <motion.div style={{ y: parallaxY }} className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,hsl(192_95%_45%/.25),transparent_60%),linear-gradient(135deg,var(--color-primary-from),var(--color-primary-to))] opacity-90" />
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 min-h-screen flex items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl font-extrabold leading-[1.2] md:leading-[1.25] tracking-tight text-white drop-shadow-sm"
        >
          Designing colorful,
          <br /> user‑happy products.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/90"
        >
          I craft playful interfaces that ship — with business impact and a little sparkle.
        </motion.p>
        <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
          <motion.button
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ transform: translate }}
            className="rounded-full px-6 py-3 text-base font-semibold bg-white text-black shadow-lg shadow-black/10 hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
            <a href="#work">View Work</a>
          </motion.button>
          <Link
            href="/resume"
            className="rounded-full px-6 py-3 text-base font-semibold border border-white/60 text-white/95 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Get Resume
          </Link>
        </div>
      </div>
    </div>
  );
}


