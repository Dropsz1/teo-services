"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Mail, Phone, Send, CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";
import { PHONE, WHATSAPP } from "@/lib/constants";

export function CTAContact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}?text=Bună%20ziua,%20aș%20dori%20niste%20informații%20despre%20un%20proiect.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // Simulate real sending delay
    setTimeout(() => {
      setFormState("success");
    }, 1800);
  };

  return (
    <AnimatedSection id="contact" className="py-32 relative z-10" delay={0.2}>
      
      {/* Background Mesh Glow — Subtle */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[600px] bg-[#00d4ff]/5 blur-[120px] rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Direct Contact & Info */}
          <div className="flex flex-col justify-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-6 px-4 py-1.5 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 self-start">
              Contact
            </span>
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 tracking-tight leading-[1.1] text-white">
              Hai să dau <span className="text-[#00d4ff]">viață</span><br />
              proiectului tău
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-lg leading-relaxed">
              Ai o idee sau vrei să optimizezi afacerea ta online? Scrie-mi și îți răspund în cel mai scurt timp cu o propunere concretă de colaborare.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-12">
              {/* WhatsApp Item */}
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#25D366]/30 hover:bg-[#25D366]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Rapid</span>
                  <span className="text-lg font-heading font-bold text-white group-hover:text-[#25D366] transition-colors tracking-wide">WhatsApp Chat</span>
                </div>
                <ArrowUpRight className="ml-auto w-4 h-4 text-slate-600 group-hover:text-[#25D366] transition-colors" />
              </a>

              {/* Phone Item */}
              <a 
                href={`tel:${PHONE.replace(/\s/g, "")}`} 
                className="group flex items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Suna-ma</span>
                  <span className="text-lg font-heading font-bold text-white group-hover:text-[#00d4ff] transition-colors tracking-wide">{PHONE}</span>
                </div>
                <ArrowUpRight className="ml-auto w-4 h-4 text-slate-600 group-hover:text-[#00d4ff] transition-colors" />
              </a>
            </div>

            {/* Email + Response Rate */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center group">
                <Mail className="w-4 h-4 mr-2 group-hover:text-[#00d4ff] transition-colors" />
                <span className="group-hover:text-white transition-colors">contact@builtbyteo.ro</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-800"></div>
              <div className="flex items-center gap-2.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Răspund în maxim 2 ore</p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="relative">
            {/* Glow Decorative behind form */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#00d4ff]/5 blur-[100px] rounded-full z-0 pointer-events-none origin-center animate-pulse"></div>
            
            <div className="relative glass-panel rounded-[40px] px-8 py-10 md:p-12 border-white/10 z-10 overflow-hidden">
              
              {formState === "success" ? (
                <div className="text-center py-20 animate-in fade-in zoom-in-95 duration-700">
                  <div className="w-20 h-20 rounded-full bg-[#00ffa3]/20 border border-[#00ffa3]/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(0,255,163,0.2)]">
                    <CheckCircle2 className="w-10 h-10 text-[#00ffa3]" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-4 italic">Mesaj Trimis!</h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-xs mx-auto">Îți mulțumesc pentru încredere. Te voi contacta foarte curând pentru a discuta detaliile.</p>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="mt-10 px-8 py-3 rounded-full border border-white/10 text-slate-500 hover:text-white hover:border-white/20 transition-all text-xs font-bold uppercase tracking-[0.2em]"
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 ml-1">Numele tău</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Ex: Adrian Pop"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/[0.07] transition-all placeholder:text-slate-700 font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 ml-1">Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="contact@afacere.ro"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/[0.07] transition-all placeholder:text-slate-700 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 ml-1">Ce tip de proiect ai?</label>
                    <div className="relative">
                      <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00ffa3]/50 focus:bg-white/[0.07] transition-all appearance-none cursor-pointer font-medium pr-12">
                        <option value="site" className="bg-[#0a0f1e]">Site Prezentare Premium</option>
                        <option value="shop" className="bg-[#0a0f1e]">Magazin Online (E-commerce)</option>
                        <option value="dashboard" className="bg-[#0a0f1e]">Admin Dashboard / CRM Custom</option>
                        <option value="maintenance" className="bg-[#0a0f1e]">Mentenanță & Optimizare Web</option>
                        <option value="other" className="bg-[#0a0f1e]">Altceva revoluționar</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 ml-1">Cum te pot ajuta?</label>
                    <textarea 
                      required
                      placeholder="Descrie pe scurt ce ai nevoie și ce obiective ai..."
                      rows={5}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00ffa3]/50 focus:bg-white/[0.07] transition-all placeholder:text-slate-700 font-medium resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formState === "sending"}
                    type="submit"
                    className="w-full relative py-5 rounded-2xl bg-gradient-to-r from-[#00d4ff] to-[#00ffa3] text-black font-heading font-bold text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_40px_rgba(0,212,255,0.25)] group overflow-hidden disabled:opacity-70 disabled:cursor-wait"
                  >
                    <span className={`flex items-center justify-center transition-all duration-300 ${formState === "sending" ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}>
                      Trimite Mesajul
                      <Send className="w-6 h-6 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    
                    {formState === "sending" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-[3px] border-black/20 border-t-black rounded-full animate-spin"></div>
                      </div>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
