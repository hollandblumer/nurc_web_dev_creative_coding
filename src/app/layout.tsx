import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VisualBackground from "@/components/VisualBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NURC Creative Coding Workshop",
  description: "Web development and creative coding curriculum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Necessary for the Perlin noise background logic */}
        <script
          src="https://cdn.jsdelivr.net/gh/josephg/noisejs/perlin.js"
          async
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true} // Add this line
      >
        <VisualBackground />
        {children}
      </body>
    </html>
  );
}
