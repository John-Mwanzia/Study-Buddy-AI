import localFont from "next/font/local";

import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn, constructMetadata } from "@/lib/utils";

import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";

const fontRegularSans = localFont({
  src: "../assets/fonts/Inter-Regular.ttf",
  variable: "--font-sans",
});

const fontBoldSans = localFont({
  src: "../assets/fonts/Inter-Regular.ttf",
  variable: "--font-BoldSans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = constructMetadata();

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head />
      <Providers>
        <body
          className={cn(
            "grainy min-h-screen font-sans_regular antialiased",
            fontRegularSans.variable,
            fontBoldSans.variable,
            fontHeading.variable,
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="light">
            <Toaster />
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  );
}
