import "./globals.css";
import { geistMono, geistSans } from "./fonts";
import { Layout } from "@/types/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { GoogleTagManager } from "@next/third-parties/google";
import { Cookies } from "@/components/Cookies";

function RootLayout({ children }: Layout) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId="GTM-TLN8L5B" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="h-[calc(100dvh-100px)] overflow-y-auto p-4">
            {children}
          </main>
          <Footer />
          <Cookies />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
