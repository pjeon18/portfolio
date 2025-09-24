"use client";

import { resume } from "@/content/resume";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { ExperienceCard } from "@/components/ExperienceCard";

export default function ResumePage() {
  return (
    <main>
      {/* small-change: sticky back bar to home */}
      <div className="sticky top-0 z-40 backdrop-blur border-b border-border/50 bg-background/70 print:hidden">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-6 py-2 flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/10 transition-colors" aria-label="Back to home">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <span className="text-sm text-muted-foreground">Resume</span>
        </div>
      </div>

      <div className="mx-auto max-w-screen-lg px-4 md:px-6 py-8 md:py-10 print:px-0">
        <div className="flex items-center justify-between gap-4 print:hidden mb-8">
          <h1 className="font-[family-name:var(--font-sora)] text-3xl font-bold">Resume</h1>
          <button
            onClick={() => window.print()}
            className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent/10"
          >
            Print / Download PDF
          </button>
        </div>
        
        {/* small-change: resume content with animations and new data structure */}
        <article className="bg-white text-black print:bg-transparent print:text-black rounded-xl shadow-sm p-6 print:p-0">
        {/* Profile Header */}
        <motion.header 
          initial={{ opacity: 0, y: 8 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.4 }}
          className="text-center md:text-left mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)]">
            {resume.profile.name}
          </h1>
          <p className="mt-1 text-muted-foreground">
            {resume.profile.location} · {resume.profile.email}
          </p>
        </motion.header>

        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0, y: 8 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.4 }}
          className="py-8 md:py-10"
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Experience</h2>

          {/* small-change: timeline wrapper with rail and dots */}
          <div className="relative mt-4 pl-5 md:pl-6">
            {/* rail */}
            <div aria-hidden className="timeline-rail absolute left-2 md:left-2.5 top-0 bottom-0 w-px bg-border/70" />
            <div className="grid gap-5">
              {resume.experience.map((x, i) => (
                <div key={i} className="relative">
                  {/* dot */}
                  <div aria-hidden className="timeline-dot absolute -left-0.5 md:-left-0.5 top-3 h-2.5 w-2.5 rounded-full bg-primary/90 ring-2 ring-background" />
                  <ExperienceCard item={x} className="ml-2 md:ml-3" />
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          initial={{ opacity: 0, y: 8 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.4 }}
          className="py-8 md:py-10"
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Education</h2>
          <div className="space-y-4 md:space-y-5">
            {resume.education.map((e, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 8 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="rounded-xl border border-border/60 p-4 md:p-5 bg-card"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-base md:text-lg font-semibold">{e.school}</span>
                  <span className="text-xs text-muted-foreground">{e.dates}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{e.degree}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0, y: 8 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.4 }}
          className="py-8 md:py-10"
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Skills</h2>
          <motion.div 
            initial={{ opacity: 0, y: 8 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-border/60 p-4 md:p-5 bg-card"
          >
            <p className="text-sm leading-6">{resume.skills.join(" · ")}</p>
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        {resume.certifications && resume.certifications.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 8 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4 }}
            className="py-8 md:py-10"
          >
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Certifications</h2>
            <motion.div 
              initial={{ opacity: 0, y: 8 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-border/60 p-4 md:p-5 bg-card"
            >
              <ul className="list-disc pl-5 space-y-1 text-sm leading-6">
                {resume.certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            </motion.div>
          </motion.section>
        )}

        {/* Awards Section */}
        {resume.awards && resume.awards.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 8 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4 }}
            className="py-8 md:py-10"
          >
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Awards</h2>
            <motion.div 
              initial={{ opacity: 0, y: 8 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-border/60 p-4 md:p-5 bg-card"
            >
              <ul className="list-disc pl-5 space-y-1 text-sm leading-6">
                {resume.awards.map((award, i) => (
                  <li key={i}>{award}</li>
                ))}
              </ul>
            </motion.div>
          </motion.section>
        )}

        {/* Activities Section */}
        {resume.activities && resume.activities.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 8 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4 }}
            className="py-8 md:py-10"
          >
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Activities</h2>
            <motion.div 
              initial={{ opacity: 0, y: 8 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-border/60 p-4 md:p-5 bg-card"
            >
              <ul className="list-disc pl-5 space-y-1 text-sm leading-6">
                {resume.activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </motion.div>
          </motion.section>
        )}

        {/* Back to Home Link at Bottom */}
        <div className="print:hidden mt-8 pt-6 border-t border-border/50">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
        </article>
      </div>
    </main>
  );
}
