import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brownstonehubsolutions.com"),
  title: {
    default: "Brownstone Hub Solutions | AI Automation & Custom Software for SMBs",
    template: "%s | Brownstone Hub Solutions",
  },
  description:
    "Brownstone Hub Solutions builds practical AI workflow automation, reporting automation, compliance systems, bank reconciliation tools, dashboards, and custom software for small and mid-sized businesses.",
  keywords: [
    "AI automation solutions",
    "custom AI automation",
    "business process automation",
    "SMB automation services",
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
    title: "Brownstone Hub Solutions | Intelligent Workflow Automation",
    description:
      "AI-powered automation and custom technology systems for reporting, compliance, reconciliation, data-heavy workflows, and internal business tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brownstone Hub Solutions | AI Automation & Custom Software",
    description:
      "Turn messy business workflows into intelligent systems with practical AI automation, custom software, and fractional CTO support.",
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
    <html lang="en" className={`${sora.variable} ${plexMono.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
