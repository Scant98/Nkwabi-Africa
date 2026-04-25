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
  title: {
    default: "Nkwabi Africa Company Limited",
    template: "%s | Nkwabi Africa",
  },
  description: "A diversified Tanzanian company driving sustainable growth through gold mining, agriculture, logistics, and mining chemicals.",
  keywords: ["Tanzania", "gold mining", "coffee", "agriculture", "logistics", "Nkwabi Africa"],
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
