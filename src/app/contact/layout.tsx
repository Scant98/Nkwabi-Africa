import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Nkwabi Africa Company Limited. Contact us for gold trading, coffee sourcing, logistics or business partnerships in Tanzania.",
  alternates: { canonical: "https://nkwabiafrica.co.tz/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
