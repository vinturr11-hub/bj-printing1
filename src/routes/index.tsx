import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Star,
  Check,
  Menu,
  X,
  Printer,
  Shirt,
  Sparkles,
  Megaphone,
  Award,
  Users,
  Zap,
  HeartHandshake,
  ShieldCheck,
  Send,
} from "lucide-react";
import heroImg from "@/assets/hero-printing.jpg";

import pVehicle from "@/assets/portfolio-vehicle-wrap.png";
import pYard from "@/assets/portfolio-yard-signs.png";
import pApparel from "@/assets/portfolio-apparel.png";
import pCard from "@/assets/portfolio-business-card.png";
import pBrochure from "@/assets/portfolio-brochure.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BJ Printing — Premium Printing Services in Mesa, Arizona" },
      {
        name: "description",
        content:
          "Mesa's trusted local print shop with 20+ years experience. Business cards, banners, signs, apparel & commercial printing. Get a free quote today.",
      },
      { property: "og:title", content: "BJ Printing — Premium Printing in Mesa, AZ" },
      {
        property: "og:description",
        content:
          "Family-owned printing services in Mesa, AZ. Fast turnaround, quality materials, personal service.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "BJ Printing",
          image: "/final-logo.png",
          telephone: "+1-480-615-5352",
          email: "bj.printing1@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1031 West 9th Place",
            addressLocality: "Mesa",
            addressRegion: "AZ",
            postalCode: "85201",
            addressCountry: "US",
          },
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: HomePage,
});

const PHONE = "480-615-5352";
const PHONE_TEL = "+14806155352";
const EMAIL = "bj.printing1@gmail.com";
const ADDRESS = "1031 West 9th Place, Mesa, AZ 85201";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <About />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border shadow-soft" : "bg-white/80 backdrop-blur border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src="/final-logo.png"
            alt="BJ Printing logo"
            className="h-12 w-auto object-contain group-hover:opacity-80 transition"
          />
        </a>
        <div className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3.5 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-ink hover:bg-secondary transition"
            >
              {n.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <CopyableText
            text={PHONE}
            className="text-sm font-semibold text-ink hover:text-brand transition"
          >
            {PHONE}
          </CopyableText>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-md bg-brand text-white px-4 py-2.5 text-sm font-semibold hover:bg-brand-deep transition shadow-soft"
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <button
          className="md:hidden p-2 -mr-2 rounded-md hover:bg-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden glass border-t border-border px-5 py-4 space-y-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-3 rounded-md font-medium hover:bg-secondary"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center mt-2 rounded-md bg-brand text-white px-5 py-3 font-semibold"
          >
            Get Free Quote
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-secondary/60">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 [background-image:linear-gradient(rgb(15_23_42/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(15_23_42/0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-brand/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-3 py-1.5 text-xs font-semibold tracking-wide uppercase text-ink shadow-ring animate-float">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-muted-foreground">Mesa, AZ</span>
            <span className="text-border">|</span>
            <span>20+ Years of Experience</span>
          </div>
          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.05] tracking-tight text-balance text-ink">
            Professional printing for businesses that need to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">stand out</span>
              <span className="absolute inset-x-0 -bottom-1 h-2 bg-gold -z-0" />
            </span>
            .
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance leading-relaxed">
            From business cards and banners to apparel and commercial printing, BJ
            Printing delivers Mesa businesses precision, consistency, and
            on-time results — every order, every time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-6 py-3.5 font-semibold shadow-glow hover:bg-brand-deep transition"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md bg-white border border-border text-ink px-6 py-3.5 font-semibold hover:border-ink transition"
            >
              Explore Services
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-semibold text-ink">5.0</span> Local Reviews
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand" />
              <span className="font-medium text-ink">Family-owned & trusted</span>
            </div>
          </div>
        </div>
        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-2 bg-brand/15 rounded-2xl blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden bg-white shadow-soft border border-border">
            <img
              src={heroImg}
              alt="Premium printed business cards, flyers, apparel, banners, and stickers"
              width={1600}
              height={1200}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-soft border border-border p-4 hidden sm:flex items-center gap-3 animate-float">
            <div className="grid place-items-center w-11 h-11 rounded-md bg-brand text-white">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Fast turnaround</div>
              <div className="font-semibold text-sm text-ink">Quotes in hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Business Cards",
    "Banners",
    "Signs",
    "Apparel",
    "Stickers",
    "Invitations",
    "Brochures",
    "Commercial",
  ];
  return (
    <section className="border-y border-border bg-white py-5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm font-semibold tracking-wide uppercase text-muted-foreground">
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap">
            {i}
            {idx < items.length - 1 && <span className="w-1 h-1 rounded-full bg-border" />}
          </span>
        ))}
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Printer,
    title: "Business Printing",
    items: ["Business cards", "Flyers", "Brochures", "Marketing materials"],
  },
  {
    icon: Megaphone,
    title: "Signs & Banners",
    items: ["Custom signs", "Event banners", "Promotional signage", "Yard signs"],
  },
  {
    icon: Shirt,
    title: "Apparel Printing",
    items: ["Screen printing", "Custom shirts", "Team apparel", "DTF prints"],
  },
  {
    icon: Sparkles,
    title: "Custom Printing",
    items: ["Wedding invitations", "Stickers & labels", "Commercial printing", "NCR forms"],
  },
];

