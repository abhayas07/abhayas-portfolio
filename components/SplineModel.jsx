"use client";
import { useEffect, useRef, useState } from "react";
import { Application } from "@splinetool/runtime";

export default function SplineModel() {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;
    const app = new Application(canvasRef.current);

    app
      .load("/assets/scene.splinecode")
      .then(() => setLoading(false))
      .catch((err) => {
        console.error("Spline load error:", err);
        setLoading(false);
      });

    return () => {
      app.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
          Loading 3D Scene...
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
      />
    </div>
  );
}