"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const bar = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-[3px]">
      <div
        ref={bar}
        className="h-full origin-left bg-gradient-to-r from-py-yellow via-emerald-400 to-py-yellow shadow-[0_0_8px_rgba(242,193,78,0.6)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
