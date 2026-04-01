"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { Zap, Search, LayoutTemplate, PiggyBank } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      title: "Design Modern, Nu Template",
      description: "Nu folosim o temă WordPress descărcată de pe net. Construim fiecare site de la zero pentru identitatea ta.",
      icon: <LayoutTemplate className="w-6 h-6 text-[#00ffa3]" />,
    },
    {
      title: "Optimizat pentru Google (SEO)",
      description: "Site-ul va fi creat tehnic corect ca să apari pe primele pagini la căutările locale în Roman și Neamț.",
      icon: <Search className="w-6 h-6 text-[#00ffa3]" />,
    },
    {
      title: "Rezolvat în 7 Zile",
      description: "Fără amânări nesfârșite. Odată ce avem textul și pozele, în o săptămână site-ul tău e live și perfect vizibil.",
      icon: <Zap className="w-6 h-6 text-[#00ffa3]" />,
    },
    {
      title: "Preț Corect, Fără Surprize",
      description: "Costul discutat inițial este costul final. Fără abonamente ascunse sau taxe de mentenanță exagerate.",
      icon: <PiggyBank className="w-6 h-6 text-[#00ffa3]" />,
    },
  ];

  return (
    <AnimatedSection className="py-24 relative z-10" delay={0.1}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              De ce să lucrezi cu mine?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Sunt orientat spre rezultatele tale. Un site nu înseamnă doar un design drăguț – înseamnă un instrument care îți aduce bani. Iar eu mă pricep să-l construiesc prompt.
            </p>
            <a href="#contact" className="text-[#00d4ff] hover:text-white flex items-center font-medium transition-colors">
              Află mai multe detalii <span className="ml-2">→</span>
            </a>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, idx) => (
              <GlassCard key={idx} className="p-6 md:p-6" hoverEffect={true}>
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold font-heading mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{reason.description}</p>
              </GlassCard>
            ))}
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
