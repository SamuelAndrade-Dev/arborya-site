import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";
import "./globals.css"

export const metadata: Metadata = {
  title: "Arborya",
  description: "Fossas ecológicas e soluções em saneamento básico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
