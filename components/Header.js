"use client";
import React, { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Header() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      const sectionIds = ["projects", "experience", "skills", "contact"];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection("#" + sectionIds[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide header on fast scroll down, reveal on scroll up
  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 50) {
        setVisible(true);
      } else {
        if (current > lastScrollY && current - lastScrollY > 8) {
          setVisible(false);
          setMobileMenuOpen(false);
        } else if (lastScrollY - current > 8) {
          setVisible(true);
        }
      }
      setLastScrollY(current);
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.header
          initial={{ opacity: 1, y: 0 }}
          animate={{
            y: visible ? 0 : -90,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="fixed inset-x-0 top-3 z-40 mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-8"
        >
          <div className="flex w-full items-center justify-between rounded-full border border-black/10 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-md dark:border-white/15 dark:bg-black/70 transition-colors">
            {/* Identity logo */}
            <a
              href="#top"
              className="group flex items-center gap-2.5 font-semibold tracking-tight text-ink hover:text-django dark:text-[#E4EFE8] dark:hover:text-py-yellow transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-django dark:bg-py-yellow opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-django dark:bg-py-yellow transition-transform duration-200 group-hover:scale-125" />
              </span>
              <span className="text-sm sm:text-base font-bold">{profile.name}</span>
            </a>

            {/* Desktop Navigation: Tactile Animated Command Boxes */}
            <nav
              aria-label="Primary"
              className="hidden items-center gap-2 font-mono sm:flex"
            >
              {navLinks.map((l, idx) => {
                const isActive = activeSection === l.href;
                const isHovered = hoveredIdx === idx;
                const rawName = l.label.replace(/^\//, "");

                return (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    whileHover={{ y: -2.5, scale: 1.04 }}
                    whileTap={{ scale: 0.94, y: 0 }}
                    transition={{ type: "spring", stiffness: 420, damping: 24 }}
                    className={cn(
                      "relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold select-none transition-colors duration-200",
                      isActive
                        ? "text-django dark:text-py-yellow"
                        : "text-ink/80 hover:text-django dark:text-[#E4EFE8]/80 dark:hover:text-py-yellow"
                    )}
                  >
                    {/* Magnetic sliding background on hover */}
                    {isHovered && (
                      <motion.span
                        layoutId="navHoverPill"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                        className="absolute inset-0 rounded-lg bg-black/[0.07] dark:bg-white/[0.12] border border-black/15 dark:border-white/25 shadow-sm"
                        aria-hidden="true"
                      />
                    )}

                    {/* Active section highlight box */}
                    {isActive && !isHovered && (
                      <motion.span
                        layoutId="navActivePill"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                        className="absolute inset-0 rounded-lg bg-django/10 dark:bg-py-yellow/15 border border-django/30 dark:border-py-yellow/40 shadow-[0_0_12px_rgba(242,193,78,0.25)]"
                        aria-hidden="true"
                      />
                    )}

                    {/* Default tactical box frame */}
                    <span
                      className="absolute inset-0 rounded-lg border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.04] backdrop-blur-sm -z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      aria-hidden="true"
                    />

                    {/* Interactive LED status indicator */}
                    <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-all duration-300",
                          isActive || isHovered
                            ? "bg-django dark:bg-py-yellow shadow-[0_0_8px_currentColor] scale-125"
                            : "bg-black/25 dark:bg-white/30"
                        )}
                      />
                      {(isActive || isHovered) && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-django dark:bg-py-yellow opacity-60" />
                      )}
                    </span>

                    <span className="relative z-10 tracking-tight capitalize">
                      {rawName}
                    </span>
                  </motion.a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Mobile menu toggle button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/15 text-xs sm:hidden dark:border-white/20 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </motion.header>
      </AnimatePresence>

      {/* Mobile Menu Dropdown with matching tactile command boxes */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile Navigation"
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-black/15 bg-white/95 p-4 shadow-2xl backdrop-blur-xl dark:border-white/15 dark:bg-black/90 sm:hidden"
          >
            <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
              {navLinks.map((l) => {
                const isActive = activeSection === l.href;
                const rawName = l.label.replace(/^\//, "");

                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-2 rounded-xl border p-3 font-semibold transition-all duration-200 active:scale-95",
                      isActive
                        ? "border-django bg-django/10 text-django dark:border-py-yellow dark:bg-py-yellow/15 dark:text-py-yellow"
                        : "border-black/10 bg-white/60 text-ink dark:border-white/15 dark:bg-white/5 dark:text-[#E4EFE8]"
                    )}
                  >
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        isActive ? "bg-django dark:bg-py-yellow" : "bg-black/30 dark:bg-white/30"
                      )}
                    />
                    <span className="capitalize">
                      {rawName}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
