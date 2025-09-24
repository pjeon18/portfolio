"use client";

import { resume } from "@/content/resume";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 print:px-0 print:py-0">
      <div className="flex items-center justify-between gap-4 print:hidden">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">Resume</h1>
        <button
          onClick={() => window.print()}
          className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent/10"
        >
          Print / Download PDF
        </button>
      </div>
      <article className="bg-white text-black print:bg-transparent print:text-black rounded-xl shadow-sm p-6 print:p-0">
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p className="mt-2 text-sm leading-6">{resume.summary}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="mt-2 space-y-4">
            {resume.experience.map((exp) => (
              <div key={exp.company + exp.role}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-medium">
                    {exp.role} · {exp.company}
                  </h3>
                  <div className="text-xs text-neutral-600">
                    {exp.start} – {exp.end}
                  </div>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm leading-6">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-semibold">Education</h2>
            <ul className="mt-2 text-sm leading-6">
              {resume.education.map((e) => (
                <li key={e.school}>
                  {e.degree}, {e.school} ({e.year})
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Skills</h2>
            <p className="mt-2 text-sm leading-6">{resume.skills.join(", ")}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Tools</h2>
            <p className="mt-2 text-sm leading-6">{resume.tools.join(", ")}</p>
          </div>
        </section>
      </article>
    </main>
  );
}


