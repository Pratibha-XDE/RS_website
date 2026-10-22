import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { btn, Marigold, Rangoli } from "@/components/site";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story | Rupali Snacks, Pune" },
      { name: "description", content: "Rupali Snacks is a homegrown Indian snacks business from Pune, established in 2012, providing employment to 10 women." },
      { property: "og:title", content: "Our Story | Rupali Snacks" },
      { property: "og:description", content: "The story behind a homegrown snacks brand from Pune." },
    ],
  }),
  component: Story,
});

function Story() {
  return (
    <>
      <section className="container-site py-16 md:py-24">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">The Story Behind Rupali Snacks.</h1>
      </section>

      <section className="container-site grid gap-12 pb-20 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <img
          src={hero}
          alt="Homemade chakli and chivda served in traditional bowls"
          width={1280}
          height={1440}
          className="aspect-[4/5] w-full rounded-sm object-cover"
        />
        <div className="space-y-6 self-center text-lg text-muted-foreground">
          <p>
            <span className="font-display text-3xl text-primary">Rupali Snacks</span> is a homegrown Indian snacks
            business from Pune, Maharashtra, established in 2012.
          </p>
          <p>
            It started where good food always starts: in a home kitchen, with a love for the snacks that fill our
            festivals, family visits and quiet evening tea.
          </p>
          <p>
            We make them the way they've always been made, by hand and with care, holding on to the traditional
            flavours that feel familiar from the very first bite.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-peach py-20 md:py-28">
        <Rangoli className="pointer-events-none absolute -left-20 bottom-0 w-80 text-gold/40" />
        <div className="container-site relative mx-auto max-w-3xl text-center">
          <p className="font-display text-7xl text-primary md:text-8xl">10+ </p>
          <p className="eyebrow mt-2">Women, one kitchen</p>
          <p className="mt-6 text-xl leading-relaxed text-espresso md:text-2xl">
            What began as a passion now provides employment to ten women. Every batch carries their skill, their
            hands and their care, and we're proud to grow together.
          </p>
        </div>
      </section>

      <section className="py-20 text-center md:py-28">
        <div className="container-site">
          <Marigold className="mx-auto h-10 w-10 text-marigold" />
          <h2 className="mt-6 text-4xl md:text-5xl">Come Taste the Story.</h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/snacks" className={btn.primary}>Explore Our Snacks</Link>
            <Link to="/" hash="contact" className={btn.outline}>Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
