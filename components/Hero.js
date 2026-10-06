import { profile } from "@/data/portfolio";

const pills = profile.stackLine.split("·").map((s) => s.trim()).filter(Boolean);

export default function Hero() {
  return (
    <section id="home" className="relative mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between">
      {/* background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative h-[21rem] w-[36rem] rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-10 sm:h-[42rem] sm:w-[72rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} />
      </div>

      <div className="flex w-full flex-col items-start space-y-4">
        <div className="flex flex-row flex-wrap items-center gap-1.5">
          {pills.map((p) => <span key={p} className="pill">{p.toLowerCase()}</span>)}
        </div>
        <h1 className="pt-2 leading-tight">
          <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">Hello, I&apos;m<br /></span>
          <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">{profile.name}.</span>
        </h1>
        <p className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl">{profile.positioning}</p>
        <span className="flex flex-row items-center space-x-1.5 pt-6">
          <a href={`mailto:${profile.email}`} className="btn">Get in touch &rsaquo;</a>
          <a href="#about" className="btn-outline">Learn more</a>
        </span>
      </div>

      {/* profile panel (replaces the 3D scene) */}
      <div className="mt-14 flex h-[515px] w-full items-center overflow-hidden rounded-3xl border bg-background xl:mt-0 xl:w-[690px] xl:min-w-[690px]">
        <pre className="w-full overflow-x-auto p-8 font-mono text-sm leading-7 text-slate-300 no-scrollbar">
{`{
  "name": "${profile.name}",
  "role": "${profile.title}",
  "stack": [${pills.map((p) => `"${p}"`).join(", ")}],
  "location": "${profile.location}",
  "status": "open to junior roles"
}`}
        </pre>
      </div>
    </section>
  );
}
