"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
    if (isDark) {
      document.body.classList.add("night");
    } else {
      document.body.classList.remove("night");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    if (next) {
      document.body.classList.add("night");
    } else {
      document.body.classList.remove("night");
    }
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-md border border-django/20 px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors hover:bg-django/10 dark:border-white/20 dark:hover:bg-white/10"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
