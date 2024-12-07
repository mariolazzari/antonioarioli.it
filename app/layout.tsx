import "./globals.css";
import type { Metadata } from "next";
import { geistMono, geistSans } from "./fonts";
import { Layout } from "@/types/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Antonio Arioli",
    default: "Antonio Arioli",
  },
  description: "Antonio Arioli",
};

function RootLayout({ children }: Layout) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="h-[calc(100dvh-100px)] overflow-y-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
