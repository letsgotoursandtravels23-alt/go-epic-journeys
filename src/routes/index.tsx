import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, Compass, Crown, Drama, Building2, Trees, Wand2, Shield, Sparkles, MapPinned, HeartHandshake, Star } from "lucide-react";
import hero from "@/assets/hero-paradise.jpg";
import catCity from "@/assets/cat-city.jpg";
import catAdv from "@/assets/cat-adventure.jpg";
import catLux from "@/assets/cat-luxury.jpg";
import catCul from "@/assets/cat-culture.jpg";
import catWild from "@/assets/cat-wildlife.jpg";
import catCustom from "@/assets/cat-custom.jpg";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lets Go Tours and Travels — Stop Dreaming. Start Packing." },
      { name: "description", content: "Vibrant, hand-tailored adventure, luxury, cultural, city and wildlife trips. Your next epic journey starts here." },
      { property: "og:title", content: "Lets Go Tours and Travels" },
      { property: "og:description", content: "Your next epic adventure starts here." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const CATEGORIES = [
  { title: "Adrenaline & Adventure", icon: Compass, img: catAdv, color: "from-coral to-sunset" },
  { title: "Elite Luxury Getaways", icon: Crown, img: catLux, color: "from-primary to-coral" },
  { title: "Deep Cultural Immersions", icon: Drama, img: catCul, color: "from-sunset to-lemon" },
  { title: "Neon City Beats", icon: Building2, img: catCity, color: "from-primary to-teal" },
  { title: "Wild Nature & Wildlife", icon: Trees, img: catWild, color: "from-sunset to-coral" },
  { title: "Tailor-Made Expeditions", icon: Wand2, img: catCustom, color: "from-teal to-primary" },
];

const WHY = [
  { icon: Shield, title: "Ironclad safety", body: "Vetted local crews, 24/7 concierge, real humans on the line." },
  { icon: Sparkles, title: "100% personalized", body: "No copy-paste itineraries. Every trip built around you." },
  { icon: MapPinned, title: "Off the beaten path", body: "Hidden coves, secret chefs, sunrise spots tourists miss." },
  { icon: HeartHandshake, title: "Unmatched expertise", body: "Designers who've actually lived in the places you're going." },
];

function Index() {
  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Cinematic tropical sunset over turquoise ocean cliffs"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/20 to-background" />
        <div className="mx-auto grid min-h-[88svh] max-w-7xl items-end px-5 pb-20 pt-32 md:pt-44">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <Sparkles className="size-3.5" /> Adventure crafted, not copy-pasted
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)] sm:text-7xl md:text-[5.5rem]">
              Stop Dreaming.<br />
              Start Packing.<br />
              <span className="text-gradient-sunset">Let's Go.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/90 md:text-xl">
              Your next epic adventure starts here with{" "}
              <span className="font-semibold text-white">Lets Go Tours and Travels</span> —
              vibrant, fearless, lovingly hand-crafted journeys to every corner of the map.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/packages" className="btn-hero">
                Grab a Package <ArrowRight className="size-4" />
              </Link>
              <Link to="/contact" className="btn-ghost-vibrant">Contact the Crew</Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/80">
              {[
                ["120+", "Destinations"],
                ["18k", "Happy travelers"],
                ["4.9★", "Average rating"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white">{k}</span>
                  <span className="text-sm uppercase tracking-widest">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Pick your flavor</span>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">Six ways to <span className="text-gradient-sunset">wander loud</span></h2>
          </div>
          <Link to="/packages" className="text-sm font-bold text-primary hover:underline">View all packages →</Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map(({ title, icon: Icon, img }, i) => (
            <Link
              key={title}
              to="/packages"
              className={`group relative overflow-hidden rounded-3xl ${i === 0 ? "lg:row-span-2 lg:min-h-[460px]" : "min-h-[260px]"}`}
            >
              <img src={img} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="bg-gradient-sunset mb-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  <Icon className="size-3" /> Category
                </span>
                <h3 className="text-2xl font-extrabold text-white md:text-3xl">{title}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/90">
                  Explore trips <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden bg-muted/50 py-24">
        <div className="bg-gradient-sunset absolute -top-32 -right-32 size-96 rounded-full opacity-20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Why Go With Us?</span>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">
              We deliver the trip you'll <span className="text-gradient-sunset">actually brag about.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ icon: Icon, title, body }) => (
              <div key={title} className="group rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-glow">
                <div className="bg-gradient-sunset grid size-12 place-items-center rounded-2xl text-white transition group-hover:rotate-6">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL TEASER */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="bg-gradient-tropic shadow-glow-teal relative overflow-hidden rounded-[2.5rem] p-10 text-white md:p-16">
          <div className="absolute -top-20 -right-10 size-80 rounded-full bg-lemon/40 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex gap-1 text-lemon">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-5 fill-current" />)}
              </div>
              <p className="mt-4 text-2xl font-extrabold leading-snug md:text-3xl">
                "Booked Patagonia on a whim. Came back a different human. The crew thought
                of details I didn't even know I'd want."
              </p>
              <div className="mt-5 text-white/85">— Priya R., trekked Torres del Paine</div>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/testimonials" className="btn-ghost-vibrant !text-ink">Read more stories</Link>
              <Link to="/packages" className="btn-hero">Find my trip</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
