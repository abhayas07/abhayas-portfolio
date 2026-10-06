"use client";
import React from "react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-django/10 py-10 dark:border-white/10 overflow-hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 text-sm sm:flex-row sm:px-8">
        <p className="opacity-70">
          © {new Date().getFullYear()} <span className="font-semibold text-ink dark:text-[#E4EFE8]">{profile.name}</span>. Built with Django & React mindset.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 rounded-full border border-django/20 px-3 py-1 font-mono text-xs opacity-75 hover:opacity-100 hover:border-django dark:border-white/20 dark:hover:border-py-yellow transition-all"
          aria-label="Back to top"
        >
          <span>top</span>
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
