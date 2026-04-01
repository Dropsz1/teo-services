import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WebServices } from "@/components/sections/WebServices";
import { WhyUs } from "@/components/sections/WhyUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { ITServices } from "@/components/sections/ITServices";
import { CTAContact } from "@/components/sections/CTAContact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#0a0f1e] overflow-hidden selection:bg-[#00d4ff]/30 selection:text-white pb-0">
      <Navbar />
      <Hero />
      <WebServices />
      <WhyUs />
      <Portfolio />
      <Process />
      <ITServices />
      <CTAContact />
      <Footer />
    </main>
  );
}
