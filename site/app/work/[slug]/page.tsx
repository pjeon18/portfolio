import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/content/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-screen-lg px-4 md:px-6 py-10 md:py-14">
      {/* Back navigation */}
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Work</span>
        </Link>
      </div>

      {/* Project header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{project.role} · {project.tags?.join(" · ")}</p>
      </div>

      {/* Project media */}
      <div className="mb-8 rounded-2xl overflow-hidden border border-border/60 bg-card">
        {project.cover.type === "image" ? (
          <Image 
            src={project.cover.src} 
            alt={project.cover.alt} 
            width={project.cover.width ?? 1600} 
            height={project.cover.height ?? 1200} 
            className="w-full h-auto object-cover" 
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

      {/* Project description */}
      <div className="prose prose-invert max-w-none">
        <p className="text-lg leading-relaxed">{project.descriptionLong ?? project.description}</p>
      </div>
    </main>
  );
}