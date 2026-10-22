import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/rupali-logo.jpg.asset.json";
import { site, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Rupali Snacks, established 2026"
      width={1440}
      height={800}
      className={cn("h-11 w-auto", dark ? "logo-on-dark" : "logo-on-light", className)}
    />
  );
}

const btnBase =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-wide transition-colors";
export const btn = {
  primary: cn(btnBase, "bg-primary text-primary-foreground hover:bg-espresso"),
  outline: cn(btnBase, "border border-espresso/30 text-espresso hover:border-primary hover:text-primary"),
  light: cn(btnBase, "bg-ivory text-primary hover:bg-marigold hover:text-espresso"),
};

const nav = [
  { label: "Home", to: "/" as const, hash: "" },
  { label: "Our Snacks", to: "/snacks" as const, hash: "" },
  { label: "Our Story", to: "/our-story" as const, hash: "" },
  { label: "Festive Specials", to: "/" as const, hash: "festive" },
  { label: "Contact", to: "/" as const, hash: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="Rupali Snacks home" className="shrink-0">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              activeOptions={{ exact: true, includeHash: !!n.hash }}
              className="text-sm font-medium text-espresso/80 hover:text-primary data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
          <Link to="/" hash="contact" className={cn(btn.primary, "min-h-10 px-5")}>
            Get in Touch
          </Link>
        </nav>
        <button
          className="grid h-11 w-11 place-items-center rounded-full lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <div className="container-site flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                hash={n.hash}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-espresso hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/" hash="contact" onClick={() => setOpen(false)} className={cn(btn.primary, "my-3")}>
              Get in Touch
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo dark className="h-16" />
          <p className="mt-4 font-display text-xl">{site.tagline}</p>
          <p className="mt-1 text-sm text-ivory/70">{site.location}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          <span className="eyebrow text-marigold">Explore</span>
          {nav.map((n) => (
            <Link key={n.label} to={n.to} hash={n.hash} className="text-ivory/80 hover:text-marigold">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm">
          <span className="eyebrow text-marigold">Connect</span>
          {site.whatsapp && (
            <a href={`https://wa.me/${site.whatsapp}`} className="text-ivory/80 hover:text-marigold">WhatsApp</a>
          )}
          {site.instagram && (
            <a href={site.instagram} className="text-ivory/80 hover:text-marigold">Instagram</a>
          )}
          <p className="text-ivory/70">Homemade in {site.location}</p>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <p className="container-site py-5 text-xs text-ivory/60">© 2026 Rupali Snacks. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  center,
  className,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-4xl md:text-5xl">{title}</h2>
      {children && <div className="mt-5 text-base text-muted-foreground md:text-lg">{children}</div>}
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-sm bg-card">
        <img
          src={product.image}
          alt={product.imageAlt}
          width={1024}
          height={1280}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-border pb-4">
        <h3 className="text-2xl">{product.name}</h3>
        <span className="eyebrow shrink-0 text-muted-foreground">{product.category}</span>
      </div>
      {product.description && <p className="mt-3 text-sm text-muted-foreground">{product.description}</p>}
    </article>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}

/** Restrained rangoli-inspired motif */
export function Rangoli({ className }: { className?: string }) {
  const petals = Array.from({ length: 12 });
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="100" cy="100" r="92" />
      <circle cx="100" cy="100" r="70" strokeDasharray="2 5" />
      {petals.map((_, i) => (
        <path key={i} d="M100 100 C 112 70, 112 45, 100 30 C 88 45, 88 70, 100 100Z" transform={`rotate(${i * 30} 100 100)`} />
      ))}
      <circle cx="100" cy="100" r="10" />
    </svg>
  );
}

export function Marigold({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse key={i} cx="12" cy="6" rx="3" ry="5" transform={`rotate(${i * 45} 12 12)`} opacity="0.85" />
      ))}
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
