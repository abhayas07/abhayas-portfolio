"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { profile } from "@/data/portfolio";
import { CardSpotlight } from "./ui/CardSpotlight";
import { MagicButton } from "./ui/MagicButton";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, isEmail: true },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: "LinkedIn", value: "abhay-a-s", href: profile.linkedin },
    profile.github && { label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github },
    profile.resume && { label: "Resume", value: "Download PDF", href: profile.resume },
  ].filter(Boolean);

  return (
    <Section id="contact" title="Contact">
      <CardSpotlight className="p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-5 items-start">
          <div className="lg:col-span-3">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink dark:text-[#E4EFE8]">
              Let's build something together
            </h3>
            <p className="mt-3 max-w-xl text-base sm:text-lg leading-relaxed opacity-90">
              I'm looking for a junior full-stack developer role. Email is the fastest way to reach me.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <MagicButton
                title="Send an email"
                href={`mailto:${profile.email}`}
                icon={
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                position="right"
              />

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-django/25 bg-white/70 px-5 text-sm font-medium transition-all duration-200 hover:border-django hover:bg-django-soft/40 dark:border-white/20 dark:bg-white/5 dark:hover:border-py-yellow/60 dark:hover:bg-white/10"
              >
                {copied ? (
                  <>
                    <svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-xl border border-django/10 bg-white/40 p-5 dark:border-white/10 dark:bg-black/20 backdrop-blur-sm">
            <span className="font-mono text-xs font-semibold text-django dark:text-py-yellow uppercase tracking-wider">
              Direct Channels
            </span>
            <ul className="mt-4 space-y-3.5 text-sm">
              {links.map((l) => (
                <li key={l.label} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-django/5 pb-2 dark:border-white/5">
                  <span className="font-medium opacity-65">{l.label}</span>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="font-medium text-django hover:underline underline-offset-4 dark:text-py-yellow dark:hover:text-yellow-300 transition-colors"
                  >
                    {l.value}
                  </a>
                </li>
              ))}
              <li className="flex flex-wrap items-baseline justify-between gap-2 pt-1">
                <span className="font-medium opacity-65">Location</span>
                <span className="font-medium">{profile.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </CardSpotlight>
    </Section>
  );
}
