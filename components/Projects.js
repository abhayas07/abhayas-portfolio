"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { projects } from "@/data/portfolio";
import { CardSpotlight } from "./ui/CardSpotlight";

const rows = [
  ["Problem", "problem"],
  ["Solution", "solution"],
  ["My contribution", "contribution"],
  ["Outcome", "outcome"],
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="h-full"
          >
            <CardSpotlight className="group flex h-full flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <div>
                {/* Top header row with number and arrow */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-django dark:text-py-yellow opacity-75">
                    0{idx + 1} // PROJECT
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-django/20 bg-django/5 text-django transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:border-white/15 dark:bg-white/5 dark:text-py-yellow">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-ink group-hover:text-django dark:text-[#E4EFE8] dark:group-hover:text-py-yellow transition-colors">
                  {p.name}
                </h3>

                <p className="mt-2.5 leading-relaxed opacity-85 text-sm sm:text-base">
                  {p.summary}
                </p>

                {rows.map(([label, key]) =>
                  p[key] ? (
                    <p key={key} className="mt-3 text-sm leading-relaxed">
                      <span className="font-semibold text-django dark:text-py-yellow">{label}: </span>
                      {p[key]}
                    </p>
                  ) : null
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-django/10 dark:border-white/10">
                <ul className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-django/15 bg-django-soft/60 px-2.5 py-1 font-mono text-xs text-django dark:border-white/15 dark:bg-white/10 dark:text-[#E4EFE8] transition-transform duration-200 hover:scale-105"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-django underline underline-offset-4 hover:text-django-deep dark:text-py-yellow dark:hover:text-yellow-300"
                  >
                    <span>View project</span>
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : null}
              </div>
            </CardSpotlight>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
