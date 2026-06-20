import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Heart, Flame, Globe2, ShieldCheck, Sparkles, Users } from "lucide-react";
import bali from "@/assets/pkg-bali.jpg";
import patagonia from "@/assets/pkg-patagonia.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lets Go Tours and Travels" },
      { name: "description", content: "Industry-disrupting travel brand crafting personalized, action-packed, deeply meaningful journeys around the world." },
      { property: "og:title", content: "About Lets Go Tours and Travels" },
      { property: "og:description", content: "We break the mold of boring itineraries." },
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: Heart, title: "Fanatical personalization", body: "Every trip is built from a blank page around your taste, pace and tolerance for chaos." },
  { icon: Globe2, title: "Deep cultural immersion", body: "We hand you the locals' little black book — chefs, artisans, fixers, late-night spots." },
  { icon: Flame, title: "Boundary-pushing adventure", body: "If it makes you a little nervous, we've probably already mapped the route." },
  { icon: Sparkles, title: "Uncompromising comfort", body: "Wild by day, indulgent by night. Soft beds, big sky, no compromises." },
  { icon: ShieldCheck, title: "Rock-solid trust", body: "Transparent pricing, real humans, 24/7 backup. You will never feel alone." },
  { icon: Users, title: "For every kind of traveler", body: "Solo, couples, families, students, seniors, corporate squads — we speak all of it." },
];

function About() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="bg-gradient-sunset absolute -top-32 -left-24 size-[28rem] rounded-full opacity-40 blur-3xl" />
        <div className="bg-gradient-tropic absolute -right-24 top-20 size-[24rem] rounded-full opacity-30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-36">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-secondary">About the Crew</span>
          <h1 className="mt-3 max-w-3xl text-5xl font-black md:text-7xl">
            We're here to <span className="text-gradient-sunset">put the wonder back</span> into wandering.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Lets Go Tours and Travels is an industry-disrupting brand built by travelers who got
            sick of itineraries that read like a spreadsheet. We craft journeys that feel like
            stories — loud, colorful, and unforgettable.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:items-center">
        <div className="relative">
          <img src={patagonia} alt="Patagonia turquoise lake" loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-glow" />
          <img src={bali} alt="Bali rice terraces" loading="lazy" className="shadow-glow-teal absolute -bottom-10 -right-6 hidden aspect-square w-1/2 rounded-3xl object-cover ring-8 ring-background md:block" />
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Our Mission</span>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Breaking the mold of boring travel — <span className="text-gradient-sunset">one wild story at a time.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We believe the best trips don't come from packages. They come from someone who actually
            listens, who's walked the trails, who knows the chef in that tiny back-alley restaurant
            in Kyoto. That's the crew you get.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're chasing the northern lights, your first surf, a 5-star honeymoon or a
            corporate retreat that doesn't suck — we'll meet you with maps, mischief and a serious
            obsession with detail.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Our Core Values</span>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">Six rules we'll never bend.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-glow">
                <div className="bg-gradient-sunset grid size-12 place-items-center rounded-2xl text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="bg-gradient-sunset shadow-glow rounded-[2.5rem] p-10 text-white md:p-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">The Crew</span>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">A small, obsessive team. Big, global black book.</h2>
          <p className="mt-5 max-w-3xl text-lg text-white/90">
            Trip designers, local fixers, photographers, mountain guides and one suspiciously
            enthusiastic pastry expert across 40+ countries. We don't outsource your trip to a
            call center — when you message us, an actual human who has been there answers.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["40+", "Countries on speed-dial"],
              ["48h", "Custom itinerary turnaround"],
              ["24/7", "Real-human concierge"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                <div className="text-4xl font-black">{k}</div>
                <div className="text-sm uppercase tracking-widest text-white/85">{v}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/packages" className="btn-ghost-vibrant !text-ink">See our trips</Link>
            <Link to="/contact" className="btn-hero !bg-ink !bg-none">Talk to the crew</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}