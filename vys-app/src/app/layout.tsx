// app/layout.tsx
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Outfit } from "next/font/google";
import ClientHeader from "@/components/ClientHeader"; // ← see next step

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VYS - Selling from a different angle",
  description: "Virtual Yard Sale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={outfit.variable}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {/*
            ClientHeader is a small client‐side component
            that will hide itself when pathname === "/sign-in".
          */}
          <ClientHeader />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
