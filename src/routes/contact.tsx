import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      {
        title: "Contact & Book | Wintana Hotel Addis Ababa",
      },
      {
        name: "description",
        content:
          "Contact Wintana Hotel to book your stay, request availability, or ask questions about our rooms, rooftop pool, and events.",
      },
    ],
  }),
});

function Contact() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</span>
            <h1 className="mt-3 font-display text-4xl font-medium text-foreground md:text-5xl">
              Book your stay
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Reach out for reservations, group bookings, or any questions. We will respond as soon
              as possible.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                    placeholder="First name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+251 91 234 5678"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tell us about your stay dates, group size, or special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Send request
              </button>
            </form>

            <div className="space-y-8">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-card-foreground">Location</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Wintana Hotel
                      <br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-card-foreground">Phone</h3>
                    <p className="mt-1 text-sm text-muted-foreground">+251 11 123 4567</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-card-foreground">Email</h3>
                    <p className="mt-1 text-sm text-muted-foreground">hello@wintanahotel.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-navy p-6 text-white">
                <h3 className="font-display text-lg">Front desk hours</h3>
                <p className="mt-2 text-sm text-white/80">
                  Our reception team is available 24 hours a day, seven days a week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
