import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PACKAGES, type PackageType } from "@/lib/packages-data";
import { MapPin, Clock, ArrowRight, Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages — Lets Go Tours and Travels" },
      { name: "description", content: "Adventure, luxury, city, culture, wildlife and custom-built tour packages around the world." },
      { property: "og:title", content: "Tour Packages" },
      { property: "og:description", content: "Hand-tailored journeys, transparent pricing, secure your spot today." },
    ],
  }),
  component: Packages,
});

const TYPES: ("All" | PackageType)[] = ["All", "Adventure", "Luxury", "City", "Culture", "Wildlife", "Custom"];
const DURATIONS = ["Any", "≤5 days", "6–8 days", "9+ days"] as const;
const PRICES = ["Any", "<$2k", "$2k–$3.5k", "$3.5k+"] as const;

function Packages() {
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [duration, setDuration] = useState<(typeof DURATIONS)[number]>("Any");
  const [price, setPrice] = useState<(typeof PRICES)[number]>("Any");

  const filtered = useMemo(() => {
    return PACKAGES.filter((p) => {
      if (type !== "All" && p.type !== type) return false;
      if (duration === "≤5 days" && p.duration > 5) return false;
      if (duration === "6–8 days" && (p.duration < 6 || p.duration > 8)) return false;
      if (duration === "9+ days" && p.duration < 9) return false;
      if (price === "<$2k" && p.priceFrom >= 2000) return false;
      if (price === "$2k–$3.5k" && (p.priceFrom < 2000 || p.priceFrom > 3500)) return false;
      if (price === "$3.5k+" && p.priceFrom < 3500) return false;
      return true;
    });
  }, [type, duration, price]);

  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-32">
        <div className="bg-gradient-sunset absolute -top-32 -right-24 size-[28rem] rounded-full opacity-40 blur-3xl" />
        <div className="bg-gradient-tropic absolute -bottom-32 -left-24 size-[28rem] rounded-full opacity-30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-secondary">Tour Packages</span>
          <h1 className="mt-3 max-w-3xl text-5xl font-black md:text-7xl">
            Pick a trip. <span className="text-gradient-sunset">Pack the bag.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            Curated expeditions across six categories — or design your own from scratch. Every
            package includes transparent pricing, hand-picked stays and a 24/7 concierge.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[68px] z-20 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-5 py-4">
          <FilterRow label="Type" value={type} onChange={setType} options={TYPES} />
          <FilterRow label="Duration" value={duration} onChange={setDuration} options={DURATIONS} />
          <FilterRow label="Price" value={price} onChange={setPrice} options={PRICES} />
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-12 text-center text-muted-foreground">
            No trips match those filters yet — try widening your search.
          </div>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-glow">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <span className="bg-gradient-sunset absolute top-4 left-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    <Sparkles className="size-3" />{p.type}
                  </span>
                  {p.priceFrom > 0 && (
                    <span className="absolute top-4 right-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-ink">
                      from ${p.priceFrom.toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold">{p.title}</h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="size-3.5 text-primary" />{p.location}</span>
                    {p.duration > 0 && <span className="inline-flex items-center gap-1"><Clock className="size-3.5 text-primary" />{p.duration} days</span>}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{p.blurb}</p>
                  <ul className="mt-4 space-y-1.5">
                    {p.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-hero mt-6 w-full !py-3 text-sm">
                    Secure My Spot <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}

function FilterRow<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: readonly T[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => {
          const active = o === value;
          return (
            <button
              key={o}
              onClick={() => onChange(o)}
              className={
                active
                  ? "bg-gradient-sunset rounded-full px-3.5 py-1.5 text-xs font-bold text-white shadow-glow"
                  : "rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-muted-foreground transition hover:border-primary hover:text-foreground"
              }
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}