import chakli from "@/assets/chakli.jpg";
import chivda from "@/assets/chivda.jpg";

export type Product = {
  name: string;
  slug: string;
  description?: string;
  image: string;
  imageAlt: string;
  category: string;
  featured: boolean;
};

// Single source of truth for the catalogue. Images are temporary stand-ins
// until genuine product photographs are supplied.
export const products: Product[] = [
  {
    name: "Special Chakli",
    slug: "special-chakli",
    description: "A traditional spiral snack, made the homemade way.",
    image: chakli,
    imageAlt: "Golden chakli spirals in a brass plate",
    category: "Savoury",
    featured: true,
  },
  {
    name: "Special Chivda",
    slug: "special-chivda",
    description: "A classic Maharashtrian mix, made for sharing.",
    image: chivda,
    imageAlt: "Chivda in a terracotta bowl",
    category: "Savoury",
    featured: true,
  },
];

export const site = {
  name: "Rupali Snacks",
  tagline: "Healthy Food, Happy Mood",
  location: "Pune, Maharashtra, India",
  established: 2026,
  // Add when supplied: WhatsApp in international digits only, e.g. "919800000000"
  whatsapp: null as string | null,
  instagram: null as string | null,
};
