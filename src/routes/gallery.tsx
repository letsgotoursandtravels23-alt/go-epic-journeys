import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import g1 from "@/assets/gal-1.jpg";
import g2 from "@/assets/gal-2.jpg";
import g3 from "@/assets/gal-3.jpg";
import g4 from "@/assets/gal-4.jpg";
import g5 from "@/assets/gal-5.jpg";
import g6 from "@/assets/gal-6.jpg";
import g7 from "@/assets/pkg-santorini.jpg";
import g8 from "@/assets/pkg-iceland.jpg";
import g9 from "@/assets/pkg-bali.jpg";
import g10 from "@/assets/pkg-patagonia.jpg";
import g11 from "@/assets/pkg-dubai.jpg";
import g12 from "@/assets/pkg-kyoto.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Lets Go Tours and Travels" },
      { name: "description", content: "Cinematic photography from our trips across the world — landscapes, wildlife, culture and real travelers." },
      { property: "og:title", content: "Travel Gallery" },
      { property: "og:description", content: "An immersive feed of color and adventure." },
    ],
  }),
  component: Gallery,
});

const IMAGES = [
  { src: g1, alt: "Hot air balloons over Cappadocia at sunrise", caption: "Cappadocia, Turkey" },
  { src: g2, alt: "Snorkeler with tropical yellow fish", caption: "Coral reef, Indonesia" },
  { src: g3, alt: "Moroccan spice market", caption: "Marrakech, Morocco" },
  { src: g4, alt: "Machu Picchu with llama at sunrise", caption: "Machu Picchu, Peru" },
  { src: g5, alt: "Couple on a motorbike at sunset", caption: "Ha Giang Loop, Vietnam" },
  { src: g6, alt: "Kayaker in a Norwegian fjord", caption: "Geirangerfjord, Norway" },
  { src: g7, alt: "Santorini blue domes at twilight", caption: "Oia, Santorini" },
  { src: g8, alt: "Northern lights over Icelandic waterfall", caption: "Þingvellir, Iceland" },
  { src: g9, alt: "Bali rice terraces", caption: "Tegalalang, Bali" },
  { src: g10, alt: "Patagonia turquoise lake", caption: "Torres del Paine" },
  { src: g11, alt: "Dubai skyline at twilight", caption: "Dubai, UAE" },
  { src: g12, alt: "Kyoto bamboo grove", caption: "Arashiyama, Kyoto" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-32">
        <div className="bg-gradient-tropic absolute -top-32 -left-24 size-[28rem] rounded-full opacity-40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-secondary">Gallery</span>
          <h1 className="mt-3 max-w-3xl text-5xl font-black md:text-7xl">
            Postcards from <span className="text-gradient-sunset">everywhere.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            A loud, colorful, ever-growing feed of moments from real Lets Go trips.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-2xl break-inside-avoid"
            >
              <div className="relative">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 text-left text-sm font-semibold text-white transition group-hover:translate-y-0">
                  {img.caption}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-5xl border-0 bg-transparent p-0 shadow-none">
          {open !== null && (
            <div className="relative">
              <img src={IMAGES[open].src} alt={IMAGES[open].alt} className="max-h-[85vh] w-full rounded-2xl object-contain" />
              <button
                onClick={() => setOpen(null)}
                className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-black/70 text-white"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
              <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-black/80 to-transparent p-4 text-center font-semibold text-white">
                {IMAGES[open].caption}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}