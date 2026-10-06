import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education">
      <div className="my-24">
        <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
          Where I <span className="text-gradient clash-grotesk">studied.</span>
        </h2>
        <div className="mt-10 grid gap-1.5 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.title} className="rounded-md bg-white/5 p-10 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10">
              <span className="text-sm text-muted-foreground">{e.period}</span>
              <h3 className="mt-2 text-lg tracking-tight">{e.title}</h3>
              <p className="tracking-tighter text-muted-foreground">{e.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
