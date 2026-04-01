import { Mail, Globe, Camera, MapPin, Phone } from "lucide-react";
import { PHONE } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050712] border-t border-white/5 py-12 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-2">
            <a 
              href="#" 
              className="text-2xl font-heading font-bold tracking-tight text-white hover:text-[#00d4ff] transition-colors mb-4 block"
            >
              BuiltBy<span className="text-[#00d4ff]">Teo</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-6">
              Construiesc site-uri pentru afaceri mici, cu accent pe conversie și rezultate reale, nu pe termeni complecși.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-all">
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-4 uppercase tracking-wider text-sm">Legături Rapide</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="#servicii" className="text-slate-400 hover:text-white transition-colors">Servicii Web</a></li>
              <li><a href="#portofoliu" className="text-slate-400 hover:text-white transition-colors">Portofoliu</a></li>
              <li><a href="#proces" className="text-slate-400 hover:text-white transition-colors">Proces</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-4 uppercase tracking-wider text-sm">Contact & Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-[#00d4ff]" />
                Roman, jud. Neamț<br />(Servicii Web oferite la nivel național)
              </li>
              <li className="flex items-center text-slate-400 text-sm">
                <Mail className="w-4 h-4 mr-2 text-[#00d4ff]" />
                contact@teo-services.ro
              </li>
              <li className="flex items-center text-slate-400 text-sm">
                <Phone className="w-4 h-4 mr-2 text-[#00d4ff]" />
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-white transition-colors">{PHONE}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {currentYear} BuiltByTeo. Toate drepturile rezervate.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Termeni & Condiții</a>
            <a href="#" className="hover:text-white transition-colors">Politica GDPR</a>
            <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-bold text-slate-300">ANPC</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
