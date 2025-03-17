import { GeistSans } from "geist/font/sans";
import "../styles/globals.css";
import SiteHeader from "@/components/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SiteFooter from "@/components/site-footer";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AudioPlayerInitProvider } from "@/components/providers/audio-player-init-provider";
import type { Metadata } from "next";
import { AudioPlayerWrapper } from "@/components/features/music-streaming/implementation/audio-player-wrapper";

export const metadata: Metadata = {
  title: {
    default: "Next.js App Router",
    template: "%s | Next.js App Router",
  },
  metadataBase: new URL("https://next-app-gamma-lovat.vercel.app"),
  openGraph: {
    title: "Everyday features with Next.js App Router",
    description:
      "A demo of every day features and concepts using NextJs app router",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <SpeedInsights />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AudioPlayerInitProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              <SiteHeader />
              <main className="container flex-1">{children}</main>
              <SiteFooter />
              <AudioPlayerWrapper />
            </div>
          </AudioPlayerInitProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
