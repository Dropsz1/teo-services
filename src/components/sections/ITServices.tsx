"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { Wrench, Zap, Cpu, Thermometer, CheckCircle2, ShieldCheck, Download, Server, Monitor } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ITServices() {
  const hardwareServices = [
    { title: "Instalare Windows 10/11 + Optimizare", icon: <Download className="w-4 h-4 text-[#00d4ff]" /> },
    { title: "Curățare Profesională & Pastă Termică", icon: <Thermometer className="w-4 h-4 text-[#00d4ff]" /> },
    { title: "Asamblare PC Gaming Custom", icon: <Monitor className="w-4 h-4 text-[#00d4ff]" /> },
    { title: "Upgrade SSD / RAM / Componente", icon: <Cpu className="w-4 h-4 text-[#00d4ff]" /> },
    { title: "Diagnosticare Hardware & Software", icon: <Wrench className="w-4 h-4 text-[#00d4ff]" /> },
    { title: "Mentenanță Sisteme IT Business", icon: <Server className="w-4 h-4 text-[#00d4ff]" /> },
  ];

  const pricing = [
    { label: "Windows Setup", price: "150-250", suffix: "lei", sub: "Instalare + Drivere" },
    { label: "Mentenanță", price: "150-200", suffix: "lei", sub: "Curățare + Pastă" },
    { label: "Build Custom", price: "300-500", suffix: "lei", sub: "Asamblare Completă" },
  ];

  return (
    <AnimatedSection id="it-services" className="py-32 relative z-10 overflow-hidden" delay={0.2}>
      
      {/* Decorative Hardware Grid background line */}
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#00ffa3]/20 to-transparent"></div>
      
      {/* Ambient Hardware Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#00ffa3]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Offer & Personality */}
          <div>
            <Badge className="mb-4 bg-[#00ffa3]/10 text-[#00ffa3] border-[#00ffa3]/20">Hardware & Support</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Hardware-ul tău la <br />
              <span className="text-[#00ffa3]">performanță maximă</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg italic opacity-80">
              "Fiecare grad contează." Îmi tratez munca hardware cu aceeași precizie pe care o ofer codului meu. Rezultatul? Un sistem rece, silențios și extrem de rapid.
            </p>

            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00ffa3]/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#00ffa3]" />
                </div>
                <p className="text-sm text-slate-300 font-medium">Garanția unei intervenții de calitate, protejată ESD.</p>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00d4ff]/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-[#00d4ff]" />
                </div>
                <p className="text-sm text-slate-300 font-medium">Deplasare în Roman & împrejurimi pentru urgențe.</p>
              </div>
            </div>

            <a href="#contact" className="group inline-flex items-center gap-3 text-white font-heading font-bold text-lg hover:text-[#00ffa3] transition-colors">
              Programează o revizie
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00ffa3] group-hover:bg-[#00ffa3] group-hover:text-black transition-all">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </a>
          </div>

          {/* Right Column: Services & Costing */}
          <div>
            <GlassCard className="p-8 border-white/8 mb-8" hoverEffect={false}>
              <h3 className="text-xl font-heading font-bold text-white mb-8 flex items-center gap-3">
                <Wrench className="w-5 h-5 text-[#00ffa3]" />
                Servicii IT Hardware
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 mb-2">
                {hardwareServices.map((s, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00ffa3]/10 group-hover:border-[#00ffa3]/30 transition-all">
                      {s.icon}
                    </div>
                    <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors pt-1 leading-snug">{s.title}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Quick Price Tags */}
            <div className="grid sm:grid-cols-3 gap-4">
              {pricing.map((p, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#00ffa3]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <GlassCard className="!p-5 border-white/5 flex flex-col items-center text-center group-hover:border-[#00ffa3]/40 transition-all relative z-10" hoverEffect={true}>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-1">{p.label}</p>
                    <div className="flex items-baseline gap-0.5 mb-1 text-white group-hover:text-[#00ffa3] transition-colors">
                      <span className="text-xl font-heading font-bold">{p.price}</span>
                      <span className="text-[10px] font-bold opacity-50 uppercase">{p.suffix}</span>
                    </div>
                    <p className="text-[10px] text-slate-600 font-medium italic">{p.sub}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </AnimatedSection>
  );
}
