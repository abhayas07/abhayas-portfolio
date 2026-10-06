"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function PinContainer({
  children,
  title,
  href,
  className,
  containerClassName,
}) {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
    setTransform("translate(-50%,-50%) rotateX(35deg) scale(0.92)");
  };
  const onMouseLeave = () => {
    setIsHovered(false);
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "group/pin relative z-20 flex items-center justify-center cursor-pointer transition-all duration-300",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 top-1/2 flex items-start justify-start overflow-hidden rounded-2xl border border-django/20 bg-white/80 p-4 shadow-xl backdrop-blur-md transition-transform duration-500 ease-out dark:border-white/15 dark:bg-django-deep/90 dark:shadow-[0_8px_24px_rgba(0,0,0,0.6)] group-hover/pin:border-py-yellow/50"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} isHovered={isHovered} />
    </div>
  );
}

export function PinPerspective({ title, href, isHovered }) {
  return (
    <motion.div
      className="pointer-events-none z-[60] flex h-80 w-full items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100 group-hover/pin:pointer-events-auto"
      aria-hidden={!isHovered}
    >
      <div className="inset-0 -mt-7 h-full w-full flex-none">
        {title && (
          <div className="absolute inset-x-0 top-0 flex justify-center">
            <a
              href={href || "#"}
              target={href && href.startsWith("http") ? "_blank" : undefined}
              rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="relative z-10 flex items-center space-x-2 rounded-full border border-django/30 bg-paper px-4 py-1.5 shadow-md dark:border-py-yellow/30 dark:bg-black/80 backdrop-blur-md"
            >
              <span className="relative z-20 inline-block text-xs font-semibold text-django dark:text-py-yellow">
                {title}
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-py-yellow/0 via-py-yellow/90 to-py-yellow/0"
              />
            </a>
          </div>
        )}

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 2, 4].map((delay, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 0.8, 0.4, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: delay,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-emerald-500/[0.12] dark:bg-py-yellow/[0.12] shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
              aria-hidden="true"
            />
          ))}
        </div>

        <>
          <motion.div
            aria-hidden="true"
            className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-emerald-400 dark:to-py-yellow blur-[2px] group-hover/pin:h-36 transition-all duration-500"
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-emerald-400 dark:to-py-yellow group-hover/pin:h-36 transition-all duration-500"
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-1/2 right-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-emerald-500 dark:bg-py-yellow blur-[2px]"
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-1/2 right-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-emerald-300 dark:bg-white"
          />
        </>
      </div>
    </motion.div>
  );
}

export default PinContainer;
