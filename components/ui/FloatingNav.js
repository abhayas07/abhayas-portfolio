"use client";
import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

export function FloatingNav({ navItems, ownerName = "Abhay A S", className }) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 60) {
        setVisible(true);
      } else {
        if (current > lastScrollY && current - lastScrollY > 5) {
          setVisible(false); // Scrolling down
        } else if (lastScrollY - current > 5) {
          setVisible(true); // Scrolling up
        }
      }
      setLastScrollY(current);
    }
  });

  return (
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
        className={cn(
          "fixed inset-x-0 top-3 z-50 mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-8",
          className
        )}
      >
        <div className="flex w-full items-center justify-between rounded-full border border-django/15 bg-paper/85 px-4 py-2.5 shadow-md backdrop-blur-md dark:border-white/15 dark:bg-django-deep/85 transition-colors">
          <a
            href="#top"
            className="font-semibold tracking-tight text-ink hover:text-django dark:text-[#E4EFE8] dark:hover:text-py-yellow transition-colors text-sm sm:text-base"
          >
            {ownerName}
          </a>

          <nav
            aria-label="Primary"
            className="flex items-center gap-4 sm:gap-6 font-mono text-xs sm:text-sm"
          >
            {navItems.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="opacity-75 hover:opacity-100 hover:text-django dark:hover:text-py-yellow transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center pl-2">
            <ThemeToggle />
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}

export default FloatingNav;
