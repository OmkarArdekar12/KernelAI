import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KernelAI - Intelligent Coding Assistant",

  description:
    "KernelAI is an advanced AI-powered coding assistant designed to enhance developer productivity by providing intelligent code explanations, debugging assistance, and automated code generation.",

  verification: {
    google: "cIpfNdHkzMpM_Wpuo6JXHOkMH_wEpHyrgBe_f46e5Ig",
  },

  keywords: [
    "KernelAI",
    "AI coding assistant",
    "code generation AI",
    "AI code debugger",
    "developer tools",
    "programming assistant",
    "Gemini AI",
    "Next.js AI project",
  ],

  authors: [{ name: "Omkar Ardekar" }],
  creator: "Omkar Ardekar",
  publisher: "KernelAI",

  metadataBase: new URL("https://kernelai.vercel.app"),

  openGraph: {
    title: "KernelAI - Intelligent Coding Assistant",
    description:
      "Explain, debug, and generate code using KernelAI — an advanced AI-powered coding assistant.",
    url: "https://kernelai.vercel.app",
    siteName: "KernelAI",
    images: [
      {
        url: "/kernelAI-logo.png",
        width: 1200,
        height: 630,
        alt: "KernelAI - Intelligent Coding Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KernelAI - Intelligent Coding Assistant",
    description:
      "Your intelligent coding companion to explain, debug, and generate code with AI.",
    images: ["/kernelAI-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
