"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ScrollToTop() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Button
      className="size-14 fixed bottom-12 right-5 rounded-full text-xl p-4 z-50 "
      onClick={scrollToTop}
    >
      <Image
        src="/rocket_animation.gif"
        width={100}
        height={100}
        decoding="async"
        loading="eager"
        unoptimized={true}
        alt="arrow-up size-12"
      />
    </Button>
  );
}
