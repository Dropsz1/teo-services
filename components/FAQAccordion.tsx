'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = { q: string; a: string };

export default function FAQAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const open = openIndex === i;

        return (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-semibold text-white">{item.q}</span>

              <span
                className={[
                  "inline-flex h-9 w-9 items-center justify-center rounded-xl",
                  "border border-blue-500/20 bg-black/30",
                  "text-blue-200 transition",
                  open ? "shadow-[0_0_18px_rgba(59,130,246,0.35)]" : "",
                ].join(" ")}
                aria-hidden="true"
              >
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="text-xl leading-none"
                >
                  +
                </motion.span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <div className="px-5 pb-5 text-white/70 leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}