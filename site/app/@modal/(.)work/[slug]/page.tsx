"use client";
import { useRouter } from "next/navigation";
import { projects } from "@/content/projects";
import Image from "next/image";
import { ArrowLeft, X } from "lucide-react";

export default function ProjectModal({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4" 
      role="dialog" 
      aria-modal
      onClick={(e) => {
        if (e.target === e.currentTarget) router.back();
      }}
    >
      <div className="relative w-full max-w-4xl rounded-2xl bg-card border border-border/60 shadow-xl overflow-hidden">
        <button 
          onClick={() => router.back()} 
          aria-label="Close" 
          className="absolute right-3 top-3 z-10 rounded-full border border-border/60 bg-background/80 backdrop-blur-sm px-2 py-1 text-xs hover:bg-background transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="max-h-[80vh] overflow-auto">
          {/* Project media */}
          <div className="relative">
            {project.cover.type === "image" ? (
              <Image 
                src={project.cover.src} 
                alt={project.cover.alt} 
                width={project.cover.width ?? 1600} 
                height={project.cover.height ?? 1200} 
                className="w-full h-auto object-contain" 
              />
            ) : (
              <video
                className="w-full h-auto"
                src={project.cover.src}
                controls
                muted
                loop
                playsInline
              />
            )}
          </div>
          
          {/* Project content */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <button 
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Work</span>
              </button>
            </div>
            
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{project.role} · {project.tags?.join(" · ")}</p>
            <p className="text-sm leading-relaxed">{project.descriptionLong ?? project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
