"use client";
import React from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Spotlight } from "./ui/Spotlight";
import { MagicButton } from "./ui/MagicButton";

// The hero's "response" mirrors how a web back end answers a request.
const lines = [
  { t: <><span className="text-py-yellow font-semibold">GET</span> /abhay</>, d: 0 },
  { t: <><span className="text-emerald-400 font-semibold">200 OK</span> <span className="opacity-60">application/json</span></>, d: 300 },
  { t: "{", d: 600 },
  { t: <>&nbsp;&nbsp;"role": <span className="text-py-yellow">"Full-Stack Developer"</span>,</>, d: 800 },
  { t: <>&nbsp;&nbsp;"back_end": <span className="text-sky-300">["Python", "Django", "Flask"]</span>,</>, d: 1000 },
  { t: <>&nbsp;&nbsp;"front_end": <span className="text-sky-300">["JavaScript", "React", "Bootstrap"]</span>,</>, d: 1200 },
  { t: <>&nbsp;&nbsp;"databases": <span className="text-sky-300">["PostgreSQL", "MySQL", "MongoDB"]</span>,</>, d: 1400 },
  { t: <>&nbsp;&nbsp;"location": <span className="text-py-yellow">"{profile.location}"</span></>, d: 1600 },
  { t: "}", d: 1800 },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Ambient Spotlights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#F2C14E"
        />
        <Spotlight
          className="top-10 -right-20 md:right-10 h-[80vh] w-[50vw]"
          fill="#34D399"
        />
        <Spotlight
          className="top-36 left-1/2 -translate-x-1/2 h-[70vh] w-[60vw]"
          fill="#3776AB"
        />
      </div>

      {/* Grid background with radial mask */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-black/[0.06] dark:bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Status pill */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-django/20 bg-white/60 px-3 py-1 text-xs font-mono backdrop-blur-sm dark:border-white/15 dark:bg-white/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="opacity-80">{profile.name} · Open for opportunities</span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl" aria-label={profile.title}>
            {profile.title.split(" ").map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom" aria-hidden="true">
                <span className="word-up inline-block" style={{ animationDelay: `${i * 120}ms` }}>{w}</span>
              </span>
            ))}
          </h1>

          <p className="mt-3 text-xl font-medium text-django dark:text-py-yellow sm:text-2xl">
            {profile.stackLine}
          </p>

          <p className="mt-6 max-w-md text-lg leading-relaxed opacity-85">
            {profile.positioning}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagicButton
              title="View projects"
              href="#projects"
              icon={
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              }
              position="right"
            />

            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-django/30 px-6 font-medium transition-all duration-200 hover:border-django hover:bg-django/10 dark:border-white/25 dark:hover:border-py-yellow/60 dark:hover:bg-white/10"
            >
              Contact me
            </a>
          </div>
        </motion.div>

        {/* Hero code response window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-xl border border-django/25 bg-django-deep font-mono text-[13px] leading-7 text-[#E4EFE8] shadow-2xl transition-all duration-300 dark:border-white/15 dark:bg-black/40 sm:text-sm hover:shadow-[0_12px_40px_rgba(12,75,51,0.25)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
          aria-hidden="true"
        >
          {/* Window bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-2.5 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="opacity-60 text-xs">response.json</div>
            <span className="text-[10px] uppercase tracking-wider text-emerald-400 opacity-80">HTTP/1.1</span>
          </div>

          <div className="px-5 py-4">
            {lines.map((l, i) => (
              <div key={i} className="line-in" style={{ animationDelay: `${l.d}ms` }}>{l.t}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
