import { MapPin, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/custom/CountDown";
import { Timeline } from "@/components/custom/Timeline";
import Prizes from "@/components/custom/Price";
import Judges from "@/components/custom/Judges";
import FAQ from "@/components/custom/FAQ";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <div className="select-none">
      <BackgroundBeamsWithCollision>
        <div className="max-w-7xl mx-auto px-6 py-12 grid place-content-center">
          <div className=" space-y-12 max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 text-6xl lg:text-6xl xl:text-7xl flex justify-end md:pe-20 lg:pe-28 xl:pe-32 pt-5 z-50">
                🚀
              </div>
              <h1 className="z-50 backdrop-blur-xs text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
                <span className="bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent bg-clip-text text-transparent drop-shadow-lg">
                  Ideathon:
                </span>
                <br />
                <span className="bg-gradient-to-l from-Cprimary via-Csecondary to-Caccent bg-clip-text text-transparent drop-shadow-lg">
                  From Concept to Market
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-fade-in">
              <span className="backdrop-blur-md bg-white/30 dark:bg-black/30 p-6 rounded-2xl block shadow-xl border border-white/20">
                Transform your innovative ideas into market-ready solutions.
                Join us for an exciting two-day journey of learning, pitching,
                and winning!
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 backdrop-blur-md bg-white/30 dark:bg-black/30 p-6 rounded-2xl shadow-xl border border-white/20">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-12 stroke-Caccent"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.75 17.2202V17.1428M12.25 17.2202V17.1428M12.25 13.0286V12.9512M16.25 13.0286V12.9512M4.75 8.91425H18.75M6.55952 3V4.54304M16.75 3V4.54285M16.75 4.54285H6.75C5.09315 4.54285 3.75 5.92436 3.75 7.62855V17.9143C3.75 19.6185 5.09315 21 6.75 21H16.75C18.4069 21 19.75 19.6185 19.75 17.9143L19.75 7.62855C19.75 5.92436 18.4069 4.54285 16.75 4.54285Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Date</h3>
                    <span className="text-lg">March 15-16, 2024</span>
                  </div>
                </div>
              </div>

              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 backdrop-blur-md bg-white/30 dark:bg-black/30 p-6 rounded-2xl shadow-xl border border-white/20">
                  <MapPin className="size-12 text-Csecondary" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Venue</h3>
                    <span className="text-sm md:text-lg">
                      College Auditorium
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-3 lg:col-span-1 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 backdrop-blur-md bg-white/30 dark:bg-black/30 p-6 rounded-2xl shadow-xl border border-white/20">
                  <Trophy className="size-12 text-Caccent" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Prize Pool</h3>
                    <span className="text-lg">₹60,000</span>
                  </div>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent hover:opacity-90 text-white px-12 py-8 text-xl rounded-2xl animate-fade-in shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              Register Now
            </Button>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <CountdownTimer />
      <Timeline />
      <Prizes />
      <Judges />
      <FAQ />
    </div>
  );
}
