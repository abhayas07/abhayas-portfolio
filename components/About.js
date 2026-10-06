import { about, projects, skills, experience } from "@/data/portfolio";

const stats = [
  { label: "Projects built", value: projects.length },
  { label: "Internships", value: experience.length },
  { label: "Skills & tools", value: skills.reduce((n, g) => n + g.items.length, 0) },
];

export default function About() {
  return (
    <section id="about">
      <div className="my-14 flex max-w-6xl flex-col justify-start space-y-10">
        <h2 className="py-16 pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">{about[0]}</h2>
        {about.slice(1).map((p) => (
          <p key={p} className="max-w-3xl text-lg tracking-tight text-muted-foreground">{p}</p>
        ))}
        <div className="grid grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center xl:items-start xl:text-start">
              <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">{s.value}</span>
              <span className="tracking-tight text-muted-foreground xl:text-lg">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
