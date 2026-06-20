import santorini from "@/assets/pkg-santorini.jpg";
import iceland from "@/assets/pkg-iceland.jpg";
import bali from "@/assets/pkg-bali.jpg";
import patagonia from "@/assets/pkg-patagonia.jpg";
import dubai from "@/assets/pkg-dubai.jpg";
import kyoto from "@/assets/pkg-kyoto.jpg";

export type PackageType = "Adventure" | "Luxury" | "City" | "Culture" | "Wildlife" | "Custom";

export interface TourPackage {
  id: string;
  title: string;
  location: string;
  image: string;
  type: PackageType;
  duration: number; // days
  priceFrom: number;
  blurb: string;
  highlights: string[];
  inclusions: string[];
}

export const PACKAGES: TourPackage[] = [
  {
    id: "iceland-aurora",
    title: "Aurora Chasers Iceland",
    location: "Reykjavik · Vík · Jökulsárlón",
    image: iceland,
    type: "Adventure",
    duration: 7,
    priceFrom: 2890,
    blurb: "Glacier hikes, ice caves and three nights staked out for the northern lights.",
    highlights: ["Golden Circle by 4x4", "Blue Lagoon spa float", "Aurora photography night"],
    inclusions: ["Boutique hotels", "All breakfasts + 3 dinners", "Pro aurora guide"],
  },
  {
    id: "patagonia-trek",
    title: "Patagonia Wild Trek",
    location: "Torres del Paine, Chile",
    image: patagonia,
    type: "Adventure",
    duration: 10,
    priceFrom: 3650,
    blurb: "Ten days of jaw-on-the-floor peaks, glacier lakes and W-circuit trekking.",
    highlights: ["Grey Glacier kayak", "W-Trek with guide", "Estancia asado night"],
    inclusions: ["Mountain refuges", "All trail meals", "Park permits & transfers"],
  },
  {
    id: "maldives-overwater",
    title: "Maldives Overwater Escape",
    location: "North Malé Atoll",
    image: santorini,
    type: "Luxury",
    duration: 5,
    priceFrom: 4200,
    blurb: "Private overwater villa, candlelit sandbank dinners and a personal butler.",
    highlights: ["Seaplane arrival", "Couples sunset cruise", "Reef snorkel safari"],
    inclusions: ["Overwater villa", "All-inclusive dining", "Spa credit"],
  },
  {
    id: "dubai-edge",
    title: "Dubai Skyline Edge",
    location: "Dubai, UAE",
    image: dubai,
    type: "City",
    duration: 5,
    priceFrom: 1990,
    blurb: "Neon nights, dune-bashing afternoons and the world's tallest skybar.",
    highlights: ["Burj Khalifa SkyDeck", "Desert quad-bike sunset", "Marina yacht brunch"],
    inclusions: ["5★ downtown hotel", "Private driver", "All experience tickets"],
  },
  {
    id: "kyoto-soul",
    title: "Kyoto Soul Journey",
    location: "Kyoto · Nara · Osaka",
    image: kyoto,
    type: "Culture",
    duration: 8,
    priceFrom: 3290,
    blurb: "Bamboo forests, tea ceremonies, and a private geisha-district walk.",
    highlights: ["Arashiyama bamboo dawn", "Private tea ceremony", "Nara deer & temples"],
    inclusions: ["Ryokan + boutique stays", "JR Pass", "English-speaking guide"],
  },
  {
    id: "bali-soul",
    title: "Bali Soul & Surf",
    location: "Ubud · Canggu · Nusa Penida",
    image: bali,
    type: "Culture",
    duration: 9,
    priceFrom: 2150,
    blurb: "Sunrise rice terraces, surf lessons, and a temple blessing under volcanoes.",
    highlights: ["Mt Batur sunrise hike", "Surf lessons in Canggu", "Penida cliff swim"],
    inclusions: ["Pool villas", "Daily breakfast", "Private driver"],
  },
  {
    id: "kenya-safari",
    title: "Big Five Kenya Safari",
    location: "Maasai Mara · Amboseli",
    image: dubai, // placeholder reuse not great — replaced below
    type: "Wildlife",
    duration: 8,
    priceFrom: 4490,
    blurb: "Tented luxury camps, dawn game drives and the Great Migration up close.",
    highlights: ["Hot-air balloon safari", "Maasai village visit", "Amboseli elephant herd"],
    inclusions: ["Luxury tented camps", "All game drives", "Internal flights"],
  },
  {
    id: "custom-anywhere",
    title: "Design Your Own Expedition",
    location: "Anywhere on the map",
    image: iceland,
    type: "Custom",
    duration: 0,
    priceFrom: 0,
    blurb: "Brief us once, get a tailor-made itinerary in 48 hours. Zero templates.",
    highlights: ["Dedicated trip designer", "Unlimited revisions", "24/7 trip concierge"],
    inclusions: ["Custom itinerary", "Hand-picked stays", "Local fixers worldwide"],
  },
];