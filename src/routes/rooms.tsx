import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import roomStandard from "../assets/rooms/room-standard.jpg";
import roomDeluxe from "../assets/rooms/room-deluxe.jpg";
import roomSuite from "../assets/rooms/room-suite.jpg";

export const Route = createFileRoute("/rooms")({
  component: Rooms,
  head: () => ({
    meta: [
      {
        title: "Rooms & Suites | Wintana Hotel Addis Ababa",
      },
      {
        name: "description",
        content:
          "Explore Wintana Hotel rooms and suites — modern comfort, city views, and warm Ethiopian design in the heart of Addis Ababa.",
      },
    ],
  }),
});

const rooms = [
  {
    name: "Standard Room",
    description: "A calm, light-filled room with a king bed, workspace, and views of the garden or city.",
    image: roomStandard,
    features: ["King bed", "City or garden view", "Work desk", "Smart TV", "Rain shower"],
  },
  {
    name: "Deluxe Room",
    description: "More space and a floor-to-ceiling window overlooking the Addis Ababa skyline.",
    image: roomDeluxe,
    features: ["King bed", "Panoramic city view", "Seating area", "Premium bath amenities", "High-speed Wi-Fi"],
  },
  {
    name: "Wintana Suite",
    description: "Our signature suite with a separate living room, balcony, and sweeping city views.",
    image: roomSuite,
    features: ["Separate living room", "Private balcony", "Panoramic view", "Dining space", "Concierge service"],
  },
];

function Rooms() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Accommodations</span>
            <h1 className="mt-3 font-display text-4xl font-medium text-foreground md:text-5xl">
              Rooms & suites
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Rest well in rooms designed for comfort, light, and quiet — with the city waiting
              just outside your window.
            </p>
          </div>

          <div className="grid gap-10 md:gap-12">
            {rooms.map((room, index) => (
              <div
                key={room.name}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={room.image}
                    alt={room.name}
                    width={1344}
                    height={1008}
                    loading="lazy"
                    className="aspect-[4/3] rounded-2xl object-cover"
                  />
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="font-display text-3xl font-medium text-foreground md:text-4xl">
                    {room.name}
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">{room.description}</p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    Request availability
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-foreground md:text-3xl">
            All rooms include
          </h2>
          <div className="mt-8 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2 md:grid-cols-3">
            {[
              "Air conditioning",
              "Mini refrigerator",
              "In-room safe",
              "Complimentary Wi-Fi",
              "24-hour room service",
              "Daily housekeeping",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card py-3 text-card-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
