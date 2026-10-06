"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { education } from "@/data/portfolio";
import { CardSpotlight } from "./ui/CardSpotlight";

export default function Education() {
  return (
    <Section id="education" title="Education and training">
      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((e, idx) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <CardSpotlight className="h-full p-6 transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-semibold text-django dark:text-py-yellow">
                  {e.period}
                </span>
                <span className="h-2 w-2 rounded-full bg-django/40 dark:bg-py-yellow/40" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-ink dark:text-[#E4EFE8]">
                {e.title}
              </h3>
              <p className="mt-1 text-sm opacity-80 font-medium">
                {e.place}
              </p>
            </CardSpotlight>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
