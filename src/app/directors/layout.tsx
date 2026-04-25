import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Directors",
  description: "Meet the leadership team of Nkwabi Africa Company Limited — experienced directors driving sustainable growth across Tanzania.",
  alternates: { canonical: "https://nkwabiafrica.co.tz/directors" },
};

export default function DirectorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
