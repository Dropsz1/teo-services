"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2, ArrowRight, LayoutDashboard, Globe, Zap, Search, Activity, BarChart3, Database, ShoppingCart, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

const PATH = "M 250 2 L 476 2 Q 498 2 498 24 L 498 576 Q 498 598 476 598 L 24 598 Q 2 598 2 576 L 2 24 Q 2 2 24 2 L 250 2";

const pillars = [
  { 
    icon: <Globe className="w-5 h-5 text-[#00d4ff]" />, 
    title: "Brand & Prezentare", 
    desc: "Site-uri ultra-rapide cu design unic, gândite să transforme vizitatorul într-un client fidel. Optimizate SEO local.",
    items: ["Design Custom", "SEO Performance", "Contact Forms"]
  },
  { 
    icon: <ShoppingCart className="w-5 h-5 text-[#00ffa3]" />, 
    title: "E-commerce Pro", 
    desc: "Magazine online care nu doar arată bine, ci vând eficient 24/7. Integrare plăți, stocuri și gestiune.",
    items: ["Plăți Securizate", "Gestiune Stoc", "UX de Vânzare"]
  },
  { 
    icon: <Database className="w-5 h-5 text-white/80" />, 
    title: "Sisteme & Admin", 
    desc: "Platforme complexe, CRM-uri și panouri de administrare private pentru controlul total al business-ului tău.",
    items: ["Custom Backend", "Data Analytics", "Acces Securizat"]
  },
];

