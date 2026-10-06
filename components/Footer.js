"use client";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour12: true, hour: "numeric", minute: "numeric", timeZone: "Asia/Kolkata" }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <p className="text-xs text-muted-foreground">
            Made by{" "}
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-foreground transition hover:text-primary">{profile.name}</a>
          </p>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="hidden flex-row items-center space-x-2 md:flex">
            <p className="text-xs text-muted-foreground">Local time:</p>
            <p className="text-sm font-semibold">{time} IST</p>
          </span>
        </span>
        <a href={`mailto:${profile.email}`} className="btn-outline">{profile.email}</a>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
