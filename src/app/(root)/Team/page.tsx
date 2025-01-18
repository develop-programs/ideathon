import { Button } from "@/components/ui/button";
import Link from "next/link";
import TeamsCarousel from "./(component)/TeamsCarousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import VolunteerForm from "./(component)/VotuneerForm";

export default function Team() {
  return (
    <div className="min-h-screen bg-background dark:bg-dark-background flex flex-col justify-around items-center">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-semibold mb-6 animate-fade-in text-gray-900 dark:text-gray-100">
              Meet{" "}
              <span className="text-6xl font-bold bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent bg-clip-text text-transparent">
                OUR
              </span>{" "}
              team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Meet the innovative minds shaping our Ideathon. Discover and
              connect with the diverse talents fueling creativity and
              collaboration.
            </p>
            <div className="space-x-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transform bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent transition-transform duration-300"
                >
                  Contact Us
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:scale-105 hover:bg-Caccent transform transition-transform duration-300"
                  >
                    Join Us
                  </Button>
                </DialogTrigger>
                <DialogContent
                  className="max-w-4xl h-[calc(100vh-10vh)] overflow-auto will-change-scroll
                scroll-px-2"
                >
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center">
                      Volunteer Application Form
                    </DialogTitle>
                    <div className="grid gap-2">
                      <span className="text-lg">Event: Aavnya Ideathon</span>
                      <span className="text-sm">
                        Application Deadline: March 31, 2024
                      </span>
                    </div>
                  </DialogHeader>
                  <VolunteerForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
      <section>
        <TeamsCarousel />
      </section>
    </div>
  );
}
