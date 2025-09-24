export type ProjectCover = { src: string; alt: string; type: "image" | "video" };
export type Project = {
  slug: string;
  title: string;
  role: string;
  tags: string[];
  description: string;
  descriptionLong?: string;
  cover: ProjectCover;
  caseStudyUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "poster-a",
    title: "Gradient Posters",
    role: "Designer",
    tags: ["Brand", "Print"],
    description: "Exploration of bold gradients.",
    descriptionLong: "A series of experimental poster designs exploring vibrant gradient combinations and typography. Each piece pushes the boundaries of color theory while maintaining readability and visual impact.",
    cover: { src: "/images/samples/poster-a.svg", alt: "Gradient poster", type: "image", width: 1200, height: 1600 },
    caseStudyUrl: "https://example.com",
  },
  {
    slug: "app-ui",
    title: "Finance App UI",
    role: "Product Design",
    tags: ["UI/UX", "Mobile"],
    description: "High‑contrast dashboard components.",
    descriptionLong: "Redesigned financial dashboard with improved accessibility and user experience. Increased user engagement by 40% through better data visualization and intuitive navigation patterns.",
    cover: { src: "/images/samples/app-ui.svg", alt: "App UI", type: "image", width: 1600, height: 1000 },
    caseStudyUrl: "https://example.com",
  },
  {
    slug: "packaging",
    title: "Tea Packaging",
    role: "Brand",
    tags: ["3D", "Packaging"],
    description: "Pastel packaging system.",
    descriptionLong: "Complete packaging redesign for premium tea brand. Created sustainable, elegant packaging that increased shelf appeal and brand recognition by 60%.",
    cover: { src: "/images/samples/packaging.svg", alt: "Packaging", type: "image", width: 1200, height: 1500 },
    caseStudyUrl: "https://example.com",
  },
  {
    slug: "web-landing",
    title: "Landing Page",
    role: "Web",
    tags: ["Web", "Hero"],
    description: "Vibrant, animated hero.",
    descriptionLong: "High-converting landing page with custom animations and micro-interactions. Achieved 25% higher conversion rates through strategic use of motion and clear value propositions.",
    cover: { src: "/images/samples/landing.svg", alt: "Landing", type: "image", width: 1600, height: 1100 },
    caseStudyUrl: "https://example.com",
  },
  {
    slug: "icons",
    title: "Icon Set",
    role: "Illustration",
    tags: ["Icons"],
    description: "Playful outline icons.",
    descriptionLong: "Comprehensive icon system with 200+ custom illustrations. Designed for scalability across multiple platforms while maintaining visual consistency and brand personality.",
    cover: { src: "/images/samples/icons.svg", alt: "Icons", type: "image", width: 1200, height: 900 },
    caseStudyUrl: "https://example.com",
  },
  {
    slug: "poster-b",
    title: "Typographic Poster",
    role: "Designer",
    tags: ["Type"],
    description: "Variable font experiments.",
    descriptionLong: "Experimental typography project exploring variable fonts and kinetic text. Pushed the boundaries of traditional poster design while maintaining legibility and aesthetic appeal.",
    cover: { src: "/images/samples/poster-b.svg", alt: "Type poster", type: "image", width: 1200, height: 1800 },
    caseStudyUrl: "https://example.com",
  },
  {
    slug: "dash",
    title: "Analytics Dash",
    role: "Product",
    tags: ["UI/UX", "Web"],
    description: "Card‑based analytics.",
    descriptionLong: "Redesigned analytics dashboard with improved data visualization and user workflow. Reduced time-to-insight by 45% through better information architecture and interactive charts.",
    cover: { src: "/images/samples/dash.svg", alt: "Dashboard", type: "image", width: 1600, height: 1200 },
    caseStudyUrl: "https://example.com",
  },
  {
    slug: "brand-kit",
    title: "Brand Kit",
    role: "Brand",
    tags: ["Identity"],
    description: "Logo, color, spacing system.",
    descriptionLong: "Complete brand identity system including logo variations, color palette, typography guidelines, and spacing tokens. Created scalable design system used across 15+ products.",
    cover: { src: "/images/samples/brand.svg", alt: "Brand kit", type: "image", width: 1400, height: 1000 },
    caseStudyUrl: "https://example.com",
  },
];


