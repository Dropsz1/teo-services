'use client';

import { useEffect, useRef, useState } from "react";

export default function BeforeAfter({
  beforeSrc = "/before.jpg",
  afterSrc = "/after.jpg",
  title = "Înainte / După",
}: {
  beforeSrc?: string;
  afterSrc?: string;
  title?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(55);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPct(Math.round((x / rect.width) * 100));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => dragging.current && setFromClientX(e.clientX);
    const onUp = () => (dragging.current = false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div className="rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="text-white font-semibold">{title}</div>
        <div className="text-sm text-blue-200/80 tabular-nums">{pct}%</div>
      </div>

      <div
        ref={wrapRef}
        className="mt-4 relative h-[260px] md:h-[360px] w-full overflow-hidden rounded-2xl border border-white/10 select-none"
        onMouseDown={(e) => {
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
        onTouchStart={(e) => {
          dragging.current = true;
          setFromClientX(e.touches[0].clientX);
        }}
        onTouchMove={(e) => dragging.current && setFromClientX(e.touches[0].clientX)}
        onTouchEnd={() => (dragging.current = false)}
      >
        {/* AFTER (background) */}
        <img
          src={afterSrc}
          alt="După"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        {/* BEFORE (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pct}%` }}
        >
          <img
            src={beforeSrc}
            alt="Înainte"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[3px]
           bg-gradient-to-b from-blue-400 via-cyan-300 to-blue-400
           shadow-[0_0_25px_rgba(59,130,246,0.95)]"
          style={{ left: `calc(${pct}% - 1px)` }}
        />

        {/* Knob */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-11 w-11 rounded-full
           border border-blue-500/40 bg-black/60 backdrop-blur
           shadow-[0_0_30px_rgba(59,130,246,0.7)]
           flex items-center justify-center text-blue-100
           transition hover:scale-110"
          style={{ left: `calc(${pct}% - 20px)` }}
        >
          <span className="text-xs">⇆</span>
        </div>

        {/* Labels */}
        <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80">
          Înainte
        </div>
        <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80">
          După
        </div>
      </div>

      <div className="mt-3 text-sm text-white/60">
        Trage de slider ca să compari.
      </div>
    </div>
  );
}