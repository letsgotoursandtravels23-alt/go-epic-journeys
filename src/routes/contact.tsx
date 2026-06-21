import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import hero from "@/assets/hero-paradise.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lets Go Tours and Travels" },
      { name: "description", content: "Talk to a real human. Hotline, email, WhatsApp and HQ — we reply within 24 hours." },
      { property: "og:title", content: "Contact the Crew" },
      { property: "og:description", content: "Lightning-fast contact channels for your next trip." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [busy, setBusy] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      (e.currentTarget as HTMLFormElement).reset();
      toast.success("Message sent!", { description: "We'll be in your inbox within 24 hours." });
    }, 700);
  }

  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Sunset coastline" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="mx-auto max-w-7xl px-5 py-28 text-white md:py-36">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-secondary">Contact</span>
          <h1 className="mt-3 max-w-3xl text-5xl font-black md:text-7xl">
            Let's start <span className="text-gradient-sunset">planning loud.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            A real human reads every message. Average reply time: 4 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.2fr]">
        {/* Channels */}
        <div className="space-y-4">
          {[
            { icon: Phone, t: "Hotline", v: "9500488055 / 8939588055", s: "Mon–Sun, 24/7" },
            { icon: MessageCircle, t: "WhatsApp", v: "8939588055", s: "Fastest replies" },
            { icon: Mail, t: "Email", v: "letsgotoursandtravels23@gmail.com", s: "We reply within 4 hours" },
            { icon: MapPin, t: "HQ", v: "Shri Krishnaswamy Matric School, No 5635 opt to", s: "Ayappakkam, Chennai, Tamil Nadu 600077" },
          ].map(({ icon: Icon, t, v, s }) => (
            <div key={t} className="group flex items-start gap-4 rounded-3xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-glow">
              <div className="bg-gradient-sunset grid size-12 shrink-0 place-items-center rounded-2xl text-white">
                <Icon className="size-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{t}</div>
                <div className="text-lg font-extrabold">{v}</div>
                <div className="text-sm text-muted-foreground">{s}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-glow md:p-10"
        >
          <div className="bg-gradient-sunset absolute -top-24 -right-24 size-72 rounded-full opacity-20 blur-3xl" />
          <h2 className="relative text-3xl font-black">Send us the brief.</h2>
          <p className="relative mt-1 text-sm text-muted-foreground">All fields except notes are required.</p>
          <div className="relative mt-6 grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required placeholder="Alex Wanderer" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" required type="email" placeholder="you@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" required placeholder="+1 555 1234" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dest">Dream destinations</Label>
              <Input id="dest" required placeholder="Iceland, Patagonia, Bali…" />
            </div>
            <div className="grid gap-2 md:col-span-2">
              <Label htmlFor="notes">Special requests</Label>
              <Textarea id="notes" rows={5} placeholder="Travel dates, group size, vibe, dealbreakers, any wild ideas…" />
            </div>
          </div>
          <button type="submit" disabled={busy} className="btn-hero mt-6 w-full !py-3.5 text-base">
            {busy ? "Sending…" : "Send My Brief →"}
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}