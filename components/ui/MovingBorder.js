"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorderContainer({
  borderRadius = "1rem",
  children,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration = 3500,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden bg-transparent p-[1.5px]",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.98)` }}
      >
        <MovingBorder duration={duration} rx="20%" ry="20%">
          <div
            className={cn(
              "h-24 w-24 bg-[radial-gradient(#F2C14E_40%,transparent_70%)] dark:bg-[radial-gradient(#34D399_40%,transparent_70%)] opacity-85",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative h-full w-full rounded-[inherit] border border-black/10 bg-white/85 dark:border-white/10 dark:bg-black/70 backdrop-blur-xl transition-colors",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.98)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export function MovingBorder({
  children,
  duration = 3000,
  rx = "20%",
  ry = "20%",
  ...otherProps
}) {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);
  const [canAnimate, setCanAnimate] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setCanAnimate(!mq.matches);
    const handler = () => setCanAnimate(!mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useAnimationFrame((time) => {
    if (!canAnimate) return;
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.x ?? 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        aria-hidden="true"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      {canAnimate && (
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

export default MovingBorderContainer;
