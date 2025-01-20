import { ArrowRightIcon, MapPin, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/custom/CountDown";
import { Timeline } from "@/components/custom/Timeline";
import Prizes from "@/components/custom/Price";
import Judges from "@/components/custom/Judges";
import FAQ from "@/components/custom/FAQ";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import AnimatedShinyText from "@/components/ui/AnimatedShinyText";
import { cn } from "@/lib/utils";
import { ShinyButton } from "@/components/ui/ShinyButton";
import { Card, CardContent } from "@/components/ui/card";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Home() {
  return (
    <div className="select-none">
      <BackgroundBeamsWithCollision>
        <div className="max-w-7xl mx-auto px-6 py-12 grid place-content-center">
          <div className=" space-y-6 max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="z-10 flex min-h-12 items-center justify-center">
                <div
                  className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                  )}
                >
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>✨ happning Soon ✨</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </div>
              </div>
              <div className="relative">
                <span className="text-7xl uppercase font-black text-transparent bg-clip-text bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent animate-gradient-x leading-tight">
                  Ideathon <br /> From Concept to <br /> market
                </span>
              </div>
            </div>

            <Card className="text-xl md:text-2xl bg-white dark:bg-black animate-fade-in shadow-xl backdrop-blur-md">
              <CardContent className="p-6">
                Transform your innovative ideas into market-ready solutions.
                Join us for an exciting two-day journey of learning, pitching,
                and winning!
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in">
              <div className="col-span-1 md:col-span-3 lg:col-span-1 transform hover:scale-105 transition-transform duration-300">
                <Card className="bg-white dark:bg-black animate-fade-in shadow-xl backdrop-blur-md">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-12 h-12 stroke-Caccent"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75 17.2202V17.1428M12.25 17.2202V17.1428M12.25 13.0286V12.9512M16.25 13.0286V12.9512M4.75 8.91425H18.75M6.55952 3V4.54304M16.75 3V4.54285M16.75 4.54285H6.75C5.09315 4.54285 3.75 5.92436 3.75 7.62855V17.9143C3.75 19.6185 5.09315 21 6.75 21H16.75C18.4069 21 19.75 19.6185 19.75 17.9143L19.75 7.62855C19.75 5.92436 18.4069 4.54285 16.75 4.54285Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="text-start">
                      <h3 className="font-semibold text-lg">Date</h3>
                      <span className="text-base">March 15-16, 2024</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="col-span-1 md:col-span-3 lg:col-span-1 transform hover:scale-105 transition-transform duration-300">
                <Card className="bg-white dark:bg-black animate-fade-in shadow-xl backdrop-blur-md">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <MapPin className="w-12 h-12 text-Csecondary" />
                    <div className="text-start">
                      <h3 className="font-semibold text-lg">Venue</h3>
                      <span className="text-base">College Auditorium</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="col-span-1 md:col-span-3 lg:col-span-1 transform hover:scale-105 transition-transform duration-300">
                <Card className="bg-white dark:bg-black animate-fade-in shadow-xl backdrop-blur-md">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <Trophy className="size-12 text-Caccent" />
                    <div className="text-start">
                      <h3 className="font-semibold text-lg">Prize Pool</h3>
                      <span className="text-base">₹60,000</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <RainbowButton className="text-2xl px-12 py-6">
              Register Now
            </RainbowButton>
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
