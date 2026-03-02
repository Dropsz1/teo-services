'use client';

import { useEffect } from "react";
import CursorGlow from "@/components/CursorGlow";
import { FadeIn } from "@/components/FadeIn";
import { ServiceCard } from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";
import ScrollProgress from "@/components/ScrollProgress";
import BeforeAfter from "@/components/BeforeAfter";
import CinematicHeroImage from "@/components/CinematicHeroImage";
import NeonButton from "@/components/NeonButton";
import StickyNav from "@/components/StickyNav";


export default function Page() {
  useEffect(() => {
    // Start always at top and remove hash if present
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const PHONE = "+40 772110726";
  const WHATSAPP = "40772110726"; // ex: 40712345678

  return (
    <main className="min-h-screen bg-[#050712] text-white pt-28">
      <ScrollProgress />
      {/* neon background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute -top-44 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-blue-500/18 blur-3xl" />
        <div className="absolute top-44 left-10 h-[520px] w-[520px] rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[560px] w-[560px] rounded-full bg-sky-500/12 blur-3xl" />
      </div>

      <CursorGlow />

<StickyNav
  brand="Teo Services"
  whatsappNumber={WHATSAPP}
  phone={PHONE}
/>

<header className="relative">

  {/* hero */}
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT SIDE - TEXT */}
    <div>
      {/* badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-black/30 px-4 py-2 text-xs text-blue-100/70">
        <span className="inline-block h-2 w-2 rounded-full bg-green-400/70" />
        Disponibil pentru intervenții • Roman & împrejurimi
      </div>

      <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
        Teo Services — <span className="text-white/60">Service PC & Laptop</span>
      </h1>

      <p className="mt-5 text-white/70 text-lg leading-relaxed">
        Instalări Windows, optimizări, upgrade SSD/RAM, curățare & mentenanță.
        Totul cu atenție la detalii și focus pe performanță.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
          <NeonButton href="#contact">Programează-te</NeonButton>
          <NeonButton href="#servicii" variant="ghost">Vezi servicii</NeonButton>
          <NeonButton href={`https://wa.me/${WHATSAPP}`} variant="ghost">WhatsApp</NeonButton>
      </div>
    </div>

    {/* RIGHT SIDE - IMAGE */}
   <div className="relative">
  <CinematicHeroImage />
</div>

  </div>
</div>
      </header>

      {/* services */}
      <section id="servicii" className="relative mx-auto max-w-6xl px-6 pb-24">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-semibold">Servicii</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Alege ce ai nevoie — sau îmi spui problema și îți recomand varianta optimă.
          </p>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard badge="Popular" title="Instalare Windows + drivere" desc="Instalare curată, update-uri, drivere corecte, aplicații esențiale." />
          <ServiceCard title="Optimizare viteză & stabilitate" desc="Curățare bloat, setări performanță, pornire mai rapidă, tuning basic." />
          <ServiceCard badge="Best value" title="Upgrade SSD / RAM" desc="Recomandare compatibilă + montaj + clonare/migrare date (unde se poate)." />
          <ServiceCard title="Curățare internă + pastă termică" desc="Scazi temperaturile, scazi zgomotul, crești stabilitatea." />
          <ServiceCard title="Securizare & protecție" desc="Setări de securitate, conturi, bune practici." />
          <ServiceCard title="Backup / recuperare date" desc="Migrare, salvare fișiere, diagnostic pentru situații critice." />
        </div>
      </section>

      <section id="portofoliu" className="relative mx-auto max-w-6xl px-6 pb-24">
  <FadeIn>
    <h2 className="text-2xl md:text-3xl font-semibold">Portofoliu</h2>
    <p className="mt-2 text-white/70 max-w-2xl">
      Exemple de rezultate (curățare, optimizare, instalare curată). Trage de slider.
    </p>
  </FadeIn>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <FadeIn delay={0.06}>
      <BeforeAfter title="Curățare & mentenanță" beforeSrc="/before.jpg" afterSrc="/after.jpg" fit="cover" aspect="16/9" />
    </FadeIn>

    <FadeIn delay={0.12}>
      <BeforeAfter title="Windows fresh + optimizare" beforeSrc="/before.jpg" afterSrc="/after.jpg" />
    </FadeIn>
  </div>
</section>

      {/* process */}
      <section id="proces" className="relative mx-auto max-w-6xl px-6 pb-24">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-semibold">Cum lucrez</h2>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Contact", d: "Îmi spui problema, modelul și ce vrei să obții." },
            { n: "02", t: "Diagnostic", d: "Verific și îți spun clar ce merită făcut și de ce." },
            { n: "03", t: "Rezolvare", d: "Execut curat, testez, apoi îți dau recomandări." },
          ].map((x, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-white/50 text-sm">{x.n}</div>
              <div className="mt-2 text-white font-semibold text-lg">{x.t}</div>
              <div className="mt-2 text-white/70 leading-relaxed">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative mx-auto max-w-6xl px-6 pb-24">
  <FadeIn>
    <h2 className="text-2xl md:text-3xl font-semibold">Întrebări frecvente</h2>
  </FadeIn>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="md:pr-4">
      <FadeIn delay={0.06}>
        <p className="text-white/70 leading-relaxed">
          Răspunsuri rapide la cele mai comune întrebări. Dacă nu găsești ce cauți,
          scrie-mi pe WhatsApp și îți spun direct varianta optimă.
        </p>
      </FadeIn>

      <FadeIn delay={0.12}>
        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-black/25 p-5 backdrop-blur">
          <div className="text-white font-semibold">Tip</div>
          <div className="mt-2 text-white/70 text-sm leading-relaxed">
            Pentru diagnostic rapid, spune-mi: modelul, simptomele și ce ai încercat deja.
          </div>
        </div>
      </FadeIn>
    </div>

    <FadeIn delay={0.08}>
      <FAQAccordion
        items={[
          { q: "Cât durează o lucrare?", a: "Depinde de problemă. Instalare/optimizare de obicei în aceeași zi; upgrade-urile sunt rapide." },
          { q: "Îmi pierd fișierele?", a: "Nu, dacă vrei păstrarea lor. La nevoie fac backup înainte." },
          { q: "Oferi garanție?", a: "Da, pe manoperă (în condiții normale de utilizare)." },
          { q: "Te deplasezi la domiciliu?", a: "Da — Roman & împrejurimi. Stabilim rapid în funcție de program." },
          { q: "Ce trebuie să pregătesc?", a: "Încărcătorul, parola Wi-Fi și (dacă e instalare) acces la conturile necesare." },
          { q: "Curățare laptop?", a: "Da: curățare internă + pastă termică, cu atenție la model și temperaturi." },
        ]}
      />
    </FadeIn>
  </div>
</section>

      {/* contact */}
      <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-blue-500/20 bg-white/5 p-8 md:p-10 backdrop-blur">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Scrie-mi pe WhatsApp sau sună. Îmi spui pe scurt problema și îți zic varianta optimă.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                className="rounded-xl bg-white text-black px-5 py-3 font-semibold hover:opacity-90 transition"
              >
                WhatsApp
              </a>

              <a
                href={`tel:${PHONE.replaceAll(" ", "")}`}
                className="rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/5 transition"
              >
                Sună: {PHONE}
              </a>
            </div>

            <div className="mt-8 text-sm text-white/60">
              © {new Date().getFullYear()} Teo Services • Service PC & Laptop
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}