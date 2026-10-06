"use client";
import { motion } from "framer-motion";
import { skills, softSkills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills">
      <div className="my-24">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid items-start gap-1.5 md:grid-cols-2 xl:grid-cols-3"
        >
          <div className="flex flex-col py-6 xl:p-6">
            <h2 className="text-4xl font-medium tracking-tight">
              What I work with,<br /><span className="text-gradient clash-grotesk tracking-normal">end to end.</span>
            </h2>
            <p className="mt-2 tracking-tighter text-secondary-foreground">{softSkills.join(" · ")}</p>
          </div>
          {skills.map((g) => (
            <div key={g.group} className="flex flex-col items-start rounded-md bg-white/5 p-10 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10">
              <span className="text-lg tracking-tight text-foreground">{g.group}</span>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((i) => <span key={i} className="pill">{i}</span>)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
