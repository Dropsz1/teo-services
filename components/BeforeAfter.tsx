"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type BeforeAfterProps = {
  beforeSrc: string;
  afterSrc: string;
  title?: string;
  className?: string;
  /** "cover" = cinematic (taie marginile), "contain" = nu taie deloc dar apar benzi */
  fit?: "cover" | "contain";
  /** raport, ex: "16/9", "4/3", "1/1" */
  aspect?: "16/9" | "4/3" | "1/1" | "3/4";
};

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  title,
  className,
  fit = "cover",
  aspect = "16/9",
}: BeforeAfterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(55); // procent

  const aspectClass =
    aspect === "16/9"
      ? "aspect-video"
      : aspect === "4/3"
      ? "aspect-[4/3]"
      : aspect === "3/4"
      ? "aspect-[3/4]"
      : "aspect-square";

  // Drag (mouse + touch) pe toată zona
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setFromClientX = (clientX: number) => {
      const r = el.getBoundingClientRect();
      const p = ((clientX - r.left) / r.width) * 100;
      const clamped = Math.max(0, Math.min(100, p));
      setValue(clamped);
    };

    const onPointerDown = (e: PointerEvent) => {
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      setFromClientX(e.clientX);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.buttons === 0 && e.pointerType !== "touch") return;
      setFromClientX(e.clientX);
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  const objectClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div className={["w-full", className].filter(Boolean).join(" ")}>
      {title && (
        <div className="mb-3 flex items-center justify-between">
          <div className="text-white/90 font-semibold">{title}</div>
          <div className="text-white/50 text-sm tabular-nums">{Math.round(value)}%</div>
        </div>
      )}

      <div
        ref={ref}
        data-cursor="green"
        className={[
          "relative overflow-hidden rounded-2xl border",
          "border-cyan-300/20 bg-black/35",
          "shadow-[0_20px_90px_rgba(0,0,0,0.55)]",
          aspectClass,
          "select-none touch-pan-y",
        ].join(" ")}
        aria-label="Before/After slider"
      >
        {/* BACK (Before) */}
        <Image
          src={beforeSrc}
          alt="Înainte"
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={["absolute inset-0", objectClass].join(" ")}
          draggable={false}
          style={{ userSelect: "none" }}
        />

        {/* TOP (After) - tăiem cu clipPath, nu schimbăm dimensiunea */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - value}% 0 0)`,
          }}
        >
          <Image
            src={afterSrc}
            alt="După"
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={["absolute inset-0", objectClass].join(" ")}
            draggable={false}
            style={{ userSelect: "none" }}
          />
        </div>

        {/* Hacker overlays (scanlines + noise) */}
        <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-25 beforeafter-scanlines" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] beforeafter-noise" />

        {/* Labels (terminal style) */}
        <div className="pointer-events-none absolute left-4 top-4 rounded-md bg-black/65 px-3 py-1 text-[11px] font-mono tracking-[0.22em] text-cyan-200/90 border border-cyan-300/20">
          IN
        </div>
        <div className="pointer-events-none absolute right-4 top-4 rounded-md bg-black/65 px-3 py-1 text-[11px] font-mono tracking-[0.22em] text-cyan-200/90 border border-cyan-300/20">
          OUT
        </div>

        {/* HUD corners */}
        <div className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-cyan-300/80" />
        <div className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-cyan-300/80" />
        <div className="pointer-events-none absolute left-3 bottom-3 h-6 w-6 border-l-2 border-b-2 border-cyan-300/80" />
        <div className="pointer-events-none absolute right-3 bottom-3 h-6 w-6 border-r-2 border-b-2 border-cyan-300/80" />

        {/* Mini status */}
        <div className="pointer-events-none absolute left-4 bottom-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-cyan-200/80">
          <span className="inline-block h-2 w-2 rounded-full bg-lime-400/80 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
          SIGNAL LOCKED
        </div>

        {/* Divider line (brutal neon) */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 w-0.75
                     bg-linear-to-b from-cyan-200 via-cyan-400 to-blue-500
                     shadow-[0_0_30px_rgba(34,211,238,0.65)]"
          style={{ left: `${value}%` }}
        />

        {/* Handle (electric/glitch look) */}
        <div
          className="pointer-events-none absolute top-1/2 -translate-y-1/2"
          style={{ left: `${value}%` }}
        >
          <div
            className="h-11 w-11 -translate-x-1/2 rounded-full bg-black/80 border border-cyan-300/50
                       shadow-[0_0_34px_rgba(34,211,238,0.45)] relative overflow-hidden"
          >
            <div className="absolute inset-0 beforeafter-glitch" />
            <div className="h-full w-full flex items-center justify-center text-cyan-200 text-sm font-bold">
              ↔
            </div>
          </div>
        </div>

        {/* Hidden range for accessibility (optional) */}
        <input
          aria-label="Before/after"
          className="absolute inset-x-4 bottom-4 opacity-0"
          type="range"
          min={0}
          max={100}
          value={Math.round(value)}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>
    </div>
  );
}