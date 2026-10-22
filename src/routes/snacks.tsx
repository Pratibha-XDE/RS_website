import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/data/products";
import { btn, ProductGrid, Rangoli } from "@/components/site";

export const Route = createFileRoute("/snacks")({
  head: () => ({
    meta: [
      { title: "Our Snacks | Rupali Snacks, Pune" },
      { name: "description", content: "Explore the homemade snack collection of Rupali Snacks, including Special Chakli and Special Chivda." },
      { property: "og:title", content: "Our Snacks | Rupali Snacks" },
      { property: "og:description", content: "Explore the flavours and favourites of Rupali Snacks." },
    ],
  }),
  component: Snacks,
});

function Snacks() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Rangoli className="pointer-events-none absolute -right-16 -top-16 w-72 text-gold/40" />
        <div className="container-site relative py-16 md:py-24">
          <p className="eyebrow">The collection</p>
          <h1 className="mt-4 text-5xl md:text-6xl">Discover Our Snacks.</h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Explore the flavours and favourites of Rupali Snacks.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-site">
          <ProductGrid items={products} />
          <div className="mt-20 flex flex-col items-center gap-4 text-center">
            <p className="font-display text-2xl">More homemade favourites on the way.</p>
            <Link to="/" hash="contact" className={btn.primary}>Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
