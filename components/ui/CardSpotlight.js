"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function CardSpotlight({
  children,
  className,
  spotlightColor = "rgba(242, 193, 78, 0.12)",
  darkSpotlightColor = "rgba(52, 211, 153, 0.15)",
  borderGlow = true,
  ...props
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl border border-black/10 bg-white/80 p-6 transition-all duration-300 dark:border-white/10 dark:bg-black/60 backdrop-blur-md hover:border-black/20 dark:hover:border-white/25 hover:shadow-xl dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.6)]",
        className
      )}
      {...props}
    >
      {/* Light mode radial glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 dark:hidden"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      {/* Dark mode radial glow */}
      <div
        className="pointer-events-none absolute -inset-px hidden transition-opacity duration-300 dark:block"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${darkSpotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default CardSpotlight;
