"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MessageSquare, PenTool, Code, CheckCircle, Search, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Analizez Ideea",
      desc: "Stabilim exact ce ai nevoie și care e audiența ta. Fără termeni complicați, doar obiective clare.",
      icon: <Search className="w-6 h-6" />
    },
    {
      num: "02",
      title: "Proiectez Design-ul",
      desc: "Creez interfața vizuală care să atragă clienții. Îți trimit prima variantă pentru feedback.",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      num: "03",
      title: "Codific Soluția",
      desc: "Transform designul în cod performant. Site-ul tău prinde viață și e optimizat pentru viteză.",
      icon: <Code className="w-6 h-6" />
    },
    {
      num: "04",
      title: "Lansez & Optimizez",
      desc: "Predau site-ul, îl lansez online și te învăț cum să îl gestionezi singur pe viitor.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <AnimatedSection id="proces" className="py-24 relative z-10" delay={0.1}>
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-20">
          <Badge className="mb-4">Cum Lucrez</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Proces Tehnic Simplificat</h2>
        </div>

        <div className="relative">
          {/* SVG Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px z-0">
             <svg width="100%" height="2" viewBox="0 0 1200 2" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
               <path d="M0 1H1200" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="8 8"/>
               <defs>
                 <linearGradient id="lineGrad" x1="0" y1="0.5" x2="1200" y2="0.5" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#00d4ff" stopOpacity="0"/>
                   <stop offset="0.2" stopColor="#00d4ff" stopOpacity="0.5"/>
                   <stop offset="0.8" stopColor="#00ffa3" stopOpacity="0.5"/>
                   <stop offset="1" stopColor="#00ffa3" stopOpacity="0"/>
                 </linearGradient>
               </defs>
             </svg>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 group flex flex-col items-center lg:items-start text-center lg:text-left">
                
                {/* Step Circle */}
                <div className="w-24 h-24 rounded-3xl glass-panel flex items-center justify-center mb-8 border-[#00d4ff]/15 text-[#00d4ff] relative transition-all duration-500 group-hover:scale-110 group-hover:border-[#00d4ff]/40 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00d4ff]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {step.icon}
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-[#0a0f1e] flex items-center justify-center font-heading font-extrabold text-sm border border-white/10 text-white shadow-xl">
                    {step.num}
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-[#00d4ff] transition-colors">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] opacity-80 group-hover:opacity-100 transition-opacity">{step.desc}</p>
                
                {/* Mobile vertical line helper (only visible on mobile) */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden w-px h-12 bg-white/5 my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
