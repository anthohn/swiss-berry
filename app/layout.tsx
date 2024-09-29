import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/components/Header'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Swiss Berry",
    template: "%s - Swiss Berry"

  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="flex flex-col">
        <Header />
          {children}
      </body>
    </html>
  );
}
