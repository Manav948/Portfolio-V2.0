import type { Metadata } from "next";
import { Geist, Geist_Mono, Satisfy } from "next/font/google";
import "./globals.css";
import GrowingBranches from "@/components/ui/GrowingBranches";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manavvalani.in"),
  title: {
    default: "Manav Valani | Fullstack Developer",
    template: "%s | Manav Valani",
  },
  description:
    "Fullstack developer from India who enjoys building interactive web applications using React, Next.js, TypeScript, Node.js, and modern tools.",
  keywords: [
    "Manav Valani",
    "Manav Valani Portfolio",
    "Fullstack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer India",
    "Dhoraji",
    "Rajkot",
  ],
  authors: [{ name: "Manav Valani", url: "https://manavvalani.in" }],
  creator: "Manav Valani",
  icons: {
    icon: "/m-icon.svg",
    shortcut: "/m-icon.svg",
    apple: "/m-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manavvalani.in",
    title: "Manav Valani | Fullstack Developer",
    description:
      "Fullstack developer from India who enjoys building interactive web applications using React, Next.js, TypeScript, Node.js, and modern tools.",
    siteName: "Manav Valani Portfolio",
    images: [
      {
        url: "/me.png",
        width: 400,
        height: 400,
        alt: "Manav Valani",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Manav Valani | Fullstack Developer",
    description:
      "Fullstack developer from India who enjoys building interactive web applications using React, Next.js, TypeScript, Node.js, and modern tools.",
    creator: "@ManavValani",
    images: ["/me.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${satisfy.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground relative overflow-x-hidden">
         <GrowingBranches />
         <LenisProvider>
           {children}
         </LenisProvider>
      </body>
    </html>
  );
}
