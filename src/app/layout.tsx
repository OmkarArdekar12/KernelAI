import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KernelAI – Intelligent Coding Assistant",
  description:
    "KernelAI is an intelligent coding assistant powered by advanced AI reasoning. Explain, debug, and generate code faster with confidence.",

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
