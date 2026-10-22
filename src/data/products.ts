import chakli from "@/assets/chakli.jpg";
import chivda from "@/assets/chivda.jpg";
import besanLaddu from "@/assets/besan-laddu.jpg";
import bundiLaddu from "@/assets/bundi-laddu.jpg";
import dryfruitsLaddu from "@/assets/dryfruits-laddu.jpg";
import shankarpaliGod from "@/assets/shankarpali-god.jpg";
import shankarpaliKhari from "@/assets/shankarpali-khari.jpg";
import shev from "@/assets/shev.jpg";
import chakliPith from "@/assets/chakli-pith.jpg";

export type Product = {
  name: string;
  slug: string;
  description?: string;
  image: string;
  imageAlt: string;
  category: "Savoury" | "Sweets" | "Traditional Flour";
  featured: boolean;
};

// Single source of truth for the catalogue.
export const products: Product[] = [
  {
    name: "Chakli",
    slug: "chakli",
    description: "Golden, crispy spiral snack made with authentic roasted grain bhajani and traditional spices.",
    image: chakli,
    imageAlt: "Crisp golden chakli spirals arranged in a brass bowl",
    category: "Savoury",
    featured: true,
  },
  {
    name: "Khari Shankarpali",
    slug: "khari-shankarpali",
    description: "Flaky, salted diamond crisps delicately seasoned with roasted cumin and sesame.",
    image: shankarpaliKhari,
    imageAlt: "Flaky savoury khari shankarpali crisps in a brass plate",
    category: "Savoury",
    featured: false,
  },
  {
    name: "Sweet Shankarpali",
    slug: "sweet-shankarpali",
    description: "Golden diamond-cut sweet bites crafted with pure ghee, sugar, and fine wheat flour.",
    image: shankarpaliGod,
    imageAlt: "Golden sweet shankarpali diamond cookies in a brass bowl",
    category: "Sweets",
    featured: true,
  },
  {
    name: "Thin Poha Chivda",
    slug: "thin-poha-chivda",
    description: "Light roasted beaten rice delicately tempered with crunchy peanuts, cashews, and aromatic curry leaves.",
    image: chivda,
    imageAlt: "Thin poha chivda garnished with roasted nuts and curry leaves in a terracotta bowl",
    category: "Savoury",
    featured: true,
  },
  {
    name: "Shev",
    slug: "shev",
    description: "Delicately spiced, crisp golden sev crafted from premium gram flour and fresh spices.",
    image: shev,
    imageAlt: "Crisp golden shev in a traditional Warli-painted terracotta bowl",
    category: "Savoury",
    featured: false,
  },
  {
    name: "Dry Fruits Ladoo",
    slug: "dry-fruits-ladoo",
    description: "Rich, wholesome festive ladoos packed with premium roasted almonds, cashews, pistachios, and pure ghee.",
    image: dryfruitsLaddu,
    imageAlt: "Rich dry fruits ladoos with visible almonds, pistachios, and raisins in a brass plate",
    category: "Sweets",
    featured: false,
  },
  {
    name: "Besan Ladoo",
    slug: "besan-ladoo",
    description: "Classic melt-in-the-mouth sweet made with slowly roasted gram flour, pure ghee, and fragrant cardamom.",
    image: besanLaddu,
    imageAlt: "Golden besan ladoos garnished with chopped pistachios in a brass thali",
    category: "Sweets",
    featured: true,
  },
  {
    name: "Boondi Ladoo",
    slug: "boondi-ladoo",
    description: "Soft, succulent golden pearls steeped in aromatic saffron-cardamom syrup and garnished with dry fruits.",
    image: bundiLaddu,
    imageAlt: "Juicy golden boondi ladoos with saffron and almonds in a brass dish",
    category: "Sweets",
    featured: false,
  },
  {
    name: "Chakli Bhajani Flour",
    slug: "chakli-bhajani-flour",
    description: "Meticulously roasted multi-grain and pulse flour blend for making authentic, crunchy homemade chaklis.",
    image: chakliPith,
    imageAlt: "Traditional chakli bhajani flour in an earthen pot with brass chakli press and roasted spices",
    category: "Traditional Flour",
    featured: false,
  },
];

export const site = {
  name: "Rupali Snacks",
  tagline: "Healthy Food, Happy Mood",
  location: "Pune, Maharashtra, India",
  established: 2012,
  phone: "+91 99709 12152",
  phoneTel: "+919970912152",
  instagram: "https://www.instagram.com/rupalisnacks?psln=ZWx3dnlqbXZueGdr",
  linkedin: "https://www.linkedin.com/in/rupali-patil-b84b18264?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  // Add when supplied: WhatsApp in international digits only, e.g. "919800000000"
  whatsapp: null as string | null,
};
