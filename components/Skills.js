"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { skills, softSkills } from "@/data/portfolio";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { CardSpotlight } from "./ui/CardSpotlight";

export default function Skills() {
  // Collect flat list of all primary skills for the moving marquee
  const allTechItems = Array.from(new Set(skills.flatMap((g) => g.items)));

  return (
    <Section id="skills" title="Skills">
      {/* Infinite moving tech banner from reference repo */}
      <div className="mb-10 -mx-5 sm:-mx-8 overflow-hidden">
        <InfiniteMovingCards
          items={allTechItems}
          direction="left"
          speed="normal"
        />
      </div>

      <dl className="grid gap-6 sm:grid-cols-2">
        {skills.map((g, idx) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <CardSpotlight className="h-full p-5 sm:p-6">
              <dt className="mb-3 flex items-center gap-2 font-semibold text-lg text-ink dark:text-[#E4EFE8]">
                <span className="h-2 w-2 rounded-full bg-django dark:bg-py-yellow" />
                {g.group}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="cursor-default rounded-md border border-django/20 bg-white/60 px-3 py-1 text-sm font-medium transition-all duration-200 hover:border-django hover:bg-django-soft/60 hover:scale-105 dark:border-white/15 dark:bg-white/5 dark:text-[#E4EFE8] dark:hover:border-py-yellow/60 dark:hover:bg-white/10"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </CardSpotlight>
          </motion.div>
        ))}
      </dl>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center gap-2 rounded-xl border border-django/15 bg-white/40 p-4 dark:border-white/10 dark:bg-white/5 backdrop-blur-sm"
      >
        <span className="font-semibold text-sm sm:text-base">Working style:</span>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((ss) => (
            <span
              key={ss}
              className="rounded-full bg-django/10 px-3 py-0.5 text-xs font-semibold text-django dark:bg-py-yellow/15 dark:text-py-yellow"
            >
              {ss}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
