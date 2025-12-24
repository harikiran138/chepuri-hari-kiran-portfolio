import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Chepuri Hari Kiran - Web Developer Portfolio",
  description: "Professional portfolio of Chepuri Hari Kiran, a passionate Web Developer specializing in modern web applications with React, Next.js, and TypeScript.",
  keywords: ["web developer", "portfolio", "Chepuri Hari Kiran", "React", "Next.js", "TypeScript", "Frontend Developer"],
  authors: [{ name: "Chepuri Hari Kiran" }],
  openGraph: {
    title: "Chepuri Hari Kiran - Web Developer",
    description: "Professional Web Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
