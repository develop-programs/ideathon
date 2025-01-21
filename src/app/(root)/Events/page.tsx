import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    id: 1,
    title: "Opening Ceremony",
    date: "March 15, 2025",
    time: "10:00 AM",
    location: "Main Auditorium",
    description: "Kickoff event featuring keynote speakers and event overview",
    category: "Ceremony",
    capacity: 500,
  },
  {
    id: 2,
    title: "Pitch Perfect Workshop",
    date: "March 15, 2025",
    time: "2:00 PM",
    location: "Workshop Hall A",
    description: "Learn the art of creating impactful startup pitches",
    category: "Workshop",
    capacity: 100,
  },
  {
    id: 3,
    title: "Innovation Panel Discussion",
    date: "March 16, 2025",
    time: "11:00 AM",
    location: "Conference Room B",
    description: "Industry experts discuss current innovation trends",
    category: "Panel",
    capacity: 200,
  },
  {
    id: 4,
    title: "Final Pitch Competition",
    date: "March 16, 2025",
    time: "3:00 PM",
    location: "Main Stage",
    description: "Top teams present their innovative solutions",
    category: "Competition",
    capacity: 300,
  },
];

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  capacity: number;
}

const EventCard = <T extends Event>({ event }: { event: T }) => (
  <Card
    key={event.id}
    className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
  >
    <CardHeader>
      <div className="flex justify-between items-start">
        <CardTitle className="text-xl font-semibold">{event.title}</CardTitle>
        <Badge>{event.category}</Badge>
      </div>
      <CardDescription className="text-sm text-muted-foreground">
        {event.description}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-5 w-5" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-5 w-5" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="h-5 w-5" />
          <span>Capacity: {event.capacity} attendees</span>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button size="sm" effect="ringHover" className="w-full">
        Register Now
      </Button>
    </CardFooter>
  </Card>
);

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-around items-center gap-12 py-12">
      <section className="max-w-3xl text-center">
        <h1 className="h-24 lg:h-16 text-5xl bg-gradient-to-r from-Csecondary to-Caccent bg-clip-text text-transparent font-bold">
          Upcoming Events
        </h1>
        <span className="text-base md:text-xl text-gray-600 dark:text-gray-300">
          Join us for an exciting lineup of events designed to inspire, educate,
          and connect future entrepreneurs.
        </span>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
