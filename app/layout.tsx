import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/components/Header';
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ContactBtn from "./components/ContactBtn";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://swiss-berry.com'), // Ajoute cette ligne
  title: {
    default: "Swissberry - Développement web sur mesure",
    template: "%s - Swissberry"
  },
  description: "Chez Swiss Berry, nous sublimons votre présence en ligne avec des solutions web sur mesure, une optimisation SEO avancée, et une maintenance continue. Transformez votre site en une machine à conversions grâce à notre expertise et à des technologies de pointe telles que Next.js.",
  keywords: [
    "Swissberry",
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
  authors: [{ name: "Swissberry", url: "https://swiss-berry.com" }],
  openGraph: {
    type: "website",
    url: "https://swiss-berry.com",
    title: "Swissberry - Développement web et SEO",
    description: "Sublimez votre présence en ligne avec des sites performants conçus sur mesure pour attirer et convertir.",
    images: [
      {
        url: "/svg/logo-text-blanc.svg",
        alt: "Swissberry Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swissberry - Développement web sur mesure",
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
    <html lang="fr" className={inter.className} suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark">
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Header />
          <div className="max-w-screen-2xl mx-auto">
              {children}
          </div>
          <Footer />
          <Toaster position="top-right" />
          <ContactBtn/>
        </ThemeProvider>
      </body>
    </html>
  );
}
