"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const initials = profile.name.split(" ")[0].toLowerCase();

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
      let cur = "";
      document.querySelectorAll("section[id]").forEach((s) => {
        if (window.scrollY >= s.offsetTop - 250) cur = `#${s.id}`;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const label = (l) => l.label.replace("/", "");

  return (
    <nav
      className={cn(
        "fixed top-0 z-40 flex w-full items-center justify-between px-4 py-8 2xl:px-[17rem]",
        scrolled ? "bg-gradient-to-br from-background to-transparent shadow-md backdrop-blur transition" : "bg-transparent"
      )}
    >
      <a href="#home" className="text-lg font-semibold">{initials}</a>

      <ul className="hidden items-center space-x-5 text-center sm:flex">
        {navLinks.map((l, i) => (
          <motion.li key={l.href} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: i * 0.12 } }}>
            <a href={l.href} className={cn("nav-link", active === l.href && "nav-active")}>{label(l)}</a>
          </motion.li>
        ))}
      </ul>

      <button
        onClick={() => setOpen(true)}
        className="rounded-md p-2 sm:hidden"
        aria-label="Open main menu"
        aria-expanded={open}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M2.5 2.5H17.5M2.5 7.5H17.5M2.5 12.5H17.5" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed right-0 top-0 z-50 flex h-screen w-full flex-col bg-background"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
          >
            <div className="flex h-20 items-center justify-between border-b px-[22px]">
              <span className="text-base font-medium lowercase">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-start space-y-6 px-[22px] py-[58px]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="text-xl lowercase tracking-tight text-slate-300">{label(l)}</a>
                </li>
              ))}
            </ul>
            <span className="mt-auto px-[22px] py-10 text-sm text-muted-foreground">
              © {new Date().getFullYear()} {profile.name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
