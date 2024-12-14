import "./globals.css";
import { geistMono, geistSans } from "./fonts";
import { Layout } from "@/types/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@next/third-parties/google";

function RootLayout({ children }: Layout) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <GoogleAnalytics gaId="G-VTCTNLCNV5" />
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
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
