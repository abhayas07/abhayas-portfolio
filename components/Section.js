"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Section({ id, title, children, className }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative mx-auto max-w-5xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20",
        className
      )}
    >
      {title && (
        <div className="mb-8 flex items-center gap-3">
          <span className="h-6 w-1 rounded-full bg-django dark:bg-py-yellow" aria-hidden="true" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>
      )}
      {children}
    </motion.section>
  );
}
