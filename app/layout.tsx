import "./globals.css";
import type { Metadata } from "next";
import { AppSidebar } from "@/components/AppSidebar";
import { Layout } from "@/types/Layout";
import { Providers } from "@/components/Providers";
import { Appbar } from "@/components/Appbar";
import { classFonts } from "./fonts";
import { WhatsApp } from "@/components/Buttons";

export const metadata: Metadata = {
  title: {
    default: "Antonio Arioli Discipline Bio",
    template: `%s | Antonio Arioli Discipline Bio`,
  },
  description:
    "Antonio Arioli, Discipline bio naturali, Trattamenti Shiatsu, Riflessologia Plantare, Kinesiologia emozionale, ipnosi, Bergamo, Brescia",
  keywords:
    "shiatsu, moxa, trattamenti olistici, benessere, salute, armonia, energy taping, kinesiologia, medicina classica cinese, guarigione, valle brembana, brescia, crescita personale, discipline bio naturali, biodinamica, riflessologia, ipnosi",
  creator: "Mario Lazzari",
  authors: [
    { name: "Antonio Arioli" },
    { name: "Mario Lazzari", url: "https://mariolazzari.it" },
  ],
  applicationName: "AntonioArioli",
  metadataBase: new URL("https://antonioarioli.it"),
  alternates: {
    canonical: "https://antonioarioli.it",
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
      <body className={classFonts}>
        <Providers>
          <AppSidebar />
          <div className="flex flex-col w-full overflow-y-auto">
            <Appbar />
            <main className="h-[calc(100dvh-50px)] overflow-y-auto">
              {children}
            </main>
          </div>
        </Providers>
        <WhatsApp />
      </body>
    </html>
  );
}

export default RootLayout;