export function WebServices() {
  return (
    <AnimatedSection id="servicii" className="py-32 relative z-10 overflow-hidden">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-px h-1/2 bg-gradient-to-b from-transparent via-[#00d4ff]/10 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl text-left">
            <Badge className="mb-4">Expertiza mea</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] tracking-tight">
              Construiesc viitorul <br />
              <span className="text-[#00d4ff]">digital al afacerii tale</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 max-w-sm">
             <p className="text-lg text-slate-400 md:text-right leading-relaxed italic">
               "Soluții tehnice de la concept la lansare, fără compromisuri la calitate."
             </p>
             <div className="flex gap-4 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <span className="text-[10px] font-bold text-white tracking-widest uppercase border border-white/20 px-2 py-0.5 rounded">Next.js</span>
                <span className="text-[10px] font-bold text-white tracking-widest uppercase border border-white/20 px-2 py-0.5 rounded">React 19</span>
                <span className="text-[10px] font-bold text-white tracking-widest uppercase border border-white/20 px-2 py-0.5 rounded">Tailwind</span>
             </div>
          </div>
        </div>

        {/* Main Layout: Expansive Grid */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* RIGHT COLUMN (DESKTOP ORDER) — Services Deep Dive */}
          <div className="lg:col-span-7 space-y-12 order-2 lg:order-1">
             <div className="grid gap-6">
                {pillars.map((p, i) => (
                   <GlassCard key={i} className="group p-8 border-white/5 hover:border-[#00d4ff]/20 transition-all" hoverEffect={true}>
                      <div className="flex flex-col md:flex-row items-start gap-6">
                         <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00d4ff]/10 transition-colors">
                            {p.icon}
                         </div>
                         <div className="flex-1">
                            <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">{p.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">{p.desc}</p>
                            <div className="flex flex-wrap gap-3">
                               {p.items.map((item, ii) => (
                                  <span key={ii} className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#00ffa3] font-bold bg-[#00ffa3]/5 px-3 py-1 rounded-full border border-[#00ffa3]/10 italic">
                                     <CheckCircle2 className="w-3 h-3" />
                                     {item}
                                  </span>
                               ))}
                            </div>
                         </div>
                      </div>
                   </GlassCard>
                ))}
             </div>

             {/* Dynamic CTA at the bottom of copy */}
             <div className="p-8 rounded-[32px] border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2 italic">Proiecte custom</p>
                  <p className="text-3xl font-heading font-bold h-10 text-white">
                    Începem cu <span className="text-[#00ffa3]">300€</span>
                  </p>
                </div>
                <a
                  href="#contact"
                  className="w-full md:w-auto px-10 py-5 rounded-2xl bg-[#00d4ff] text-black font-heading font-extrabold text-xl hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_15px_40px_rgba(0,212,255,0.25)] flex items-center justify-center gap-4 italic"
                >
                  Start Proiect
                  <Rocket className="w-5 h-5" />
                </a>
             </div>
          </div>

          {/* LEFT COLUMN (DESKTOP ORDER) — HUGE PHOTO & Architectural UI */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center order-1 lg:order-2">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[#00d4ff]/5 blur-[120px] rounded-full pointer-events-none scale-150"></div>

            {/* Floating Detail 1: PageSpeed - Moved to bottom-left area */}
            <div className="absolute -top-12 right-0 md:-right-8 z-30 animate-in fade-in zoom-in-95 duration-1000">
               <div className="glass-panel p-4 rounded-3xl border-[#00ffa3]/20 flex items-center gap-4 bg-black/40 backdrop-blur-3xl shadow-2xl">
                  <div className="w-12 h-12 rounded-full border-2 border-[#00ffa3] flex items-center justify-center text-[#00ffa3] font-bold shadow-[0_0_15px_rgba(0,255,163,0.3)]">
                    100
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest italic">Performance</p>
                    <p className="text-xs font-bold text-white">Google Rank Ready</p>
                  </div>
               </div>
            </div>

            {/* Floating Detail 2: Live Traffic - Increased size */}
            <div className="absolute top-1/4 -left-12 z-30 hidden xl:block animate-in fade-in slide-in-from-left duration-1000">
               <div className="glass-panel p-6 rounded-[32px] border-[#00d4ff]/20 bg-black/60 shadow-2xl">
                  <p className="text-[10px] uppercase tracking-widest text-[#00d4ff] font-bold mb-4 italic flex items-center gap-2">
                     <Activity className="w-3 h-3" /> Live Conversions
                  </p>
                  <div className="flex items-end gap-1.5 h-12">
                    {[40, 60, 45, 90, 65, 80, 50, 100, 75, 45, 85].map((h, i) => (
                      <div key={i} className="w-1.5 bg-gradient-to-t from-[#00d4ff] to-[#00ffa3] rounded-full opacity-60" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
               </div>
            </div>

            {/* THE LARGER PHOTO CARD */}
            <div className="relative w-full max-w-md lg:max-w-xl z-20" style={{ padding: "1px" }}>
              
              {/* Massive Snake SVG — Recalculated for max-w-xl (approx 500x600 viewBox) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                viewBox="0 0 500 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                   <filter id="p-glow-huge" x="-20%" y="-20%" width="140%" height="140%">
                     <feGaussianBlur stdDeviation="8" result="blur"/>
                     <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                   </filter>
                </defs>
                {/* Dual Color Snake Light */}
                <path pathLength="1000" d={PATH} stroke="#00ffa3" strokeWidth="4" strokeOpacity="0.15"
                  strokeLinecap="round" strokeDasharray="500 500" fill="none"
                  style={{ animation: "snakeLight 10s linear infinite reverse" }}/>
                
                <path pathLength="1000" d={PATH} stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.8"
                  strokeLinecap="round" strokeDasharray="300 700" fill="none"
                  filter="url(#p-glow-huge)" style={{ animation: "snakeLight 6s linear infinite" }}/>
              </svg>

              {/* IMAGE CONTAINER */}
              <div className="relative w-full aspect-[5/6] rounded-[48px] overflow-hidden bg-[#0d1424] border border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
                 <Image
                    src="/me.jpg"
                    alt="Teo — Premium Web Services"
                    fill
                    className="object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 600px"
                    priority
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent" />
                 
                 {/* ID Badge overlay — Architectural touch */}
                 <div className="absolute top-8 left-8">
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl">
                       <p className="text-[10px] font-black text-[#00d4ff]/80 tracking-[0.4em] uppercase">BuiltByTeo // V1.0</p>
                    </div>
                 </div>

                 {/* Availability Float */}
                 <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex items-center gap-3 bg-white/[0.05] backdrop-blur-3xl border border-white/10 rounded-3xl px-6 py-4 shadow-2xl">
                       <div className="relative w-3 h-3">
                          <div className="absolute inset-0 bg-[#00ffa3] rounded-full animate-ping opacity-40"></div>
                          <div className="relative w-3 h-3 bg-[#00ffa3] rounded-full"></div>
                       </div>
                       <p className="text-sm font-heading font-bold text-white italic tracking-wide uppercase">Ready for your project</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
}
