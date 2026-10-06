"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function InfiniteMovingCards({
  items = [],
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }

      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "35s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      }

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-2",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex-shrink-0 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-black/60 dark:text-[#E4EFE8] transition-colors hover:border-black/25 dark:hover:border-py-yellow/50"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-django dark:bg-py-yellow" />
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InfiniteMovingCards;
