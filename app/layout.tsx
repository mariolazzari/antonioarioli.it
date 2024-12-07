import "./globals.css";
import type { Metadata } from "next";
import { geistMono, geistSans } from "./fonts";
import { Layout } from "@/types/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: {
    template: "%s | Antonio Arioli Discipline Bio",
    default: "Antonio Arioli",
  },
  description: "Antonio Arioli discipline bio",
  authors: [
    {
      name: "Mario Lazzari",
      url: "https://mariolazzari.it",
    },
  ],
};

function RootLayout({ children }: Layout) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="h-[calc(100dvh-100px)] overflow-y-auto p-4">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
