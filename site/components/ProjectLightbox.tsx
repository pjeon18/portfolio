"use client";
// small-change: accessible lightbox for project media

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Project } from "@/content/projects";

export function ProjectLightbox({ card, project }: { card: React.ReactNode; project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{card}</DialogTrigger>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 sm:grid-cols-5">
          <div className="sm:col-span-3">
            <div className="relative w-full max-h-[80vh]">
              <div className="relative aspect-[16/10]">
                {project.cover.type === "image" ? (
                  <Image src={project.cover.src} alt={project.cover.alt} fill sizes="(min-width: 768px) 60vw, 90vw" className="object-contain" />
                ) : (
                  <video className="h-full w-full object-contain" src={project.cover.src} muted autoPlay loop playsInline />
                )}
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 p-1 sm:p-2">
            <p className="text-sm text-muted-foreground">
              {((project as any).descriptionLong as string) ?? project.description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


