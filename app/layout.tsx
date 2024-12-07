import "./globals.css";
import type { Metadata } from "next";
import { geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Antonio Arioli",
    default: "Antonio Arioli",
  },
  description: "Antonio Arioli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
