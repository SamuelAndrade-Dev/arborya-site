import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";

export const metadata: Metadata = {
  title: "Arborya",
  description: "Fossas ecológicas e soluções em saneamento básico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Header />
      <body>{children}</body>
    </html>
  );
}
