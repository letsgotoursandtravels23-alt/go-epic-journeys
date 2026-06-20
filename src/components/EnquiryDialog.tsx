import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Rocket } from "lucide-react";

export function EnquiryDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      toast.success("Enquiry received!", {
        description: "Our crew will hit you up within 24 hours. Get ready to pack.",
      });
    }, 700);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg overflow-hidden border-0 p-0">
        <div className="bg-gradient-sunset px-6 py-5 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl font-extrabold text-white">
              <Rocket className="size-6" /> Quick Enquiry
            </DialogTitle>
            <DialogDescription className="text-white/90">
              Tell us where you're dreaming of — we'll build the trip.
            </DialogDescription>
          </DialogHeader>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 px-6 py-5">
          <div className="grid gap-2">
            <Label htmlFor="eq-name">Your name</Label>
            <Input id="eq-name" required placeholder="Alex Wanderer" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="eq-email">Email</Label>
              <Input id="eq-email" type="email" required placeholder="you@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="eq-phone">Phone</Label>
              <Input id="eq-phone" placeholder="+1 555 1234" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="eq-dest">Dream destination</Label>
            <Input id="eq-dest" placeholder="Iceland, Bali, anywhere wild…" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="eq-msg">Tell us more</Label>
            <Textarea id="eq-msg" rows={3} placeholder="Travel dates, group size, vibe…" />
          </div>
          <button type="submit" className="btn-hero mt-2" disabled={submitting}>
            {submitting ? "Sending…" : "Send My Enquiry →"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}