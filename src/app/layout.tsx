import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TopProgressBar } from "@/components/layout/TopProgressBar";

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nkwabiafrica.co.tz"),
  title: {
    default: "Nkwabi Africa Company Limited | Tanzania",
    template: "%s | Nkwabi Africa",
  },
  description: "Nkwabi Africa Company Limited is a diversified Tanzanian company based in Kahama, Shinyanga. We specialise in gold mining, coffee agriculture, logistics, and mining chemicals.",
  keywords: [
    "Nkwabi Africa",
    "nkwabiafrica",
    "Tanzania company",
    "gold mining Tanzania",
    "Kahama mining",
    "Shinyanga gold",
    "Tanzania agriculture",
    "coffee export Tanzania",
    "mining chemicals Tanzania",
    "Tanzania logistics",
    "Nkwabi Africa Company Limited",
  ],
  authors: [{ name: "Nkwabi Africa Company Limited" }],
  creator: "Nkwabi Africa Company Limited",
  publisher: "Nkwabi Africa Company Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: "https://nkwabiafrica.co.tz",
    siteName: "Nkwabi Africa Company Limited",
    title: "Nkwabi Africa Company Limited | Tanzania",
    description: "A diversified Tanzanian company specialising in gold mining, coffee agriculture, logistics, and mining chemicals. Based in Kahama, Shinyanga.",
    images: [{ url: "/logo.png", width: 400, height: 400, alt: "Nkwabi Africa Logo" }],
  },
  twitter: {
    card: "summary",
    title: "Nkwabi Africa Company Limited",
    description: "Gold mining, agriculture, logistics and mining chemicals — based in Tanzania.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://nkwabiafrica.co.tz",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} min-h-screen flex flex-col antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <TopProgressBar />
          <Navbar />
          <div className="flex-1" suppressHydrationWarning>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
