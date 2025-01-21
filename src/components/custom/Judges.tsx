"use client";
import { UserRound } from "lucide-react";

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {judges.map((judge, index) => (
            <div
              className="rounded-[22px] max-w-sm p-4 sm:p-8 text-center bg-white dark:bg-zinc-900 shadow-lg transform transition duration-500 hover:scale-105 border-2"
              key={index}
            >
              <UserRound className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600" />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {judge.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {judge.role}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {judge.expertise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
