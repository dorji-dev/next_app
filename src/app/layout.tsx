import { GeistSans } from "geist/font/sans";
import "../styles/globals.css";
import SiteHeader from "@/components/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SiteFooter from "@/components/site-footer";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

// 'use client' doesn't make the component fully client side rendered
// so need to disable pre-rendering since we are using local storage hook
const AudioPlayer = dynamic(
  () =>
    import("@/components/features/music-streaming/implementation/audio-player"),
  {
    ssr: false,
  }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="container flex-1">{children}</main>
            <SiteFooter />
            <AudioPlayer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
