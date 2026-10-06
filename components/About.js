"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { about } from "@/data/portfolio";
import { CardSpotlight } from "./ui/CardSpotlight";

export default function About() {
  return (
    <Section id="about" title="About">
      <CardSpotlight className="relative p-6 sm:p-10">
        {/* Subtle decorative crosshairs inspired by the reference repo */}
        <span className="pointer-events-none absolute -left-2 -top-2 text-xs font-mono text-django/40 dark:text-py-yellow/40">＋</span>
        <span className="pointer-events-none absolute -right-2 -top-2 text-xs font-mono text-django/40 dark:text-py-yellow/40">＋</span>
        <span className="pointer-events-none absolute -left-2 -bottom-2 text-xs font-mono text-django/40 dark:text-py-yellow/40">＋</span>
        <span className="pointer-events-none absolute -right-2 -bottom-2 text-xs font-mono text-django/40 dark:text-py-yellow/40">＋</span>

        <div className="max-w-3xl space-y-5 text-base sm:text-lg leading-relaxed opacity-90">
          {about.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-ink/90 dark:text-[#E4EFE8]/90"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </CardSpotlight>
    </Section>
  );
}
