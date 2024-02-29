import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../styles/globals.css";
import SiteHeader from "@/components/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SiteFooter from "@/components/site-footer";
import { ReactNode } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Every day features",
  description: "A demo of every day features using NextJs app router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
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
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
