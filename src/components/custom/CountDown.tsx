"use client";
import { useEffect, useState } from "react";
import moment from "moment";

const calculateTimeLeft = () => {
  const eventDate = moment("2025-03-15T00:00:00");
  const now = moment();
  const difference = moment.duration(eventDate.diff(now));
  if (difference.asMilliseconds() <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  return {
    days: Math.floor(difference.asDays()),
    hours: difference.hours(),
    minutes: difference.minutes(),
    seconds: difference.seconds(),
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
      <div className="max-w-7xl mx-auto grid gap-6 place-content-center">
        <div className="flex justify-center">
          <h3 className="text-4xl font-semibold">Event Starts In</h3>
        </div>
        <div className="max-w-3xl grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="w-full">
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
