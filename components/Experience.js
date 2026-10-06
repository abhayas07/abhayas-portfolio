import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience">
      <div className="my-24">
        <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
          Where I&apos;ve <span className="text-gradient clash-grotesk">worked.</span>
        </h2>
        <div className="mt-10 grid gap-1.5 md:grid-cols-2">
          {experience.map((e) => (
            <div key={e.company + e.period} className="rounded-md bg-white/5 p-10 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10">
              <span className="text-sm text-muted-foreground">{e.period}</span>
              <h3 className="mt-2 text-lg tracking-tight">{e.role}, {e.company}</h3>
              {e.points.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 tracking-tighter text-muted-foreground">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
