import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/data/products";
import { btn, ProductGrid, Rangoli } from "@/components/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/snacks")({
  head: () => ({
    meta: [
      { title: "Our Snacks | Rupali Snacks, Pune" },
      {
        name: "description",
        content:
          "Explore the authentic homemade snack and sweet collection of Rupali Snacks, including Chakli, Chivda, Shankarpali, Ladoos, and Chakli Bhajani Flour.",
      },
      { property: "og:title", content: "Our Snacks | Rupali Snacks" },
      { property: "og:description", content: "Explore the flavours and handcrafted favourites of Rupali Snacks." },
    ],
  }),
  component: Snacks,
});

const categories = ["All", "Savoury", "Sweets", "Traditional Flour"] as const;

function Snacks() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Rangoli className="pointer-events-none absolute -right-16 -top-16 w-72 text-gold/40" />
        <div className="container-site relative py-16 md:py-24">
          <p className="eyebrow">The collection</p>
          <h1 className="mt-4 text-5xl md:text-6xl">Discover Our Snacks.</h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Explore authentic Maharashtrian snacks, handcrafted festive sweets, and traditional flour prepared with homemade care.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-200",
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border/80 bg-card text-espresso/80 hover:border-primary hover:text-primary"
                )}
              >
                {cat}
                {cat === "All" ? ` (${products.length})` : ` (${products.filter((p) => p.category === cat).length})`}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-site">
          <ProductGrid items={filteredProducts} />
          <div className="mt-20 flex flex-col items-center gap-4 text-center">
            <p className="font-display text-2xl">Looking for festive orders or custom quantities?</p>
            <Link to="/" hash="contact" className={btn.primary}>Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
