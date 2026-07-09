import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Waves, Wine, Wifi, Car, Coffee, Headset } from "lucide-react";
import { featuredImages, poolImages, terraceImages } from "../lib/hotel-images";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Wintana Hotel | Modern Urban Retreat in Addis Ababa",
      },
      {
        name: "description",
        content:
          "Welcome to Wintana Hotel — rooftop pool, sky lounge, and warm Ethiopian hospitality in the heart of Addis Ababa.",
      },
    ],
  }),
});

const amenities = [
  { icon: Waves, label: "Rooftop Pool", description: "Swim under a glass canopy with city views." },
  { icon: Wine, label: "Sky Lounge", description: "Unwind with drinks above the city skyline." },
  { icon: Coffee, label: "Coffee & Dining", description: "Ethiopian coffee and curated local cuisine." },
  { icon: Wifi, label: "Free Wi-Fi", description: "Stay connected throughout the hotel." },
  { icon: Car, label: "Airport Transfer", description: "Easy arrivals and departures arranged." },
  { icon: Concierge, label: "24h Concierge", description: "Our team is here around the clock." },
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  );
}

function ImageCard({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-muted ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] overflow-hidden md:min-h-[85vh]">
        <div className="absolute inset-0">
          <img
            src={featuredImages.hero.url}
            alt="Wintana Hotel rooftop pool with glass ceiling and city views"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-4 py-24 md:min-h-[85vh] md:px-6 lg:px-8">
          <span className="mb-4 inline-block w-fit rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            Addis Ababa, Ethiopia
          </span>
          <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.1] text-white md:text-6xl lg:text-7xl">
            A warm retreat above the city
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
            Wintana Hotel blends modern comfort with Ethiopian hospitality. Rooftop pool, sky lounge,
            and panoramic views — all in the heart of the capital.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Book Your Stay
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Explore Gallery
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome / About */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Welcome"
                title="Where comfort meets Ethiopian warmth"
              >
                From the moment you arrive, Wintana Hotel is designed to feel like a calm escape.
                Our spaces are light, airy, and thoughtfully arranged — whether you are here to work,
                rest, or explore Addis Ababa.
              </SectionHeading>
              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <p className="font-display text-4xl font-medium text-foreground">24</p>
                  <p className="text-sm text-muted-foreground">Hour Service</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-medium text-foreground"> Rooftop</p>
                  <p className="text-sm text-muted-foreground">Pool & Lounge</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-medium text-foreground">City</p>
                  <p className="text-sm text-muted-foreground">Views</p>
                </div>
              </div>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Discover our story
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 grid gap-4 lg:order-2">
              <ImageCard
                src={featuredImages.terrace.url}
                alt="Rooftop terrace with orange chairs and city views"
                className="aspect-[4/3]"
              />
              <div className="grid grid-cols-2 gap-4">
                <ImageCard
                  src={featuredImages.pool.url}
                  alt="Indoor rooftop pool with glass ceiling"
                  className="aspect-square"
                />
                <ImageCard
                  src={featuredImages.lounge.url}
                  alt="Hotel lounge with modern seating"
                  className="aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <SectionHeading eyebrow="Amenities" title="Everything for a relaxed stay">
              Thoughtful touches and modern facilities to make every moment at Wintana Hotel
              memorable.
            </SectionHeading>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <div
                key={amenity.label}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary">
                  <amenity.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-card-foreground">{amenity.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Gallery" title="See the spaces for yourself">
              Sunlight, water, and warm tones — every corner of Wintana Hotel is designed for comfort.
            </SectionHeading>
            <Link
              to="/gallery"
              className="mb-8 inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              View All Photos
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <ImageCard
              src={poolImages[0].url}
              alt="Rooftop pool at Wintana Hotel"
              className="col-span-2 aspect-[4/3] md:row-span-2"
            />
            <ImageCard
              src={terraceImages[0].url}
              alt="Terrace seating with city views"
              className="aspect-square"
            />
            <ImageCard
              src={poolImages[5].url}
              alt="Pool lounge chairs"
              className="aspect-square"
            />
            <ImageCard
              src={poolImages[8].url}
              alt="Indoor pool reflections"
              className="aspect-square"
            />
            <ImageCard
              src={terraceImages[1].url}
              alt="Sky lounge corner"
              className="aspect-square"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-navy" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-white md:text-5xl">
            Ready to experience Wintana?
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Book directly with us for the best rates and a personalized welcome.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Reserve Now
            </Link>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              View Rooms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
