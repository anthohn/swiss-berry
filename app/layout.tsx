import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/components/Header'

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
    <html lang="fr">
      <body className="flex flex-col">
        <Header />
          {children}
      </body>
    </html>
  );
}
