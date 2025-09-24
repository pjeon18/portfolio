"use client";

import { resume } from "@/content/resume";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

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

      <div className="mx-auto max-w-screen-md px-4 md:px-6 py-8 md:py-12 print:px-0">
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
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Experience</h2>
          <div className="space-y-4 md:space-y-5">
            {resume.experience.map((exp, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 8 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="rounded-xl border border-border/60 p-4 md:p-5 bg-card"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium text-sm">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground">{exp.dates}</span>
                </div>
                {exp.org && (
                  <p className="text-xs text-muted-foreground mt-1">{exp.org}</p>
                )}
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                    {exp.bullets.map((b, j) => (<li key={j}>{b}</li>))}
                  </ul>
                )}
              </motion.article>
            ))}
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
                  <span className="font-medium">{e.school}</span>
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
