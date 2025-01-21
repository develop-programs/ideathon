"use client";
import { useEffect, useState } from "react";
import moment from "moment";
import useCountdownTimer from "../../hooks/useCountdownTimer";

export const CountdownTimer = () => {
  const timeLeft = useCountdownTimer("2025-03-15T00:00:00");

  return (
    <div className="bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent py-12 text-white">
      <div className="max-w-7xl mx-auto grid gap-6 place-content-center">
        <div className="flex justify-center">
          <h3 className="text-4xl font-semibold">Event Starts In</h3>
        </div>
        <div className="max-w-3xl grid grid-cols-1 sm:grid-cols-4 gap-4">
          {timeLeft !== "Countdown finished" ? (
            Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="w-full">
                <div className="bg-white/10 border-2 border-white/25 shadow-xl rounded-lg w-full p-6 text-center">
                  <div className="text-6xl md:text-4xl lg:text-6xl font-bold">
                    {value}
                  </div>
                  <div className="text-sm lg:text-lg uppercase">{unit}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-4xl font-semibold">Countdown finished</div>
          )}
        </div>
      </div>
    </div>
  );
};
