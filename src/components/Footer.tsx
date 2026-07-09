import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-semibold">Wintana</span>
            </Link>
            <p className="text-sm leading-relaxed text-secondary-foreground/80">
              A modern urban retreat where warm Ethiopian hospitality meets
              contemporary comfort. Relax, dine, and unwind above the city.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg">Explore</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <Link to="/about" className="hover:text-secondary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-secondary-foreground">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-secondary-foreground">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg">Amenities</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Rooftop Pool</li>
              <li>Sky Lounge</li>
              <li>City-View Terrace</li>
              <li>24-Hour Reception</li>
              <li>Free Wi-Fi</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg">Contact</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+251 911 234 567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <span>hello@wintanahotel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Wintana Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
