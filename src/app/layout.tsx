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
  title: {
    default: "KernelAI - Intelligent Coding Assistant",
    template: "%s | KernelAI",
  },

  description:
    "KernelAI is an advanced AI-powered coding assistant designed to enhance developer productivity by providing intelligent code explanations, debugging assistance, and automated code generation.",

  metadataBase: new URL("https://kernel-ai.vercel.app"),

  verification: {
    google: "cIpfNdHkzMpM_Wpuo6JXHOkMH_wEpHyrgBe_f46e5Ig",
  },

  keywords: [
    "KernelAI",
    "AI coding assistant",
    "code explanation AI",
    "code generation AI",
    "code debugging AI",
    "AI code debugger",
    "developer tools",
    "programming assistant",
    "kernel-ai",
    "Gemini AI",
    "Next.js AI project",
  ],

  authors: [{ name: "Omkar Ardekar" }],
  creator: "Omkar Ardekar",
  publisher: "KernelAI",

  other: {
    "profile:linkedin": "https://www.linkedin.com/in/omkarardekar09",
    "profile:github": "https://github.com/OmkarArdekar12",
  },

  openGraph: {
    title: "KernelAI - Intelligent Coding Assistant",
    description:
      "Explain, debug, and generate code using KernelAI — an advanced AI-powered coding assistant.",
    url: "https://kernel-ai.vercel.app",
    siteName: "KernelAI",
    images: [
      {
        url: "/og-kernelai.png",
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
    images: ["/og-kernelai.png"],
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

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "KernelAI",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web",
              url: "https://kernel-ai.vercel.app",
              description:
                "AI-powered coding assistant for code explanation, debugging, and generation with structured, Markdown-aware output.",
              creator: {
                "@type": "Person",
                name: "Omkar Ardekar",
                url: "https://kernel-ai.vercel.app",
                sameAs: [
                  "https://www.linkedin.com/in/omkarardekar09",
                  "https://github.com/OmkarArdekar12",
                ],
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
