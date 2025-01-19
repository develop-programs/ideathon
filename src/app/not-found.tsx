"use client";
import { Button } from "@/components/ui/button";
import { AlertOctagon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="max-w-md w-full mx-auto p-6 text-center animate-fade-in">
        <div className="mb-8">
          <AlertOctagon className="h-24 w-24 mx-auto text-primary mb-4" />
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl font-semibold text-foreground mb-2">
            Page Not Found
          </p>
          <p className="text-muted-foreground mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="w-full mb-2"
          >
            Go Back
          </Button>

          <Button
            onClick={() => router.push("/")}
            className="w-full bg-primary hover:bg-primary/90"
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
