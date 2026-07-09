import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Waves,
  Wine,
  Headset,
  Wifi,
  Coffee,
  Car,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { featuredImages, poolImages, terraceImages, allImages } from "../lib/hotel-images";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Wintana Hotel | Rooftop Pool & Sky Lounge in Addis Ababa",
      },
      {
        name: "description",
        content:
          "Discover Wintana Hotel — a modern urban retreat in Addis Ababa with a glass-canopy rooftop pool, sky lounge, and warm Ethiopian hospitality.",
      },
    ],
  }),
});

const amenities = [
  { icon: Waves, label: "Rooftop Pool", description: "Swim beneath the glass canopy with city views." },
  { icon: Wine, label: "Sky Lounge", description: "Cocktails, bites, and panoramic sunsets." },
  { icon: Headset, label: "24h Concierge", description: "Our team is here around the clock." },
  { icon: Wifi, label: "Free Wi-Fi", description: "Fast, reliable connectivity throughout." },
  { icon: Coffee, label: "Breakfast", description: "Start the day with a fresh, local breakfast." },
  { icon: Car, label: "Airport Transfer", description: "Easy pickups and drop-offs arranged." },
];

const previewImages = allImages.slice(0, 6);

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={featuredImages.hero}
            alt="Wintana Hotel rooftop pool with city views"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-cream" />
        </div>

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-end px-4 pb-20 md:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Addis Ababa
            </span>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[1.1] md:text-6xl lg:text-7xl">
              A peaceful escape above the city
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/90">
              Wintana Hotel blends modern comfort with warm Ethiopian hospitality. Rooftop pool,
              sky lounge, and rooms designed for rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/rooms"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Explore rooms
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Welcome
              </span>
              <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
                Designed for comfort, rooted in hospitality
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Wintana Hotel is a modern retreat in the heart of Addis Ababa. From the glass-canopy
                rooftop pool to the city-view terrace lounge, every space is made to help you
                relax and feel at home.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
              >
                Read our story
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4">
              <img
                src={featuredImages.pool}
                alt="Wintana Hotel rooftop pool"
                className="aspect-[4/3] rounded-2xl object-cover"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={featuredImages.terrace}
                  alt="Wintana Hotel terrace lounge"
                  className="aspect-square rounded-2xl object-cover"
                />
                <img
                  src={featuredImages.lounge}
                  alt="Wintana Hotel interior lounge"
                  className="aspect-square rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Amenities</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-foreground md:text-4xl">
              Everything you need for a relaxed stay
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map(({ icon: Icon, label, description }) => (
              <div
                key={label}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex rounded-full bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-card-foreground">{label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:mb-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Gallery</span>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground md:text-4xl">
                See the Wintana experience
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              View all photos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {previewImages.map((image) => (
              <div
                key={image}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-muted"
              >
                <img
                  src={image}
                  alt="Wintana Hotel"
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src={terraceImages[0]}
            alt="Wintana Hotel terrace with city views"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
            Ready to experience Wintana?
          </h2>
          <p className="mt-4 text-white/80">
            Book your stay or get in touch with our team for reservations and special requests.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Contact us
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