function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Printing services for every project"
          sub="Whether it's a single banner or a full marketing campaign, we handle it end-to-end."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative rounded-xl border border-border bg-white p-7 shadow-soft hover:border-ink hover:-translate-y-0.5 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="grid place-items-center w-12 h-12 rounded-md bg-secondary text-brand mb-5 border border-border group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-ink">{s.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const PORTFOLIO = [
  { src: pCard, alt: "Premium foil business card design", h: "row-span-2" },
  { src: pYard, alt: "Custom yard signs printed for schools" },
  { src: pApparel, alt: "Custom screen-printed apparel" },
  { src: pBrochure, alt: "Marketing brochure with photos and branding", h: "row-span-2" },
  { src: pVehicle, alt: "Vehicle wrap with bold custom graphics" },
];

function Portfolio() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Recent work"
          title="A few prints we're proud of"
          sub="Real projects we've delivered for Mesa businesses, families, and organizations."
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {PORTFOLIO.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl bg-white shadow-soft border border-border ${p.h ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                {p.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const iframe = document.getElementById("about-yt") as HTMLIFrameElement | null;
    const send = (func: string) => {
      iframe?.contentWindow?.postMessage(
        JSON.stringify({ event: "listening", id: 1, channel: "widget" }),
        "*"
      );
      iframe?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args: [] }),
        "*"
      );
    };
    const onLoad = () => send("addEventListener");
    iframe?.addEventListener("load", onLoad);
    const handler = (event: MessageEvent) => {
      if (typeof event.data !== "string") return;
      try {
        const data = JSON.parse(event.data);
        const state =
          data?.info?.playerState ??
          (data?.event === "onStateChange" ? data.info : undefined);
        if (typeof state === "number") {
          setIsPlaying(state === 1);
        }
      } catch {}
    };
    window.addEventListener("message", handler);
    return () => {
      window.removeEventListener("message", handler);
      iframe?.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-2 bg-brand/15 rounded-2xl blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-soft aspect-video bg-ink">
            <iframe
              id="about-yt"
              src="https://www.youtube.com/embed/0sITSg5D40I?rel=0&enablejsapi=1"
              title="BJ Printing"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div
            className={`absolute -bottom-5 -right-5 bg-white rounded-xl shadow-soft border border-border p-5 max-w-[200px] transition-all duration-500 ${
              isPlaying ? "opacity-0 translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"
            }`}
          >
            <div className="flex items-baseline gap-1">
              <div className="text-4xl font-display font-bold text-ink">20</div>
              <div className="text-2xl font-display font-bold text-brand">+</div>
            </div>
            <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Years of trusted printing experience
            </div>
            <div className="mt-3 h-1 w-10 bg-gold" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand">
            <span className="w-6 h-px bg-brand" /> About BJ Printing
          </div>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance text-ink">
            A family-owned print shop Mesa businesses actually trust.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-balance leading-relaxed">
            We've been in the printing business for more than twenty years —
            serving the Valley with business cards, labels, flyers, banners,
            apparel and so much more. We pride ourselves on keeping our customers
            as our friends.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Honest pricing. Clear communication. Bilingual service in English and
            Spanish. Whether you're a restaurant down the street or a contractor
            across town, we treat your project like it's our own.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand text-white px-6 py-3 font-semibold hover:bg-brand-deep transition shadow-soft"
            >
              Start Your Order
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-6 py-3 font-semibold hover:border-ink transition"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { icon: Award, label: "20+ Years Experience", v: "20+", s: "Years" },
  { icon: Zap, label: "Fast Communication", v: "<24h", s: "Response time" },
  { icon: Clock, label: "Reliable Turnaround", v: "On-time", s: "Every order" },
  { icon: MapPin, label: "Local Mesa Business", v: "Mesa, AZ", s: "Family-owned" },
  { icon: ShieldCheck, label: "Quality Materials", v: "Premium", s: "Materials only" },
  { icon: HeartHandshake, label: "Personalized Service", v: "1-on-1", s: "Every customer" },
];

function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brand/25 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold">
            <span className="w-6 h-px bg-gold" /> Why choose us <span className="w-6 h-px bg-gold" />
          </div>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">
            Built on consistency, precision, and trust.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="rounded-xl bg-ink-2/80 backdrop-blur border border-white/10 p-7 hover:border-brand/60 hover:-translate-y-0.5 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="grid place-items-center w-12 h-12 rounded-md bg-brand text-white mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-display font-bold">{s.v}</div>
                <div className="text-sm text-white/60 mt-1">{s.s}</div>
                <div className="mt-4 pt-4 border-t border-white/10 text-sm font-medium">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    text: "We worked with Fernando for our business cards. Fernando was clear in communication and estimated prices. Confirmed our emails and we received our business cards within our timeline.",
    name: "Cindy Tinoco",
  },
  {
    text: "Amazing service, quick fast and communication 10/10. Highly recommend!",
    name: "Karen Day",
  },
  {
    text: "Very nice company and good service.",
    name: "Lydia Arthur",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="Loved by local Mesa businesses"
          sub="Don't take our word for it — here's what our customers say."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className="rounded-xl bg-white border border-border p-7 shadow-soft hover:border-ink hover:-translate-y-0.5 transition-all duration-300 animate-fade-up flex flex-col"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-5 text-ink leading-relaxed flex-1">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <div className="grid place-items-center w-10 h-10 rounded-md bg-ink text-white font-display font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-ink">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Verified customer</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Ready to start your project?"
          sub="Tell us what you need — we'll respond with a clear, no-pressure quote."
        />
        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <ContactCard
              icon={Phone}
              label="Call us"
              value={PHONE}
              onCopy={PHONE}
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            <ContactCard
              icon={MapPin}
              label="Visit"
              value={ADDRESS}
              href="https://maps.google.com/?q=1031+West+9th+Place+Mesa+AZ+85201"
            />
            <div className="rounded-xl bg-white border border-border p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand" />
                <div className="font-semibold text-ink">Business hours</div>
              </div>
              <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span className="font-medium text-ink">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-ink">By appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-ink">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                Usually responds within business hours.
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border shadow-soft h-64">
              <iframe
                title="BJ Printing location"
                src="https://www.google.com/maps?q=1031+West+9th+Place+Mesa+AZ+85201&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget as HTMLFormElement);
              const subject = encodeURIComponent(`Quote request from ${fd.get("name")}`);
              const body = encodeURIComponent(
                `Name: ${fd.get("name")}\nPhone: ${fd.get("phone")}\nEmail: ${fd.get(
                  "email",
                )}\nService: ${fd.get("service")}\n\n${fd.get("message")}`,
              );
              window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
              setSent(true);
            }}
            className="lg:col-span-3 rounded-xl bg-white border border-border p-7 sm:p-9 shadow-soft space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Your name" required />
              <Field name="phone" label="Phone" type="tel" required />
            </div>
            <Field name="email" label="Email" type="email" required />
            <div>
              <label className="text-sm font-semibold text-ink">Service</label>
              <select
                name="service"
                required
                className="mt-2 w-full rounded-md border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              >
                <option value="">Choose a service</option>
                <option>Business cards</option>
                <option>Flyers / Brochures</option>
                <option>Signs / Banners</option>
                <option>Apparel printing</option>
                <option>Stickers / Labels</option>
                <option>Wedding invitations</option>
                <option>Commercial printing</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-ink">
                Tell us about your project
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-md border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 resize-none"
                placeholder="Quantity, size, due date, anything we should know…"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand text-brand-foreground px-7 py-4 font-semibold shadow-glow hover:bg-brand-deep transition"
            >
              {sent ? "Opening your email…" : "Send Quote Request"}
              <Send className="w-4 h-4" />
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Or call us directly at{" "}
              <CopyableText text={PHONE} className="font-semibold text-ink hover:text-brand">
                {PHONE}
              </CopyableText>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-ink">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={200}
        className="mt-2 w-full rounded-md border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}

