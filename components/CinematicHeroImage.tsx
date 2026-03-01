'use client';

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CinematicHeroImage() {
  const ref = useRef<HTMLDivElement>(null);

  // raw motion values (-0.5..0.5)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // smooth
  const smx = useSpring(mx, { stiffness: 90, damping: 22, mass: 0.35 });
  const smy = useSpring(my, { stiffness: 90, damping: 22, mass: 0.35 });

  // map to degrees/pixels
  const rotateY = useTransform(smx, [-0.5, 0.5], [-10, 10]);
  const rotateX = useTransform(smy, [-0.5, 0.5], [8, -8]);

  const imgX = useTransform(smx, [-0.5, 0.5], [-10, 10]);
  const imgY = useTransform(smy, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;  // ~ -0.5..0.5
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height; // ~ -0.5..0.5
      mx.set(Math.max(-0.5, Math.min(0.5, dx)));
      my.set(Math.max(-0.5, Math.min(0.5, dy)));
    };

    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  return (
    <div ref={ref} className="relative">
      {/* glow blob behind */}
      <div className="pointer-events-none absolute -inset-8 rounded-[32px] bg-blue-500/20 blur-3xl animate-pulse" />

      {/* frame */}
      <div
        className="relative rounded-3xl border border-blue-500/20 bg-black/20 backdrop-blur overflow-hidden
                   shadow-[0_0_60px_rgba(59,130,246,0.28)]"
      >
        <motion.div
          style={{
            transformPerspective: 900,
            rotateX,
            rotateY,
          }}
          className="relative"
        >
          {/* image */}
          <motion.img
            src="/me.jpg"
            alt="Teo Services"
            draggable={false}
            style={{ x: imgX, y: imgY }}
            className="block w-full h-auto select-none scale-[1.05]
           contrast-110 saturate-110 brightness-105"
          />

          {/* cinematic vignette */}
          <div className="pointer-events-none absolute inset-0
                          bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_18%,rgba(0,0,0,0.70)_100%)]" />

          {/* vibrant neon tint */}
                <div className="pointer-events-none absolute inset-0
                bg-gradient-to-tr from-blue-500/18 via-transparent to-cyan-300/16" />

                {/* extra vibrance/contrast */}
                <div className="pointer-events-none absolute inset-0
                bg-[linear-gradient(to_bottom,rgba(34,211,238,0.06),transparent,rgba(59,130,246,0.10))]" />

                {/* light sweep */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="sweep absolute -left-1/3 top-0 h-full w-1/2 rotate-12
                         bg-[linear-gradient(to_right,transparent,rgba(59,130,246,0.18),transparent)]
                         blur-xl opacity-70"
            />
          </div>
        </motion.div>

        {/* caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs text-white/80">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-400/80 shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
            Teo Services • Intervenții rapide
          </div>
        </div>
      </div>
    </div>
  );
}