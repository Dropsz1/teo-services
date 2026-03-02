"use client";

import { useEffect, useRef } from "react";

type Mode = "cyan" | "green";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const trailWrapRef = useRef<HTMLDivElement | null>(null);

  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const lastTrail = useRef(0);
  const mode = useRef<Mode>("cyan");

  useEffect(() => {
    const fine = window.matchMedia?.("(pointer:fine)").matches;
    if (!fine) return;

    const dot = dotRef.current;
    const wrap = trailWrapRef.current;
    if (!dot || !wrap) return;

    pos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    target.current = { ...pos.current };

    const setMode = (m: Mode) => {
      mode.current = m;
      document.documentElement.dataset.cursor = m; // CSS picks this up
    };
    setMode("cyan");

    const spawnTrail = (x: number, y: number, intensity = 1) => {
      const now = performance.now();
      if (now - lastTrail.current < 18) return;
      lastTrail.current = now;

      const p = document.createElement("div");
      p.className = "cursor-trail";
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      p.style.opacity = `${0.22 * intensity}`;
      wrap.appendChild(p);
      window.setTimeout(() => p.remove(), 260);
    };

    const spawnBurst = (x: number, y: number) => {
      // shockwave ring
      const ring = document.createElement("div");
      ring.className = "cursor-burst";
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;
      wrap.appendChild(ring);
      window.setTimeout(() => ring.remove(), 420);

      // particles
      for (let i = 0; i < 8; i++) {
        const part = document.createElement("div");
        part.className = "cursor-spark";
        part.style.left = `${x}px`;
        part.style.top = `${y}px`;

        const ang = (Math.PI * 2 * i) / 8 + (Math.random() - 0.5) * 0.4;
        const dist = 18 + Math.random() * 18;
        const dx = Math.cos(ang) * dist;
        const dy = Math.sin(ang) * dist;

        part.style.setProperty("--dx", `${dx}px`);
        part.style.setProperty("--dy", `${dy}px`);
        wrap.appendChild(part);
        window.setTimeout(() => part.remove(), 420);
      }
    };

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      spawnTrail(e.clientX, e.clientY, 1);
    };

    const onDown = () => {
      spawnBurst(pos.current.x, pos.current.y);
      spawnTrail(pos.current.x, pos.current.y, 2.0);
    };

    // Change cursor color when hovering a "zone"
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;

      // slider zone
      if (el.closest("[data-cursor='green']")) {
        setMode("green");
        return;
      }
      setMode("cyan");
    };

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.28;
      pos.current.y += (target.current.y - pos.current.y) * 0.28;

      dot.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;

      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseover", onOver, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseover", onOver);
      if (raf.current) cancelAnimationFrame(raf.current);
      delete document.documentElement.dataset.cursor;
    };
  }, []);

  return (
    <>
      <div ref={trailWrapRef} className="cursor-trail-wrap" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}