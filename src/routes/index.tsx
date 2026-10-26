import { createFileRoute, Link } from "@tanstack/react-router";
import { HandHeart, Leaf, Sparkles, Users, Droplets, Flame, Phone, Instagram, Linkedin } from "lucide-react";
import hero from "@/assets/hero.jpg";
import festive from "@/assets/festive.jpg";
import ourKitchen from "@/assets/our-kitchen.jpg";
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
      <section className="relative">
        <div className="container-site grid items-center gap-10 py-10 sm:py-12 md:py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-12 xl:gap-16 xl:py-14">
          <div className="order-2 md:mx-auto md:w-full md:max-w-xl lg:order-1 lg:mx-0 lg:max-w-none">
            {/* Prominent Brand Identity Lockup */}
            <div className="mb-5 flex flex-col items-start md:mb-6">
              <img
                src="/rs-monogram.png"
                alt="Rupali Snacks logo"
                width={96}
                height={96}
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
              />
              <p className="mt-2.5 font-display text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase text-espresso">
                {site.name}
              </p>
              <p className="mt-0.5 text-sm sm:text-base md:text-lg font-semibold tracking-wide text-primary">
                {site.tagline}
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl text-espresso font-display leading-[1.15]">
              A Taste of Home, Made for Every <em className="text-primary not-italic">Celebration.</em>
            </h1>
            <p className="mt-4 max-w-lg text-base sm:text-lg text-muted-foreground">
              Discover the joy of traditional Indian snacks, thoughtfully prepared with care and inspired by the
              flavours that bring us together.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/snacks" className={btn.primary}>Explore Our Snacks</Link>
              <Link to="/our-story" className={btn.outline}>Our Story</Link>
            </div>
          </div>
          <div className="relative order-1 md:mx-auto md:w-full md:max-w-xl lg:order-2 lg:mx-0 lg:max-w-none">
            <img
              src={hero}
              alt="Homemade chakli in a brass bowl beside chivda in a terracotta bowl, with marigold petals"
              width={1280}
              height={1440}
              className="relative aspect-[4/4.5] w-full rounded-t-full object-cover shadow-sm lg:aspect-[4/4.3] xl:aspect-[4/4.2]"
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
          <div className="space-y-6">
            <div>
              <p className="eyebrow text-marigold">Festive specials</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Festivals Taste Better Together.</h2>
              <p className="mt-5 max-w-md text-lg text-primary-foreground/85">
                Celebrate special moments with traditional flavours and homemade favourites made for sharing.
              </p>
            </div>

            <div className="pt-2">
              <h3 className="font-display text-2xl text-marigold md:text-3xl">
                Made with Tradition. Shared with Love.
              </h3>
              <div className="my-3 flex items-center gap-2" aria-hidden="true">
                <span className="h-px w-10 bg-marigold/60" />
                <Marigold className="h-4 w-4 text-marigold" />
                <span className="h-px w-10 bg-marigold/60" />
              </div>
              <p className="max-w-md text-base leading-relaxed text-primary-foreground/90">
                A celebration of authentic flavours, cherished recipes, and homemade goodness.
              </p>
            </div>
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
          <div className="overflow-hidden rounded-sm border border-gold/50 bg-background shadow-sm">
            <img
              src={ourKitchen}
              alt="Traditional homemade festive Indian snacks and sweets in brass platters"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
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
          <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <a
              href={`tel:${site.phoneTel || "+919970912152"}`}
              className="group flex flex-col items-center justify-center rounded-xl border border-border/80 bg-background/50 p-6 text-center transition-all duration-300 hover:border-primary/40 hover:bg-background hover:shadow-sm"
              aria-label="Call +91 99709 12152"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-peach text-primary transition-transform duration-300 group-hover:scale-110">
                <Phone className="h-5 w-5" />
              </div>
              <span className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</span>
              <span className="mt-1 text-base font-semibold text-espresso transition-colors group-hover:text-primary">
                +91 99709 12152
              </span>
            </a>
            <a
              href={site.instagram || "https://www.instagram.com/rupalisnacks?psln=ZWx3dnlqbXZueGdr"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-xl border border-border/80 bg-background/50 p-6 text-center transition-all duration-300 hover:border-primary/40 hover:bg-background hover:shadow-sm"
              aria-label="Visit Rupali Snacks on Instagram"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-peach text-primary transition-transform duration-300 group-hover:scale-110">
                <Instagram className="h-5 w-5" />
              </div>
              <span className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Instagram</span>
              <span className="mt-1 text-base font-semibold text-espresso transition-colors group-hover:text-primary">
                @rupalisnacks
              </span>
            </a>
            <a
              href={site.linkedin || "https://www.linkedin.com/in/rupali-patil-b84b18264?utm_source=share_via&utm_content=profile&utm_medium=member_android"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-xl border border-border/80 bg-background/50 p-6 text-center transition-all duration-300 hover:border-primary/40 hover:bg-background hover:shadow-sm"
              aria-label="Connect with Rupali Patil on LinkedIn"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-peach text-primary transition-transform duration-300 group-hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </div>
              <span className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">LinkedIn</span>
              <span className="mt-1 text-base font-semibold text-espresso transition-colors group-hover:text-primary">
                Rupali Patil
              </span>
            </a>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">Homemade in {site.location}</p>
        </div>
      </section>
    </>
  );
}
