import { createFileRoute } from "@tanstack/react-router";
import { allImages } from "../lib/hotel-images";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      {
        title: "Gallery | Wintana Hotel Addis Ababa",
      },
      {
        name: "description",
        content:
          "Browse photos of Wintana Hotel — rooftop pool, sky lounge, terrace seating, and city views in Addis Ababa.",
      },
    ],
  }),
});

const labels = [
  "Rooftop pool with glass canopy",
  "Indoor pool reflections",
  "Poolside marble deck",
  "Glass ceiling pool lounge",
  "Sky lounge terrace",
  "City-view seating area",
  "Terrace with orange chairs",
  "Pool lounge chairs",
  "Rooftop relaxation space",
  "Panoramic city view",
  "Poolside seating",
  "Hotel interior lounge",
  "Modern hotel seating",
  "Pool canopy detail",
  "Rooftop lounge corner",
  "Terrace corner view",
  "Addis Ababa cityscape",
  "Hotel pool at dusk",
  "Lounge armchairs",
  "Window seating with curtains",
  "Pool tile detail",
  "Deep blue pool water",
  "Lounge area by the window",
  "Rooftop skyline view",
];

function Gallery() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Gallery</span>
            <h1 className="mt-3 font-display text-4xl font-medium text-foreground md:text-5xl">
              The Wintana experience
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A selection of spaces that define Wintana Hotel — light, water, warm tones, and
              sweeping city views.
            </p>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {allImages.map((image, index) => (
              <div
                key={image.asset_id}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-muted"
              >
                <img
                  src={image.url}
                  alt={labels[index] || "Wintana Hotel"}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
