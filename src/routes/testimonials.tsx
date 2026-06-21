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
  { name: "Varsha S", trip: "Maldives", text: "I recently booked my Maldives vacation with Let's Go Tour & Travels, and it was an absolutely amazing experience! From the moment I made my inquiry, their team was extremely professional, responsive, and attentive to every detail. All arrangements — from flights and transfers to the resort stay and activities — were handled smoothly and on time. The resort they suggested was beautiful, the food and hospitality were great, and we didn't have to worry about a single thing during the trip. Their coordination and support made the entire journey stress-free and memorable. I truly appreciate their excellent service and would highly recommend Let's Go Tour & Travels to anyone planning a Maldives getaway or any international vacation. Definitely I'm very excited to travel with Let's Go Tour & Travels!", tint: "from-primary to-coral" },
  { name: "Karthik & Sahithya", trip: "Bali", text: "We just wanted to extend our heartfelt thanks for the wonderful experience we had over the past week. It was truly a memorable trip, and we are so grateful to your entire team for making everything so smooth, enjoyable, and well-organized. A special shoutout to Yogi, our driver throughout the journey – he was absolutely fantastic! Right from the airport pickup to the final drop, he ensured we were always comfortable, on time, and well taken care of. His friendly nature, helpful attitude, and deep knowledge of the local places added so much value to our overall experience. Yogi truly went above and beyond, and we genuinely feel that without him, the trip wouldn't have been half as special as it turned out to be. We'd also like to appreciate Infa from your team, who was equally wonderful to coordinate with. He made sure everything was aligned perfectly with our itinerary and responded to every need promptly and professionally. Thank you once again for putting together such a well-curated trip and for assigning us such a great team. We carry back home some beautiful memories that we'll cherish forever – all thanks to your efforts! Looking forward to planning more journeys with you in the future.", tint: "from-teal to-primary" },
  { name: "Dinakaran Pandurangan", trip: "Kudremukh Peak, Karnataka", text: "We had a hike to Netravathi and Kudremukh Peak in Karnataka... It was an unforgettable experience with this team... Wonderful experience... looking forward to have more like this!", tint: "from-sunset to-lemon" },
  { name: "Sahana Kr", trip: "Pangarchulla Trek", text: "I recently completed the Pangarchulla Trek with LetsGo Tours and Travels, and I must say, the experience was nothing short of incredible! From start to finish, every detail was meticulously planned, ensuring a seamless and enjoyable adventure. Right from the booking process till arrival, everything was well-organized, from transportation to accommodation, making the journey stress-free. The trek itself was breathtaking, and our guides were exceptional — knowledgeable, friendly, and always prioritizing safety. They made sure everyone was comfortable with the pace, provided insightful information about the region, and ensured that we were well-acclimatized. The food arrangements were beyond expectations, with hot, nutritious meals served even in high-altitude conditions. Campsites were well-chosen, offering stunning views. If you're planning the Pangarchulla Trek or any other adventure, I highly recommend LetsGo Tours and Travels. This was my first trip with the LetsGo family. Infa and Jacob planned the entire trip for all of us and customised the travel package as per each requirement. We embarked on an unforgettable journey with the team with loads of gossips, dance, games and adventure. Thank you team for making an unforgettable adventure! From seamless logistics to stunning destinations, every moment was crafted with care. Your dedication to excellence made my journey extraordinary. I can't wait to embark on my next adventure with you!", tint: "from-coral to-sunset" },
  { name: "Aravindh Subbiah", trip: "Trekking", text: "Let's Go Tours and Travels truly stands out as a professional trekking organization! Their well-planned itineraries, experienced guides, and commitment to safety ensure an unforgettable adventure. Whether you're a beginner or an experienced trekker, they provide an exceptional experience with breathtaking trails, seamless logistics, and top-notch hospitality. Highly recommended for anyone looking to explore the great outdoors with confidence!", tint: "from-primary to-teal" },
  { name: "Ayshagul", trip: "Kerala Munnar", text: "We were not sure to go somewhere, with a last minute decision, they arranged us a quick trip to Kerala Munnar just 2 days before and we enjoyed all the details. They are good at offering which location suits you better regarding your family, children and needs. We enjoyed our hotel, the car and driver good at English and safe driving, and lots of options for children around. It was also lots of serenity with full of greens and cascades, spice gardens around. They also book the flight tickets for us. We are so satisfied, thanks Jacob!", tint: "from-sunset to-coral" },
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