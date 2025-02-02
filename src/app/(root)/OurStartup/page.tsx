"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["startups"],
    queryFn: async () => {
      const data = await axios.get(`${window.location.origin}/api/startups`);
      return data.data.startups;
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <span className="text-5xl font-bold">Our Startups</span>
      </div>
      
      {isLoading && (
        <div className="text-center py-10">
          <p className="text-xl text-muted-foreground">Loading startups...</p>
        </div>
      )}
      
      {error && (
        <div className="text-center py-10">
          <p className="text-xl text-red-500">Error loading startups. Please try again later.</p>
        </div>
      )}

      {data && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((startup: Startup) => (
            <Card
              key={startup.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardHeader className="space-y-4">
                <Image
                  src={startup.image}
                  alt={startup.name}
                  className="w-full h-48 object-cover rounded-lg"
                  width={300}
                  height={200}
                  decoding="async"
                  loading="lazy"
                />
                <CardTitle>{startup.name}</CardTitle>
                <CardDescription>{startup.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{startup.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
