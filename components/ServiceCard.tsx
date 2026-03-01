'use client';
import { motion } from "framer-motion";

export function ServiceCard({
  title,
  desc,
  badge,
}: {
  title: string;
  desc: string;
  badge?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur
                 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition
                   shadow-[0_0_55px_rgba(59,130,246,0.32)]"
      />

      {badge && (
        <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
          {badge}
        </div>
      )}

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/70 leading-relaxed">{desc}</p>
    </motion.div>
  );
}