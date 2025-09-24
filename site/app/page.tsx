import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Timeline } from "@/components/Timeline";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Section id="work" title="Featured Work">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
        <Section id="about" title="About">
          <p className="max-w-2xl text-balance text-lg">
            Designer-engineer hybrid specializing in playful interfaces, systems thinking, and crisp motion.
          </p>
        </Section>
        <Section id="bio" title="Bio">
          <Timeline
            items={[
              { year: "2019", title: "Graduated", description: "BFA in Interaction Design." },
              { year: "2020", title: "Joined Acme", description: "Shipped design system foundations." },
              { year: "2023", title: "Senior Role", description: "Led flagship product redesign with motion." },
            ]}
          />
        </Section>
        <Section id="contact" title="Contact">
          <ContactForm />
        </Section>
      </main>
      <Footer />
    </>
  );
}
