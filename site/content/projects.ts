export type ProjectCover = { src: string; alt: string; type: "image" | "video" };
export type Project = {
  slug: string;
  title: string;
  role: string;
  tags: string[];
  description: string;
  cover: ProjectCover;
  caseStudyUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "motion-preview",
    title: "Motion Preview",
    role: "Product Designer",
    tags: ["Prototype", "Micro‑interactions", "Video"],
    description: "Quick micro‑interaction prototype; hover to preview the loop.",
    cover: {
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      alt: "Motion prototype preview",
      type: "video",
    },
    caseStudyUrl: "https://example.com",
  },
  {
    slug: "color-mixer",
    title: "Color Mixer App",
    role: "Product Designer",
    tags: ["UI/UX", "Prototyping", "Mobile"],
    description:
      "Playful yet practical mixer for artists; shipped with 25% faster palette creation.",
    cover: { src: "/images/color-mixer.jpg", alt: "Color Mixer UI", type: "image" },
    caseStudyUrl: "https://example.com",
  },
  {
    slug: "dash-analytics",
    title: "Dash Analytics",
    role: "Designer • Engineer",
    tags: ["Design System", "Web App", "Motion"],
    description: "Executive dashboard with crisp motion; time-to-insight improved by 32%.",
    cover: { src: "/images/placeholder-1.svg", alt: "Analytics dashboard", type: "image" },
    caseStudyUrl: "https://example.com",
  },
  {
    slug: "shop-play",
    title: "Shop Play",
    role: "Front‑End Engineer",
    tags: ["E‑commerce", "A/B Testing", "Performance"],
    description: "Playful, performant storefront. +14% CTR via iterative micro‑interactions.",
    cover: { src: "/images/placeholder-2.svg", alt: "E‑commerce UI", type: "image" },
    caseStudyUrl: "https://example.com",
  },
];


