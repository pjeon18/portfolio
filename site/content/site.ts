export const site = {
  name: "Paul Jeon",
  title: "Product Designer & Front‑End Engineer",
  email: "hello@example.com",
  socials: {
    dribbble: "https://dribbble.com/",
    behance: "https://www.behance.net/",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export type Site = typeof site;

