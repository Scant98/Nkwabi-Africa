import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Nkwabi Africa Company Limited — our mission, vision, values and story as a leading Tanzanian company in Kahama, Shinyanga.",
  alternates: { canonical: "https://nkwabiafrica.co.tz/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
