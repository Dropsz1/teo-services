'use client';

import { useEffect, useMemo, useState } from "react";

type NavItem = { id: string; label: string };

export default function StickyNav({
  brand = "Teo Services",
  whatsappNumber,
  phone,
  items,
  marqueeText,
}: {
  brand?: string;
  whatsappNumber: string; // ex: "40712345678"
  phone?: string; // ex: "+40 712 345 678"
  items?: NavItem[];
  marqueeText?: string[];
}) {
  const navItems = useMemo<NavItem[]>(
    () =>
      items ?? [
        { id: "servicii", label: "Servicii" },
        { id: "portofoliu", label: "Portofoliu" },
        { id: "proces", label: "Proces" },
        { id: "faq", label: "FAQ" },
        { id: "contact", label: "Contact" },
      ],
    [items]
  );

  const ticker = useMemo(
    () =>
      marqueeText ?? [
        "⚡ Intervenții rapide",
        "🔧 Diagnostic clar",
        "💾 Upgrade SSD/RAM",
        "🧼 Curățare + pastă termică",
        "🛡️ Securizare",
        "🚀 Optimizare performance",
        "📦 Backup & migrare",
      ],
    [marqueeText]
  );

  const [active, setActive] = useState<string>(navItems[0]?.id ?? "");
  const [scrolled, setScrolled] = useState(false);
  const [showTicker, setShowTicker] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setShowTicker(y < 60); // ticker only near top
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((x) => document.getElementById(x.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.08, 0.12, 0.2, 0.3],
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [navItems]);

  const linkBase = "px-3 py-2 rounded-lg text-sm transition select-none";
  const linkInactive = "text-white/65 hover:text-white hover:bg-white/5";
  const linkActive =
    "text-white bg-white/5 border border-blue-500/25 shadow-[0_0_18px_rgba(59,130,246,0.18)]";

  return (
    <div className="fixed top-0 left-0 right-0 z-60">
  <div className="mx-auto max-w-6xl px-6 pt-4">
    <div
      className={[
        "rounded-2xl border overflow-hidden transition-all duration-300",
        scrolled
          ? "border-blue-500/20 bg-black/70 backdrop-blur-xl shadow-[0_18px_70px_rgba(0,0,0,0.55)]"
          : "border-white/10 bg-black/25 backdrop-blur-md",
      ].join(" ")}
    >
          {/* TICKER (integrated) */}
          <div
            className={[
              "border-b border-white/10 bg-black/35",
              "transition-all duration-300 overflow-hidden",
              showTicker ? "max-h-10 opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="w-full overflow-hidden">
              <div className="flex w-max animate-marquee items-center py-2">
                {[...ticker, ...ticker].map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center whitespace-nowrap px-4 text-xs md:text-sm text-blue-100/80"
                  >
                    <span className="mr-2 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.55)]">
                      •
                    </span>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN NAV */}
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <a href="#" className="font-semibold tracking-wide text-white/90">
              {brand}
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((x) => (
                <a
                  key={x.id}
                  href={`#${x.id}`}
                  className={[
                    linkBase,
                    active === x.id ? linkActive : linkInactive,
                  ].join(" ")}
                >
                  {x.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${40772110726}`}
                className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-blue-500/25 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                WhatsApp
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Programează-te
              </a>

              {phone && (
                <a
                  href={`tel:${phone.replaceAll(" ", "")}`}
                  className="sm:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                  aria-label="Sună"
                >
                  ☎
                </a>
              )}
            </div>
          </div>

          {/* MOBILE LINKS */}
          <div className="md:hidden px-4 pb-3 -mt-1">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {navItems.map((x) => (
                <a
                  key={x.id}
                  href={`#${x.id}`}
                  className={[
                    "shrink-0",
                    linkBase,
                    active === x.id ? linkActive : linkInactive,
                    "border border-transparent",
                  ].join(" ")}
                >
                  {x.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}