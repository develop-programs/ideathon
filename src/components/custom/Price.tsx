"use client";
import Image from "next/image";
import { BackgroundGradient } from "../ui/bg-gradiant";
import { cn } from "@/lib/utils";

const prizes = [
  {
    position: "1st Prize",
    amount: "₹30,000",
    images: "/prize/1-prize.png",
    gradiantColors:
      "bg-[radial-gradient(circle_farthest-side_at_0_100%,#ffd700,transparent),radial-gradient(circle_farthest-side_at_100%_0,#ffd700,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffd700,transparent),radial-gradient(circle_farthest-side_at_0_0,#ffd700,#141316)]",
  },
  {
    position: "2nd Prize",
    amount: "₹20,000",
    images: "/prize/2-prize.png",
    gradiantColors:
      "bg-[radial-gradient(circle_farthest-side_at_0_100%,#c0c0c0,transparent),radial-gradient(circle_farthest-side_at_100%_0,#c0c0c0,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#c0c0c0,transparent),radial-gradient(circle_farthest-side_at_0_0,#c0c0c0,#141316)]",
  },
  {
    position: "3rd Prize",
    amount: "₹10,000",
    images: "/prize/3-prize.png",
    gradiantColors:
      "bg-[radial-gradient(circle_farthest-side_at_0_100%,#cd7f32,transparent),radial-gradient(circle_farthest-side_at_100%_0,#cd7f32,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#cd7f32,transparent),radial-gradient(circle_farthest-side_at_0_0,#cd7f32,#141316)]",
  },
];

export default function Prizes() {
  return (
    <section className="py-20 relative overflow-hidden select-none">
      <div className="absolute inset-0" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent bg-clip-text text-transparent">
            Prizes Worth ₹60,000
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {prizes.map((prize, index) => (
            <BackgroundGradient
              className="rounded-[22px] max-w-sm p-4 sm:p-10 text-center bg-white dark:bg-zinc-900"
              gradiantColors={prize.gradiantColors}
              key={index}
            >
              <Image
                src={prize.images}
                alt="jordans"
                height="300"
                width="300"
                className="object-contain aspect-square"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {prize.position}
              </p>
              <button
                className={cn(
                  prize.position === "1st Prize"
                    ? "text-[#ffd700]"
                    : prize.position === "2nd Prize"
                    ? "text-[#c0c0c0]"
                    : "text-[#cd7f32]",
                  "text-5xl font-bold"
                )}
              >
                {prize.amount}
              </button>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
