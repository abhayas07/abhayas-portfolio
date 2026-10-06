"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { experience } from "@/data/portfolio";
import { MovingBorderContainer } from "./ui/MovingBorder";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-6 md:grid-cols-2">
        {experience.map((e, idx) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <MovingBorderContainer
              borderRadius="1rem"
              duration={4000 + idx * 1500}
              className="p-6 sm:p-7"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-django/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-django dark:bg-py-yellow/10 dark:text-py-yellow">
                      <span className="h-1.5 w-1.5 rounded-full bg-django dark:bg-py-yellow animate-pulse" />
                      {e.period}
                    </span>
                    <span className="font-mono text-xs opacity-50">#0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-ink dark:text-[#E4EFE8]">
                    {e.role}
                  </h3>
                  <p className="text-sm font-medium text-django/85 dark:text-emerald-400/90 mt-0.5">
                    @{e.company}
                  </p>

                  {e.points.length > 0 && (
                    <ul className="mt-4 space-y-2 opacity-90 text-sm sm:text-base">
                      {e.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-django dark:bg-py-yellow" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </MovingBorderContainer>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
