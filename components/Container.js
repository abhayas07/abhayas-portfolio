"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "./Preloader";

export default function Container({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
      <main className="container relative">{children}</main>
      <Footer />
    </>
  );
}
