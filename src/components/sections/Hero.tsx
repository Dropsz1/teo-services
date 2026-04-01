"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm font-medium border border-white/10 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#00ffa3] mr-2 animate-pulse"></span>
              Disponibil pentru proiecte noi
            </span>
          </motion.div>

          <motion.h1 
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-8"
          >
            Website-uri Care <br className="hidden md:block"/>
            <span className="text-gradient-accent">Aduc Clienți</span>
          </motion.h1>

          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Construiesc prezențe online profesionale pentru afaceri mici din România. Un design care inspiră încredere, optimizat să genereze mai multe vânzări.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#servicii"
              className="group relative px-8 py-4 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/50 hover:bg-[#00d4ff]/20 hover:border-[#00d4ff] flex items-center gap-2 font-heading font-medium transition-all animate-glow w-full sm:w-auto justify-center"
            >
              Începe Proiectul
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portofoliu"
              className="px-8 py-4 text-slate-300 hover:text-white transition-colors font-medium flex items-center"
            >
              Vezi portofoliu <ArrowRight className="w-4 h-4 ml-2 opacity-50" />
            </a>
          </motion.div>

          <motion.div 
            variants={item}
            className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-slate-400 opacity-80"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00ffa3]" />
              <span>10+ site-uri livrate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00ffa3]" />
              <span>Gata în 7 zile</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00ffa3]" />
              <span>Suport IT inclus</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </header>
  );
}
