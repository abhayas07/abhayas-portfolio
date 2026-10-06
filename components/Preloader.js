"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["Hello", "Namaskaram", "Namaste", "Bonjour", "Ciao", "Hola", "Hallo", "Hello"];

export default function Preloader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) return;
    const t = setTimeout(() => setIndex(index + 1), index === 0 ? 800 : 150);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <motion.div
      initial={{ top: 0 }}
      exit={{ top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
      className="fixed left-0 z-[99] flex h-screen w-screen items-center justify-center bg-background"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75, transition: { duration: 1, delay: 0.2 } }}
        className="absolute z-10 flex items-center text-4xl text-white"
      >
        <span className="mr-2.5 block h-2.5 w-2.5 rounded-full bg-white" />
        {words[index]}
      </motion.p>
    </motion.div>
  );
}
