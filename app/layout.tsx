import "./globals.css";
import type { Metadata } from "next";
import { geistMono, geistSans } from "./fonts";
import { Layout } from "@/types/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@next/third-parties/google";
export const metadata: Metadata = {
  title: {
    default: "Antonio Arioli Discipline Bio",
    template: `%s | Antonio Arioli Discipline Bio`,
  },
  description:
    "Antonio Arioli, Discipline bio naturali, Trattamenti Shiatsu, Riflessologia Plantare, Bergamo, Brescia",
  keywords:
    "shiatsu, moxa, trattamenti olistici, benessere, salute, armonia, energy taping, kinesiologia, medicina classica cinese, guarigione, valle brembana, brescia, crescita personale, discipline bio naturali, biodinamica, riflessologia",
  creator: "Mario Lazzari",
  authors: [
    { name: "Antonio Arioli" },
    { name: "Mario Lazzari", url: "https://mariolazzari.it" },
  ],
  applicationName: "AntonioArioli",
  metadataBase: new URL("https://antonioarioli.it"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Antonio Arioli",
    description: "Antonio Arioli - Discipline Bio",
    url: "https://antonioarioli.it",
    siteName: "AntonioArioli",
    images: [
      {
        url: "https://antonioarioli.it/icons/logo.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "it",
    type: "website",
  },
};
function RootLayout({ children }: Layout) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <GoogleAnalytics gaId="G-VTCTNLCNV5" />
      </head>

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
