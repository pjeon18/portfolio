"use client";
// small-change: theme-colored cursor dot for desktop

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorDot() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    const ok = window.matchMedia("(pointer: fine)").matches;
    if (!ok) return;
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block" style={{ translateX: sx, translateY: sy }}>
      <div className="h-6 w-6 rounded-full opacity-60 will-change-transform" style={{ background: "var(--cursor, var(--accent))", mixBlendMode: "difference" }} />
    </motion.div>
  );
}


