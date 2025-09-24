import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import WorkGridMasonry from "@/components/WorkGridMasonry";
import { Timeline } from "@/components/Timeline";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        {/* small-change: larger grid and container width */}
        <Section id="work" title="Featured Work" sectionKey="work">
          <WorkGridMasonry />
        </Section>
        <Section id="about" title="About" sectionKey="about">
          <p className="max-w-2xl text-balance text-lg">
            Designer-engineer hybrid specializing in playful interfaces, systems thinking, and crisp motion.
          </p>
        </Section>
        <Section id="bio" title="Bio" sectionKey="bio">
          <Timeline
            items={[
              { year: "2019", title: "Graduated", description: "BFA in Interaction Design." },
              { year: "2020", title: "Joined Acme", description: "Shipped design system foundations." },
              { year: "2023", title: "Senior Role", description: "Led flagship product redesign with motion." },
            ]}
          />
        </Section>
        <Section id="contact" title="Contact" sectionKey="contact">
          <ContactForm />
        </Section>
      </main>
      <Footer />
    </>
  );
}
