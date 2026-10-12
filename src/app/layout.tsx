import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brownstonehubsolutions.com"),
  title: {
    default: "Brownstone Hub Solutions | Small Business Websites & AI Automation",
    template: "%s | Brownstone Hub Solutions",
  },
  description:
    "Brownstone Hub Solutions builds websites for small businesses and AI-agent workflows that streamline everyday work, alongside custom software, dashboards, reporting, and integrations.",
  keywords: [
    "AI automation solutions",
    "custom AI automation",
    "business process automation",
    "SMB automation services",
    "small business website development",
    "websites for small businesses",
    "AI agents for small business",
    "AI workflow automation",
    "compliance workflow automation",
    "bank reconciliation automation",
    "custom software for small businesses",
    "internal business tools",
    "reporting automation",
    "fractional CTO services",
    "data analysis platforms",
    "workflow automation consulting",
  ],
  authors: [{ name: "Brownstone Hub LLC" }],
  creator: "Brownstone Hub Solutions",
  publisher: "Brownstone Hub LLC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brownstonehubsolutions.com",
    siteName: "Brownstone Hub Solutions",
    title: "Brownstone Hub Solutions | Websites & AI Automation",
    description:
      "Websites for small businesses and AI-agent workflows built around the way your business works.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brownstone Hub Solutions | Websites & AI Automation",
    description:
      "Small business websites and practical AI-agent workflows built around your business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${space.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
