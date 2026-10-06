"use client";
import { useRef, useState } from "react";
import { projects } from "@/data/portfolio";

const details = ["problem", "solution", "contribution", "outcome"];

export default function Projects() {
  const track = useRef(null);
  const [cur, setCur] = useState(1);

  const go = (dir) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.5, behavior: "smooth" });
  };
  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild?.getBoundingClientRect().width || 1;
    setCur(Math.min(projects.length, Math.round(el.scrollLeft / card) + 1));
  };

  return (
    <section id="projects">
      <div className="my-40">
        <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">✨ Projects</span>
        <h2 className="mt-3 text-4xl font-semibold tracking-tighter xl:text-6xl">Things I&apos;ve built.</h2>
        <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">A few of the web apps from my training and internships.</p>

        <div className="mt-14">
          <div ref={track} onScroll={onScroll} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto">
            {projects.map((p) => (
              <article key={p.name} className="relative min-h-[320px] shrink-0 basis-full snap-start overflow-hidden rounded-lg border bg-card md:basis-[calc(50%-0.5rem)]">
                <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/30 via-primary/10 to-secondary/20 p-6">
                  <span className="clash-grotesk text-center text-3xl font-semibold tracking-tight">{p.name}</span>
                </div>
                <div className="space-y-3 p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => <span key={s} className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">{s}</span>)}
                  </div>
                  <p className="tracking-tight">{p.summary}</p>
                  {details.filter((k) => p[k]).map((k) => (
                    <p key={k} className="text-sm text-muted-foreground"><span className="capitalize text-foreground">{k}: </span>{p[k]}</p>
                  ))}
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="inline-block text-sm text-primary hover:underline">View project</a>}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <span><span className="font-semibold">{cur} / {projects.length}</span> projects</span>
            <span className="flex gap-2">
              <button onClick={() => go(-1)} aria-label="Previous project" className="btn-outline !h-8 !w-8 !p-0">&lsaquo;</button>
              <button onClick={() => go(1)} aria-label="Next project" className="btn-outline !h-8 !w-8 !p-0">&rsaquo;</button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
