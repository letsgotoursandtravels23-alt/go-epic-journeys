import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { EnquiryDialog } from "./EnquiryDialog";
import logoAsset from "@/assets/letsgo-logo.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [enquiry, setEnquiry] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
          <Link to="/" className="group flex items-center gap-2" aria-label="Let's Go Tours & Travels home">
            <img
              src={logoAsset.url}
              alt="Let's Go Tours & Travels"
              className="h-10 w-auto md:h-12 transition-transform group-hover:scale-[1.03]"
              width={180}
              height={48}
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-3.5 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground"
                activeProps={{
                  className:
                    "rounded-full px-3.5 py-2 text-sm font-semibold !text-foreground bg-muted",
                }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setEnquiry(true)} className="btn-hero hidden md:inline-flex !px-5 !py-2.5 text-sm">
              Quick Enquiry
            </button>
            <button
              className="grid size-10 place-items-center rounded-full border border-border md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="grid gap-1 px-5 py-3">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground"
                  activeProps={{ className: "rounded-xl px-3 py-2.5 text-sm font-semibold bg-muted !text-foreground" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <button onClick={() => { setOpen(false); setEnquiry(true); }} className="btn-hero mt-2 !py-2.5 text-sm">
                Quick Enquiry
              </button>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="relative mt-24 overflow-hidden bg-ink text-white">
        <div className="bg-gradient-sunset absolute -top-32 -left-24 size-[28rem] rounded-full opacity-30 blur-3xl" />
        <div className="bg-gradient-tropic absolute -right-24 top-10 size-[24rem] rounded-full opacity-25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center rounded-2xl bg-white p-2">
                <img src={logoAsset.url} alt="Let's Go Tours & Travels" className="h-9 w-auto" />
              </span>
              <span className="text-xl font-extrabold tracking-tight">Lets Go Tours & Travels</span>
            </div>
            <p className="mt-4 max-w-md text-white/70">
              Stop dreaming. Start packing. We craft outrageously vibrant, hand-tailored
              journeys for explorers who refuse a boring itinerary.
            </p>
            <div className="mt-5 flex gap-2">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.slice(1).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/80 hover:text-white">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">Crew HQ</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li className="flex items-start gap-2"><Phone className="size-4 mt-0.5 text-secondary" /> 9500488055 / 8939588055</li>
              <li className="flex items-start gap-2"><Mail className="size-4 mt-0.5 text-secondary" /> letsgotoursandtravels23@gmail.com</li>
              <li className="flex items-start gap-2"><MessageCircle className="size-4 mt-0.5 text-secondary" /> 24/7 WhatsApp concierge</li>
            </ul>
          </div>
        </div>
        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/50 md:flex-row">
            <span>© {new Date().getFullYear()} Lets Go Tours and Travels. Wander loud.</span>
            <span className="flex items-center gap-1">Website designed by <a href="https://instagram.com/harrysrichardson" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">@harrysrichardson</a> (Instagram)</span>
          </div>
        </div>
      </footer>

      {/* Floating enquiry button */}
      <button
        onClick={() => setEnquiry(true)}
        className="bg-gradient-sunset shadow-glow fixed bottom-12 right-6 z-30 flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold text-white transition hover:scale-105"
        style={{ animation: "float-y 3.5s ease-in-out infinite" }}
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline">Instant Enquiry</span>
      </button>

      <EnquiryDialog open={enquiry} onOpenChange={setEnquiry} />
    </div>
  );
}