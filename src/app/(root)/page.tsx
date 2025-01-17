import { Calendar, MapPin, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/custom/CountDown";
import { Timeline } from "@/components/custom/Timeline";
import Background3D from "@/components/ui/particle";

export default function Home() {
  return (
    <div className="select-none">
      <Background3D />
      <div className="max-w-7xl mx-auto px-6 py-28 grid place-content-center">
        <div className=" space-y-8 max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 -z-20 text-6xl lg:text-6xl xl:text-7xl flex justify-end md:pe-20 lg:pe-28 xl:pe-32 pt-5">
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

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in">
            <span className="backdrop-blur-md bg-white/30 dark:bg-black/30 p-6 rounded-2xl block shadow-xl border border-white/20">
              Transform your innovative ideas into market-ready solutions. Join
              us for an exciting two-day journey of learning, pitching, and
              winning!
            </span>
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 backdrop-blur-md bg-white/30 dark:bg-black/30 p-6 rounded-2xl shadow-xl border border-white/20">
                <Calendar className="w-8 h-8 text-Cprimary" />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Date</h3>
                  <span className="text-lg">March 15-16, 2024</span>
                </div>
              </div>
            </div>

            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 backdrop-blur-md bg-white/30 dark:bg-black/30 p-6 rounded-2xl shadow-xl border border-white/20">
                <MapPin className="w-8 h-8 text-Csecondary" />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Venue</h3>
                  <span className="text-lg">College Auditorium</span>
                </div>
              </div>
            </div>

            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 backdrop-blur-md bg-white/30 dark:bg-black/30 p-6 rounded-2xl shadow-xl border border-white/20">
                <Trophy className="w-8 h-8 text-Caccent" />
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
      <CountdownTimer />
      <Timeline />
    </div>
  );
}
