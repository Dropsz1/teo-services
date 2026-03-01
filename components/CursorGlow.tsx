'use client';
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 220}px, ${e.clientY - 220}px)`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 h-[440px] w-[440px] rounded-full
                 bg-blue-500/10 blur-3xl opacity-70 mix-blend-screen"
      aria-hidden="true"
    />
  );
}