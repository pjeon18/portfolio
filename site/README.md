Portfolio site (Next.js App Router + TypeScript) with Tailwind, Framer Motion, shadcn/ui, and lucide-react.

Quick start
```bash
npm install
npm run dev
```

Edit content
- `content/site.ts`: name, title, email, social links
- `content/projects.ts`: array of typed projects
- `content/resume.ts`: summary, experience, education, skills, tools

Pages
- `/` single page with anchors: `/#work`, `/#about`, `/#bio`, `/#contact`
- `/resume` printable resume (Print/Download button)

Fonts
- Inter (body) and Space Grotesk (display) via `next/font`
- To swap display to Sora or Plus Jakarta Sans, replace the import in `app/layout.tsx`.

Theming
- Theme tokens as CSS variables in `app/globals.css` used in gradients
- Light/Dark via `next-themes` with toggle in `components/Nav.tsx`

Animations
- Framer Motion reveals, magnetic CTA in `components/Hero.tsx`
- Reduced motion respected by default transitions

Accessibility
- Skip link, semantic headings, focus rings
