import { BackgroundGradient } from "@/components/ui/bg-gradiant";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SponsersCard({
  title,
  data,
}: {
  title: string;
  data: Sponsor[];
}) {
  return (
    <div className="text-center my-12 space-y-8">
      <h2
        className={cn(
          "text-4xl font-bold mb-5 uppercase",
          title === "gold"
            ? "text-yellow-500"
            : title === "silver"
            ? "text-gray-500"
            : title === "bronze"
            ? "text-yellow-700"
            : "text-blue-600"
        )}
      >
        {title} Sponser
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {data
          .filter((data) => data.tier === title)
          .map((sponsor: Sponsor, index: number) => (
            <BackgroundGradient
              className="rounded-[22px] max-w-sm p-1.5 bg-white dark:bg-zinc-900"
              gradiantColors="bg-[radial-gradient(circle_farthest-side_at_0_100%,#8B5CF6,transparent),radial-gradient(circle_farthest-side_at_100%_0,#F97316,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#8B5CF6,transparent),radial-gradient(circle_farthest-side_at_0_0,#F97316,#D946EF,50%)]"
              key={index}
            >
              <div className="relative size-72">
                <Image
                  src={sponsor.logo}
                  width={100}
                  height={100}
                  alt="Sponser-image"
                  className="object-cover aspect-square rounded-2xl w-full h-full"
                />
                <div className="absolute bottom-0 w-full bg-slate-800 rounded-b-2xl grid gap-3 p-4 text-start">
                  {sponsor.name}
                  <Link href={sponsor.website}>Visit</Link>
                </div>
              </div>
            </BackgroundGradient>
          ))}
      </div>
    </div>
  );
}
