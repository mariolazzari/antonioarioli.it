import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { PropsWithChildren } from "react";
import { SidebarProvider } from "../ui/sidebar";
import { ThemeProvider } from "./ThemeProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GoogleAnalytics gaId="G-VTCTNLCNV5" />
      <GoogleTagManager gtmId="GTM-KZGQ4ZQ" />

      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </>
  );
}
