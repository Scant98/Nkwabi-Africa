import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
      <h1 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild className="bg-primary text-primary-foreground gap-2">
        <Link href="/"><Home className="w-4 h-4" />Back to Home</Link>
      </Button>
    </main>
  );
}
