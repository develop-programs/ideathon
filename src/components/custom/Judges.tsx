"use client";
import { User } from "lucide-react";
import { BackgroundGradient } from "../ui/bg-gradiant";

const judges = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVentures",
    expertise: "Startup Scaling",
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Director, Innovation Hub",
    expertise: "Technology Innovation",
  },
  {
    name: "Michelle Chang",
    role: "Partner, Seed Investments",
    expertise: "Venture Capital",
  },
  {
    name: "Alex Martinez",
    role: "Founder, StartupBoost",
    expertise: "Business Strategy",
  },
];

export default function Judges() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-Cprimary
        via-Csecondary to-Caccent bg-clip-text text-transparent"
        >
          Meet Our Judges
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {judges.map((judge, index) => (
            <BackgroundGradient
              className="rounded-[22px] max-w-sm p-4 sm:p-8 text-center bg-white dark:bg-zinc-900"
              gradiantColors="bg-[radial-gradient(circle_farthest-side_at_0_100%,#8B5CF6,transparent),radial-gradient(circle_farthest-side_at_100%_0,#F97316,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#8B5CF6,transparent),radial-gradient(circle_farthest-side_at_0_0,#F97316,#D946EF,50%)]"
              key={index}
            >
              <User className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600" />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {judge.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {judge.role}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {judge.expertise}
              </p>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
