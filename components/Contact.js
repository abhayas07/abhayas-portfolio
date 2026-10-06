import { profile } from "@/data/portfolio";

export default function Contact() {
  const links = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    profile.resume && { label: "Resume", href: profile.resume },
  ].filter(Boolean);

  return (
    <section id="contact" className="my-40">
      <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24">
        <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
          Let&apos;s work <span className="text-gradient clash-grotesk">together.</span>
        </h2>
        <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
          I&apos;m looking for a junior full-stack role. {profile.email} · {profile.phone}
        </p>
        <a href={`mailto:${profile.email}`} className="btn mt-6">Get in touch</a>
        <div className="mt-6 flex gap-4 text-sm text-muted-foreground">
          {links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="transition hover:text-foreground">{l.label}</a>)}
        </div>
      </div>
    </section>
  );
}
