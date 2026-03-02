"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

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
  const uid = useId();
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
        className={[
          "relative overflow-hidden rounded-2xl border",
          "border-blue-500/20 bg-black/30",
          "shadow-[0_20px_80px_rgba(0,0,0,0.45)]",
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

        {/* Labels */}
        <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs text-white/85 border border-white/10">
          Înainte
        </div>
        <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs text-white/85 border border-white/10">
          După
        </div>

        {/* Divider line */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-cyan-300/70 shadow-[0_0_20px_rgba(34,211,238,0.55)]"
          style={{ left: `${value}%` }}
        />

        {/* Handle */}
        <div
          className="pointer-events-none absolute top-1/2 -translate-y-1/2"
          style={{ left: `${value}%` }}
        >
          <div className="h-10 w-10 -translate-x-1/2 rounded-full bg-black/70 border border-cyan-300/40 shadow-[0_0_24px_rgba(34,211,238,0.35)] flex items-center justify-center">
            <span className="text-cyan-200 text-sm">↔</span>
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