"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextGenerateEffect({
  words,
  className,
  highlightWords = [],
  highlightClass = "text-django dark:text-py-yellow font-bold",
  duration = 0.5,
  staggerDelay = 0.08,
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span.text-word",
      {
        opacity: 1,
        y: 0,
      },
      {
        duration: duration,
        delay: stagger(staggerDelay),
      }
    );
  }, [animate, duration, staggerDelay]);

  return (
    <div className={cn("inline-block", className)}>
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          const isHighlight = highlightWords.some(
            (hw) => word.toLowerCase().includes(hw.toLowerCase())
          );

          return (
            <motion.span
              key={word + idx}
              className={cn(
                "text-word inline-block opacity-0 translate-y-2 mr-[0.28em] transition-colors",
                isHighlight && highlightClass
              )}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
}

export default TextGenerateEffect;
