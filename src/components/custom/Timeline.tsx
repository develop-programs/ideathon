"use client";
import { Clock } from "lucide-react";

const timelineData = [
  {
    day: "Day 1",
    events: [
      {
        time: "10:00 AM - 12:00 PM",
        title: "Pitch Perfect Workshop",
        description: "Learn the art of creating impactful pitches",
      },
      {
        time: "2:00 PM - 5:00 PM",
        title: "Panel Discussions",
        description: "New vs. Tradition & Why Incubation is Important",
      },
    ],
  },
  {
    day: "Day 2",
    events: [
      {
        time: "9:00 AM - 4:00 PM",
        title: "Pitch Competition",
        description: "Top 20 teams present their innovative ideas",
      },
      {
        time: "5:00 PM - 6:00 PM",
        title: "Award Ceremony",
        description: "Celebration and prize distribution",
      },
    ],
  },
];

export const Timeline = () => {
  return (
    <section className="py-20 bg-none">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent bg-clip-text text-transparent">
          Event Timeline
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {timelineData.map((day, index: number) => (
            <div
              key={index}
              className="relative p-[2px] rounded-lg animate-fade-in overflow-hidden"
              style={{
                background:
                  "linear-gradient(45deg, #8B5CF6, #D946EF, #F97316, #8B5CF6)",
                backgroundSize: "200% 200%",
              }}
            >
              <div
                className="absolute inset-0 animate-neon-border"
                style={{
                  background:
                    "linear-gradient(45deg, #8B5CF6, #D946EF, #F97316, #8B5CF6)",
                  backgroundSize: "200% 200%",
                  filter: "blur(8px)",
                }}
              />
              <div className="relative bg-card rounded-lg p-8 z-10">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  {day.day}
                </h3>
                <div className="space-y-8">
                  {day.events.map((event) => (
                    <div key={event.title} className="flex gap-4">
                      <Clock className="w-6 h-6 text-Csecondary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {event.time}
                        </p>
                        <h4 className="text-xl font-semibold mb-2 text-card-foreground">
                          {event.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
