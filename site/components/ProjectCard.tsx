"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/content/projects";
import { motion } from "framer-motion";

type Props = { project: Project; layout?: "standard" | "masonry" };

export function ProjectCard({ project, layout = "standard" }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl focus-within:shadow-xl transition-shadow"
      tabIndex={-1}
    >
      {/* small-change: larger media aspect */}
      {/* small-change: support masonry natural height */}
      <div className={layout === "masonry" ? "relative overflow-hidden" : "aspect-[16/10] sm:aspect-[16/10] overflow-hidden"}>
        {project.cover.type === "image" ? (
          layout === "masonry" ? (
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={project.cover.width ?? 1600}
              height={project.cover.height ?? 1200}
              className="object-cover w-full h-auto transition-transform duration-500 will-change-transform group-hover:scale-[1.02]"
            />
          ) : (
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.04]"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          )
        ) : (
          <video
            className="h-full w-full object-cover"
            src={project.cover.src}
            muted
            loop
            preload="metadata"
            playsInline
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => e.currentTarget.pause()}
            onFocus={(e) => e.currentTarget.play()}
            onBlur={(e) => e.currentTarget.pause()}
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="font-semibold text-xl">{project.title}</h3>
          <div className="text-sm text-muted-foreground">{project.role}</div>
        </div>
        <p className="text-base text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="text-sm px-3 py-1.5 rounded-full border border-border">
              {t}
            </span>
          ))}
        </div>
        <div>
          <Link href={`/work/${project.slug}`} className="text-sm font-medium underline underline-offset-4 hover:text-foreground transition-colors">
            See more →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}


