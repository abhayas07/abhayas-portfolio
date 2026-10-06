"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardSpotlight } from "./ui/CardSpotlight";

// A looping 6s animation of one web request: browser -> server -> database -> back.
// Each packet is visible only during its own quarter of the loop.
const CYCLE = "6s";
const REQ = "#F2C14E";
const RES = "#34D399";

const packets = [
  { d: "M190 62 L275 62", s: 0, e: 0.25, color: REQ },
  { d: "M445 62 L530 62", s: 0.25, e: 0.5, color: REQ },
  { d: "M530 82 L445 82", s: 0.5, e: 0.75, color: RES },
  { d: "M275 82 L190 82", s: 0.75, e: 1, color: RES },
];

const nodes = [
  { x: 20, title: "Browser", sub: "HTML · CSS · JS · React", glow: { v: "1;0;0;1", k: "0;0.12;0.97;1" } },
  { x: 275, title: "Server", sub: "Django · Flask · REST API", glow: { v: "0;0;1;0;0;1;0;0", k: "0;0.24;0.27;0.4;0.74;0.77;0.9;1" } },
  { x: 530, title: "Database", sub: "PostgreSQL · MySQL · MongoDB", glow: { v: "0;0;1;0;0", k: "0;0.49;0.52;0.65;1" } },
];

export default function RequestFlow() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAnimate(!mq.matches);
    const onChange = () => setAnimate(!mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      aria-labelledby="flow-title"
      className="mx-auto max-w-5xl px-5 py-8 sm:px-8"
    >
      <CardSpotlight className="p-6 sm:p-8">
        <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="flow-title" className="text-lg font-semibold tracking-tight sm:text-xl">
              How a request moves through my stack
            </h2>
            <p className="text-sm opacity-70">
              Yellow is the request going in. Green is the response coming back.
            </p>
          </div>
          <div className="mt-2 flex items-center gap-4 text-xs font-mono sm:mt-0 opacity-80">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-py-yellow" /> Request
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Response
            </span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-django/10 bg-white/40 p-3 backdrop-blur dark:border-white/10 dark:bg-black/20">
          <svg
            viewBox="0 0 720 140"
            role="img"
            aria-label="A request travels from the browser to the server, to the database, and the response returns to the browser"
            className="mx-auto min-w-[520px] w-full text-ink dark:text-[#E4EFE8]"
          >
            {/* lanes */}
            {["62", "82"].map((y) => (
              <g key={y} stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="4 4">
                <line x1="190" y1={y} x2="275" y2={y} />
                <line x1="445" y1={y} x2="530" y2={y} />
              </g>
            ))}

            {nodes.map((n) => (
              <g key={n.title}>
                <rect x={n.x} y="38" width="170" height="68" rx="8" fill="none" stroke="currentColor" strokeOpacity="0.3" />
                {animate && (
                  <rect x={n.x} y="38" width="170" height="68" rx="8" fill="none" stroke={REQ} strokeWidth="2.5" opacity="0">
                    <animate attributeName="opacity" dur={CYCLE} repeatCount="indefinite" values={n.glow.v} keyTimes={n.glow.k} />
                  </rect>
                )}
                <text x={n.x + 85} y="68" textAnchor="middle" fontSize="15" fontWeight="600" fill="currentColor">{n.title}</text>
                <text x={n.x + 85} y="88" textAnchor="middle" fontSize="10.5" fill="currentColor" opacity="0.7">{n.sub}</text>
              </g>
            ))}

            {animate &&
              packets.map((p, i) => (
                <circle key={i} r="5" fill={p.color} opacity="0">
                  <animateMotion dur={CYCLE} repeatCount="indefinite" path={p.d} calcMode="linear" keyPoints="0;0;1;1" keyTimes={`0;${p.s};${p.e};1`} />
                  <animate attributeName="opacity" dur={CYCLE} repeatCount="indefinite" values="0;0;1;1;0;0" keyTimes={`0;${p.s};${p.s + 0.01};${p.e - 0.01};${p.e};1`} />
                </circle>
              ))}
          </svg>
        </div>
      </CardSpotlight>
    </motion.section>
  );
}
