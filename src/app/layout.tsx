import "./globals.css";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Metadata } from "next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuiltByTeo | Website-uri Care Aduc Clienți",
  description: "Servicii premium de creare website-uri pentru afaceri locale din România. Design modern, orientat spre conversie, gata în 7 zile. Servicii IT secundare.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${outfit.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#0a0f1e] text-slate-200 selection:bg-[#00d4ff]/30 selection:text-white">
        <div className="grid-bg" />
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          <div className="orb-1" />
          <div className="orb-2" />
        </div>
        {children}
      </body>
    </html>
  );
}
