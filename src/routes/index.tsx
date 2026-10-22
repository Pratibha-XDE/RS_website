import { createFileRoute, Link } from "@tanstack/react-router";
import { HandHeart, Leaf, Sparkles, Users, Droplets, Flame } from "lucide-react";
import hero from "@/assets/hero.jpg";
import festive from "@/assets/festive.jpg";
import { products, site } from "@/data/products";
import { btn, Marigold, ProductGrid, Rangoli, SectionHeading } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rupali Snacks | Homemade Indian Snacks in Pune" },
      {
        name: "description",
        content:
          "Discover Rupali Snacks, a homegrown Indian snacks brand in Pune, Maharashtra. Explore our traditional snack collection and learn about our story.",
      },
      { property: "og:title", content: "Rupali Snacks | Homemade Indian Snacks in Pune" },
      { property: "og:description", content: "A homegrown Indian snacks brand from Pune, Maharashtra." },
    ],
  }),
  component: Home,
});

const intro = [
  { icon: HandHeart, title: "Homemade with Care", text: "Prepared in small batches, the way snacks are made at home." },
  { icon: Leaf, title: "Inspired by Tradition", text: "Familiar flavours rooted in Maharashtrian kitchens." },
  { icon: Users, title: "Growing Together", text: "A small business that creates work for women in our community." },
];

const values = [
  { icon: Flame, title: "Homemade with Care", text: "Every batch is made by hand, with patience." },
  { icon: Sparkles, title: "Traditional Flavours", text: "Recipes that taste like festivals at home." },
  { icon: Droplets, title: "Attention to Hygiene", text: "Clean kitchens and careful handling, always." },
];

function Home() {
  const featured = products.filter((p) => p.featured);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Rangoli className="pointer-events-none absolute -left-24 top-24 hidden w-80 text-gold/40 lg:block" />
        <div className="container-site grid items-center gap-12 py-12 md:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">Homemade with love</p>
            <p className="mt-5 font-display text-2xl text-primary">Rupali Snacks</p>
            <h1 className="mt-3 text-5xl md:text-6xl xl:text-7xl">
              A Taste of Home, Made for Every <em className="text-primary">Celebration.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Discover the joy of traditional Indian snacks, thoughtfully prepared with care and inspired by the
              flavours that bring us together.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/snacks" className={btn.primary}>Explore Our Snacks</Link>
              <Link to="/our-story" className={btn.outline}>Our Story</Link>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -right-6 -top-6 h-2/3 w-2/3 rounded-full bg-peach" aria-hidden="true" />
            <img
              src={hero}
              alt="Homemade chakli in a brass bowl beside chivda in a terracotta bowl, with marigold petals"
              width={1280}
              height={1440}
              className="relative aspect-[4/4.5] w-full rounded-t-full object-cover"
            />
            <Marigold className="absolute -bottom-4 left-6 h-12 w-12 text-marigold" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-card py-20 md:py-28">
        <div className="container-site">
          <SectionHeading eyebrow={`Est. ${site.established} · Pune`} title="Good Food Brings Us Together." center>
            Rupali Snacks is a homegrown brand from Pune, built on homemade food, real care and the traditional
            flavours we grew up with.
          </SectionHeading>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {intro.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <Icon className="mx-auto h-7 w-7 text-primary" strokeWidth={1.4} />
                <h3 className="mt-5 text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Our snacks" title="Little Bites. Big Happiness." />
            <Link to="/snacks" className={btn.outline}>Explore All Snacks</Link>
          </div>
          <div className="mt-14">
            <ProductGrid items={featured} />
          </div>
        </div>
      </section>

      {/* Festive */}
      <section id="festive" className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <Rangoli className="pointer-events-none absolute -right-20 -top-20 w-96 text-gold/30" />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-marigold">Festive specials</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Festivals Taste Better Together.</h2>
            <p className="mt-5 max-w-md text-lg text-primary-foreground/85">
              Celebrate special moments with traditional flavours and homemade favourites made for sharing.
            </p>
            <div className="mt-8 flex items-center gap-2 text-marigold" aria-hidden="true">
              <Marigold className="h-5 w-5" />
              <span className="h-px w-24 bg-gold/60" />
              <Marigold className="h-5 w-5" />
            </div>
            <Link to="/" hash="contact" className={`${btn.light} mt-8`}>Get in Touch</Link>
          </div>
          <img
            src={festive}
            alt="A festive table of traditional snacks in brass bowls with marigold garlands"
            width={1440}
            height={1024}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover ring-1 ring-gold/40 ring-offset-8 ring-offset-primary"
          />
        </div>
      </section>

      {/* Story preview */}
      <section className="bg-peach py-20 md:py-28">
        <div className="container-site grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div
            className="grid aspect-square place-items-center rounded-sm border border-gold/50 bg-background"
            role="img"
            aria-label="Photo of the Rupali Snacks team coming soon"
          >
            <div className="text-center">
              <Rangoli className="mx-auto w-28 text-gold" />
              <p className="eyebrow mt-4 text-muted-foreground">Our kitchen · Pune</p>
            </div>
          </div>
          <SectionHeading eyebrow="Our story" title="From a Passion to a Growing Brand.">
            <p>
              Rupali Snacks began with a simple love for homemade food and the snacks that make every gathering
              feel like home. Today, that passion has grown into a small brand that provides employment to
              <strong className="font-semibold text-espresso"> 10 women</strong>, each part of every batch we make.
            </p>
            <Link to="/our-story" className={`${btn.primary} mt-8`}>Discover Our Story</Link>
          </SectionHeading>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24">
        <div className="container-site grid gap-12 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t border-gold/60 pt-6">
              <Icon className="h-6 w-6 text-marigold" strokeWidth={1.5} />
              <h3 className="mt-4 text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-card py-20 md:py-28">
        <div className="container-site text-center">
          <Marigold className="mx-auto h-10 w-10 text-marigold" />
          <SectionHeading title="Let's Make Every Gathering a Little More Special." center className="mt-6">
            Discover Rupali Snacks and get in touch to learn more about our homemade favourites.
          </SectionHeading>
          <div className="mt-9">
            {site.whatsapp ? (
              <a href={`https://wa.me/${site.whatsapp}`} className={btn.primary}>Chat on WhatsApp</a>
            ) : (
              <p className="text-sm text-muted-foreground">Contact details coming soon · {site.location}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
