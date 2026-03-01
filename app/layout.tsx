import "./globals.css";

export const metadata = {
  title: "Teo Services",
  description: "Service PC & Laptop • Instalări, optimizări, upgrade SSD/RAM, curățare & mentenanță",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}