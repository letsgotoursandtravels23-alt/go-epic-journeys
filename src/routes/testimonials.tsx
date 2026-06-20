import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reviews — Lets Go Tours and Travels" },
      { name: "description", content: "Real stories from real travelers — 4.9★ average across thousands of trips." },
      { property: "og:title", content: "Traveler Reviews" },
      { property: "og:description", content: "What our travelers actually say." },
    ],
  }),
  component: Testimonials,
});

const REVIEWS = [
  { name: "Priya R.", trip: "Patagonia Trek, Chile", text: "Booked Patagonia on a whim. Came back a different human. The crew thought of details I didn't even know I'd want.", tint: "from-primary to-coral" },
  { name: "Marco & Lena", trip: "Maldives Honeymoon", text: "Every sunset felt staged just for us. Private dinner on a sandbank — we still talk about it weekly.", tint: "from-teal to-primary" },
  { name: "The Okafor Family", trip: "Kenya Safari", text: "Three kids, zero meltdowns. The guides made the Great Migration genuinely magical for all of us.", tint: "from-sunset to-lemon" },
  { name: "Hiro T.", trip: "Iceland Aurora Trip", text: "Saw the lights three nights in a row. Pro photographer guide saved my Instagram for the next year.", tint: "from-coral to-sunset" },
  { name: "Aisha M.", trip: "Bali Soul & Surf", text: "Solo female traveler — felt cared for from airport pickup to last sunset. Already booked my next.", tint: "from-primary to-teal" },
  { name: "TechFlow Inc.", trip: "Corporate Retreat, Dubai", text: "42 employees, 5 days, zero logistics headaches. Our offsite has officially peaked.", tint: "from-sunset to-coral" },
];

function Testimonials() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-32">
        <div className="bg-gradient-sunset absolute -top-32 -left-24 size-[28rem] rounded-full opacity-40 blur-3xl" />
        <div className="bg-gradient-tropic absolute -bottom-32 -right-24 size-[28rem] rounded-full opacity-30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-secondary">Traveler Stories</span>
          <h1 className="mt-3 max-w-3xl text-5xl font-black md:text-7xl">
            18,000+ travelers. <span className="text-gradient-sunset">One obsession.</span>
          </h1>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex gap-1 text-lemon">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-5 fill-current" />)}
            </div>
            <span className="text-white/85"><b className="text-white">4.9 / 5</b> average across 2,300+ verified reviews</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${r.tint} p-7 text-white shadow-glow`}
            >
              <Quote className="absolute -top-2 right-3 size-24 text-white/15" />
              <div className="flex gap-1 text-lemon">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}
              </div>
              <p className="relative mt-4 text-lg font-semibold leading-snug">"{r.text}"</p>
              <div className="mt-6 border-t border-white/25 pt-4">
                <div className="font-extrabold">{r.name}</div>
                <div className="text-sm text-white/85">{r.trip}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-border bg-card p-10 text-center md:p-14">
          <h2 className="text-3xl font-black md:text-4xl">Your story is the next one we tell.</h2>
          <p className="mt-3 text-muted-foreground">Let's design something you'll never stop talking about.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/packages" className="btn-hero">Browse packages</Link>
            <Link to="/contact" className="btn-ghost-vibrant">Tell us your dream trip</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}