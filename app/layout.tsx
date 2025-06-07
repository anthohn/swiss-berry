import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/components/Header';
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ContactBtn from "./components/ContactBtn";
import Footer from "./components/Footer";
import { ThemeToggle } from "./theme-toggle";
import { ThemeProvider } from "next-themes";


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://swiss-berry.com'), // Ajoute cette ligne
  title: {
    default: "Swiss Berry - Développement web sur mesure",
    template: "%s - Swiss Berry"
  },
  description: "Chez Swiss Berry, nous sublimons votre présence en ligne avec des solutions web sur mesure, une optimisation SEO avancée, et une maintenance continue. Transformez votre site en une machine à conversions grâce à notre expertise et à des technologies de pointe telles que Next.js.",
  keywords: [
    "Swiss Berry",
    "développement web",
    "création de site web",
    "webdesign",
    "WordPress",
    "Next.js",
    "SEO",
    "maintenance de site web",
    "sites web performants",
    "design sur mesure",
    "conversion clients",
    "Genève",
    "Vaud",
    "Gland"
  ],
  authors: [{ name: "Swiss Berry", url: "https://swiss-berry.com" }],
  openGraph: {
    type: "website",
    url: "https://swiss-berry.com",
    title: "Swiss Berry - Développement web et SEO",
    description: "Sublimez votre présence en ligne avec des sites performants conçus sur mesure pour attirer et convertir.",
    images: [
      {
        url: "/svg/logo-text-blanc.svg",
        alt: "Swiss Berry Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swiss Berry - Développement web sur mesure",
    description: "Expertise en développement web, optimisation SEO et maintenance continue pour booster votre activité en ligne.",
    images: ["/svg/logo-text-blanc.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body suppressHydrationWarning={true} className="bg-background-light dark:bg-background-dark">
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Header />
          <div className="max-w-screen-2xl mx-auto">
              {children}
          </div>
          <ThemeToggle />
          <Footer />
          <Toaster position="top-right" />
          <ContactBtn/>
        </ThemeProvider>
      </body>
    </html>
  );
}
