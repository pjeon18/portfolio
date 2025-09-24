export type Experience = {
  role: string;
  company: string;
  start: string;
  end: string | "Present";
  bullets: string[];
};

export type Education = { school: string; degree: string; year: string };

export const resume = {
  summary:
    "Designer-engineer crafting colorful, user-happy products with crisp motion and measurable outcomes.",
  experience: [
    {
      role: "Senior Product Designer",
      company: "Acme Co",
      start: "2022",
      end: "Present",
      bullets: [
        "Led redesign improving signup conversion by 18% with motion-driven onboarding.",
        "Shipped design system tokens and theming across web, raising velocity 30%.",
      ],
    },
  ] as Experience[],
  education: [{ school: "Design University", degree: "BFA Interaction Design", year: "2019" }] as Education[],
  skills: ["Product Design", "UI Engineering", "Prototyping", "Motion"],
  tools: ["Figma", "Framer", "React", "Next.js", "TypeScript", "Tailwind"],
  links: [{ label: "Website", url: "/" }],
} as const;

export type Resume = typeof resume;

