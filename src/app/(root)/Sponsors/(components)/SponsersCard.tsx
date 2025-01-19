import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
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
            <Card
              key={index}
              className="w-80 overflow-hidden transition-transform transform hover:scale-105"
            >
              <CardContent className="p-0 w-full">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={200}
                  className="object-cover aspect-video w-full h-full"
                />
              </CardContent>
              <CardFooter className="py-4 px-6 grid gap-2 text-start">
                <span className="block text-lg font-semibold">
                  {sponsor.name}
                </span>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Website
                </a>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}
