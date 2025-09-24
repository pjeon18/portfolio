"use client";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">© {year} {site.name}. All rights reserved.</p>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-sm hover:underline">
          Back to top
        </a>
      </div>
    </footer>
  );
}


