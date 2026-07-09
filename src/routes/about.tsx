import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { featuredImages, poolImages, terraceImages } from "../lib/hotel-images";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      {
        title: "About Wintana Hotel | Urban Retreat in Addis Ababa",
      },
      {
        name: "description",
        content:
          "Learn about Wintana Hotel — a modern urban retreat in Addis Ababa offering rooftop pool, sky lounge, and warm Ethiopian hospitality.",
      },
    ],
  }),
});

function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src={featuredImages.terrace.url}
            alt="Wintana Hotel terrace with city views"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium text-white md:text-5xl lg:text-6xl">
            A modern hotel with Ethiopian soul
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                Wintana Hotel was created for travelers who want more than a place to sleep. We
                wanted to build a calm, light-filled space where guests can pause, breathe, and feel
                genuinely welcomed.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Perched above the energy of Addis Ababa, our hotel offers a rare combination: the
                convenience of a central location and the serenity of a rooftop retreat. The indoor
                pool, sky lounge, and terrace are designed to let you relax while still feeling
                connected to the city.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Every detail — from the terracotta lounge chairs to the glass canopy over the pool —
                reflects our belief that hospitality should feel warm, modern, and unmistakably
                local.
              </p>
            </div>
            <div className="grid gap-4">
              <img
                src={poolImages[0].url}
                alt="Wintana Hotel rooftop pool"
                className="aspect-[4/3] rounded-2xl object-cover"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={terraceImages[0].url}
                  alt="Terrace seating"
                  className="aspect-square rounded-2xl object-cover"
                />
                <img
                  src={poolImages[5].url}
                  alt="Poolside lounge"
                  className="aspect-square rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Values</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-foreground md:text-4xl">
              What we believe in
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Warm Hospitality",
                text: "Ethiopian culture is rooted in welcome. We greet every guest with genuine care and attentive service.",
              },
              {
                title: "Modern Comfort",
                text: "Clean lines, natural light, and thoughtful amenities create spaces that feel effortless and refined.",
              },
              {
                title: "City Connection",
                text: "Our rooftop vantage point keeps you close to Addis Ababa's rhythm while offering a peaceful escape.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-display text-xl text-card-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-foreground md:text-4xl">
            Come stay with us
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you are visiting Addis Ababa for business or leisure, Wintana Hotel is ready to
            welcome you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Get in Touch
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
