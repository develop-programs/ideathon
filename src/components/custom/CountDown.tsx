"use client";
import { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  const eventDate = new Date("2025-03-15T00:00:00").getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent py-12 text-white">
      <div className="max-w-7xl mx-auto grid gap-6">
        <h3 className="text-4xl font-semibold text-center">Event Starts In</h3>
        <div className="flex items-center gap-4 justify-center flex-wrap">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex items-center justify-center gap-4">
              <div className="bg-white/10 border-2 border-white/25 shadow-xl rounded-lg py-8 px-12 text-center space-y-4">
                <div className="text-6xl font-bold">{value}</div>
                <div className="text-lg uppercase">{unit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
