import { GeistSans } from "geist/font/sans";
import "../styles/globals.css";
import "../styles/nprogress.css";
import SiteHeader from "@/components/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SiteFooter from "@/components/site-footer";
import { ReactNode } from "react";
import { HandleRouteChangeComplete } from "@/lib/custom-router";

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
          <HandleRouteChangeComplete />
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
