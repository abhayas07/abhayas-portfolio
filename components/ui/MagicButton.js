"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function MagicButton({
  title,
  children,
  icon,
  position = "right",
  handleClick,
  className,
  otherClasses,
  href,
  target,
  rel,
  gradient = "conic-gradient(from 90deg at 50% 50%, #F2C14E 0%, #0C4B33 50%, #F2C14E 100%)",
}) {
  const content = (
    <>
      <span
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
        style={{ background: gradient }}
        aria-hidden="true"
      />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white/90 px-6 py-2.5 text-sm font-medium text-ink transition-all duration-200 group-hover:bg-white/80 dark:bg-black/85 dark:text-[#E4EFE8] dark:group-hover:bg-black/75 backdrop-blur-xl",
          otherClasses
        )}
      >
        {position === "left" && icon}
        {title || children}
        {position === "right" && icon}
      </span>
    </>
  );

  const wrapperClass = cn(
    "group relative inline-flex h-12 overflow-hidden rounded-lg p-[1.5px] transition-transform duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-py-yellow",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={handleClick}
        className={wrapperClass}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={wrapperClass}>
      {content}
    </button>
  );
}

export default MagicButton;
