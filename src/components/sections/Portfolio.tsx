"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Layout, Smartphone, Globe } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

export function Portfolio() {
  return (
    <AnimatedSection id="portofoliu" className="py-32 relative z-10" delay={0.2}>
      
      {/* Decorative SVG grid line — lateral anchor */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#00d4ff]/20 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <Badge className="mb-4">Portofoliu</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight">
              Proiecte care <br />
              <span className="text-[#00d4ff]">vorbesc vizual</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed hidden md:block">
            Construiesc experiențe digitale unice. Nu doar cod, ci identități care rezonează cu publicul tău.
          </p>
        </div>

        {/* Featured Project Card — TudorFade.ro */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Ambient Shadow/Glow behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff]/10 to-[#00ffa3]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <GlassCard className="relative overflow-hidden p-0 border-[#00d4ff]/15 rounded-[40px]" hoverEffect={false}>
              <div className="grid lg:grid-cols-12 items-stretch">
                
                {/* Left Side: Detail Area */}
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex -space-x-1">
                      <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff]">
                        <Globe className="w-4 h-4" />
                      </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#00ffa3]">Project Live</span>
                  </div>

                  <h3 className="text-4xl font-heading font-bold text-white mb-6">TudorFade.ro</h3>
                  
                  <div className="space-y-4 mb-10">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] mt-2"></div>
                      <p className="text-slate-400 text-sm">Design custom de la zero, axat pe estetică dark-premium și UX intuitiv.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] mt-2"></div>
                      <p className="text-slate-400 text-sm">Performanță extremă & SEO local optimizat pentru a atrage clienți zilnic.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a 
                      href="https://tudorfade.ro" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-[#00d4ff] hover:text-black transition-all group/link"
                    >
                      Vezi Live
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Right Side: Mockup Area */}
                <div className="lg:col-span-7 bg-gradient-to-br from-[#0a1020] to-[#0d1424] p-1 lg:p-1.5 order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/5">
                  <div className="relative h-[300px] sm:h-[400px] lg:h-full min-h-[400px] overflow-hidden rounded-[32px] lg:rounded-r-[38.5px] lg:rounded-l-none group-hover:px-4 group-hover:block-hidden transition-all duration-700">
                    
                    {/* Browser Mockup internal elements */}
                    <div className="absolute inset-x-8 top-12 bottom-0 bg-[#0a0f1e] rounded-t-2xl border-t border-x border-white/10 shadow-2xl overflow-hidden z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                      
                      {/* Browser Header */}
                      <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/5 border border-white/10"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-white/5 border border-white/10"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-white/5 border border-white/10"></div>
                        </div>
                        <div className="flex-1 max-w-[200px] h-5 bg-white/5 rounded-full mx-auto flex items-center justify-center px-3">
                           <span className="text-[10px] text-slate-600 font-mono">tudorfade.ro</span>
                        </div>
                      </div>

                      {/* Content Preview */}
                      <div className="p-12 flex flex-col items-center justify-center h-full relative group-hover:scale-110 transition-transform duration-1000">
                        {/* Decorative glow inside browser */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00d4ff]/10 blur-[80px]"></div>
                        
                        <h4 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">Tudorfade</h4>
                        <p className="mt-4 text-[#00ffa3] font-mono text-sm tracking-[0.4em] uppercase font-bold opacity-60">High-End Barbershop</p>
                        
                        {/* Scanline Effect overlay on mockup */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
                      </div>
                    </div>

                    {/* Reflection SVG Highlight */}
                    <svg className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] pointer-events-none z-20 opacity-40 group-hover:opacity-60 transition-opacity duration-1000" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <linearGradient id="refGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="white" stopOpacity="0"/>
                        <stop offset="45%" stopColor="white" stopOpacity="0.08"/>
                        <stop offset="50%" stopColor="white" stopOpacity="0.15"/>
                        <stop offset="55%" stopColor="white" stopOpacity="0.08"/>
                        <stop offset="100%" stopColor="white" stopOpacity="0"/>
                      </linearGradient>
                      <rect width="100" height="100" fill="url(#refGrad)" transform="rotate(-15)"/>
                    </svg>
                  </div>
                </div>

              </div>
            </GlassCard>
          </div>
        </div>

        {/* Future/Slot indication */}
        <div className="mt-20 flex justify-center text-center">
           <div className="px-6 py-4 rounded-3xl border border-white/5 bg-white/[0.02] inline-flex items-center gap-4 text-slate-500 hover:text-slate-400 transition-colors cursor-default">
             <div className="flex gap-1.5 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest italic">New project on the desk</span>
             </div>
             <div className="h-4 w-px bg-white/10"></div>
             <p className="text-sm">Următorul proiect poate fi chiar al tău. Hai să discutăm!</p>
           </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
