'use client';

import Link from "next/link";

export default function NeonButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition duration-300";

  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={`${base} border border-blue-500/30 bg-white/5 text-white hover:bg-white/10`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} text-white border border-cyan-400/40 bg-black/80
                  hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]
                  hover:scale-[1.03]`}
    >
      {children}
    </Link>
  );
}