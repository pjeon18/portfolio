"use client";
// small-change: CSS column-based masonry for Featured Work

import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectLightbox } from "@/components/ProjectLightbox";

export default function WorkGridMasonry() {
  return (
    <div className="full-bleed columns-1 sm:columns-2 lg:columns-2 xl:columns-3 gap-8 [column-fill:_balance] px-4 md:px-6">
      {projects.map((p) => (
        <div key={p.slug} className="mb-6 break-inside-avoid">
          <ProjectLightbox project={p} card={<ProjectCard project={p} layout="masonry" />} />
        </div>
      ))}
    </div>
  );
}


