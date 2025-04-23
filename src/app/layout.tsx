import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Playfair_Display as FontSerif } from "next/font/google";
import { JetBrains_Mono as FontMono } from "next/font/google";

import "./globals.css";
import { ThemeToggle } from "@/utils/Theme";
import { cn } from "@/utils";
import Navbar from "@/layout/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/layout/Footer";
import { footerLinkGroups, socialLinks } from "@/constants/footer";
import Provider from "./provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen  font-sans antialiased dark")}
        data-new-gr-c-s-check-loaded="14.1232.0"
        suppressHydrationWarning
      >
        <Provider>
          <Navbar />

          <main className="">{children}</main>
          <Footer
            linkGroups={footerLinkGroups}
            copyrightText="© 2025, All Rights Reserved - MyJewel"
            socialLinks={socialLinks}
          />
        </Provider>
      </body>
    </html>
  );
}
