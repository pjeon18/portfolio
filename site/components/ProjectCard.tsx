"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/content/projects";
import { motion } from "framer-motion";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl focus-within:shadow-xl transition-shadow"
      tabIndex={-1}
    >
      <div className="aspect-[16/10] overflow-hidden">
        {project.cover.type === "image" ? (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.04]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
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
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <div className="text-xs text-muted-foreground">{project.role}</div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full border border-border">
              {t}
            </span>
          ))}
        </div>
        {project.caseStudyUrl && (
          <div className="mt-4">
            <Link href={project.caseStudyUrl} target="_blank" className="text-sm font-medium underline underline-offset-4">
              Case Study →
            </Link>
          </div>
        )}
      </div>
    </motion.article>
  );
}