function CopyableText({
  text,
  className,
  children,
}: {
  text: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`relative inline-block cursor-pointer ${className ?? ""}`}
    >
      {children}
      {copied && (
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-ink text-white text-[10px] font-bold whitespace-nowrap shadow-lg z-50 animate-fade-up">
          Copied!
        </span>
      )}
    </button>
  );
}

function CopyableCard({
  text,
  icon: Icon,
  label,
  value,
}: {
  text: string;
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="relative flex items-center gap-4 bg-white border border-border p-5 shadow-soft hover:border-ink transition group rounded-xl w-full text-left cursor-pointer"
    >
      <div className="grid place-items-center w-12 h-12 rounded-md bg-secondary text-brand border border-border group-hover:bg-brand group-hover:text-white group-hover:border-brand transition">
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">{label}</div>
        <div className="font-semibold truncate text-ink">{value}</div>
      </div>
      {copied && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-ink text-white text-[10px] font-bold whitespace-nowrap shadow-lg z-50 animate-fade-up">
          Copied!
        </span>
      )}
    </button>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  onCopy,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  onCopy?: string;
}) {
  if (onCopy) {
    return (
      <CopyableCard text={onCopy} icon={Icon} label={label} value={value} />
    );
  }
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-4 bg-white border border-border p-5 shadow-soft hover:border-ink transition group rounded-xl"
    >
      <div className="grid place-items-center w-12 h-12 rounded-md bg-secondary text-brand border border-border group-hover:bg-brand group-hover:text-white group-hover:border-brand transition">
        <Icon className="w-5 h-5 text-left" />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground uppercase tracking-wide font-semibold text-left mx-0">{label}</div>
        <div className="font-semibold truncate text-ink">{value}</div>
      </div>
    </a>

  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/final-logo.png" alt="BJ Printing logo" className="h-12 w-auto bg-white rounded-md p-1.5" />
            </div>
            <p className="mt-5 text-white/60 max-w-md leading-relaxed">
              Family-owned printing services in Mesa, Arizona. 20+ years of
              quality prints, fast turnaround, and personal service.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 font-semibold hover:bg-brand-deep transition"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div>
            <div className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/90">Quick links</div>
            <ul className="space-y-2.5 text-white/60">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white transition">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/90">Services</div>
            <ul className="space-y-2.5 text-white/60">
              <li>Business Cards</li>
              <li>Signs & Banners</li>
              <li>Apparel Printing</li>
              <li>Wedding Invitations</li>
              <li>Stickers & Labels</li>
              <li>Commercial Printing</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-white/50">
          <div>© {new Date().getFullYear()} BJ Printing. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" /> Proudly serving Mesa, AZ & the Valley
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingCall() {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className="md:hidden fixed bottom-5 right-5 z-40 grid place-items-center w-14 h-14 rounded-full bg-brand text-white shadow-glow active:scale-95 transition ring-4 ring-brand/20"
      aria-label="Call BJ Printing"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand">
        <span className="w-6 h-px bg-brand" /> {eyebrow} <span className="w-6 h-px bg-brand" />
      </div>
      <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance text-ink">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-lg text-muted-foreground text-balance leading-relaxed">{sub}</p>
      )}
    </div>
  );
}
