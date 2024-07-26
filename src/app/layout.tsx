import { GeistSans } from "geist/font/sans";
import "../styles/globals.css";
import SiteHeader from "@/components/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SiteFooter from "@/components/site-footer";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AudioPlayerInitProvider } from "@/components/providers/audio-player-init-provider";
import { Metadata } from "next";

// 'use client' doesn't make the component fully client side rendered
// so need to disable pre-rendering since we are using local storage hook
const AudioPlayer = dynamic(
  () =>
    import("@/components/features/music-streaming/implementation/audio-player"),
  {
    ssr: false,
  }
);

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
              <AudioPlayer />
            </div>
          </AudioPlayerInitProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
