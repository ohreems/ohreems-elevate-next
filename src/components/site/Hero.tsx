import { useRef } from "react";
import heroBg from "@/assets/hero-rings.jpg";
import { useHeroOverlapGuard } from "@/hooks/use-hero-overlap-guard";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useHeroOverlapGuard(headlineRef, {
    badge: badgeRef,
    subtitle: subtitleRef,
    cta: ctaRef,
    stats: statsRef,
  });
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero">
      {/* Background image — slightly lighter for breathability */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-background/60 to-background" />
        <div className="absolute inset-0 grid-overlay opacity-25" />
      </div>

      {/* Aurora glow layers — softened for breathing room */}
      <div className="pointer-events-none absolute -left-32 top-1/4 aurora -z-0 h-[30rem] w-[30rem] rounded-full bg-royal/30 blur-[140px]" />
      <div className="pointer-events-none absolute -right-28 top-10 aurora -z-0 h-[24rem] w-[24rem] rounded-full bg-gold/10 blur-[120px]" style={{ animationDelay: "-4s" }} />
      <div className="pointer-events-none absolute left-1/3 bottom-0 aurora -z-0 h-[20rem] w-[20rem] rounded-full bg-cyan/8 blur-[140px]" style={{ animationDelay: "-8s" }} />

      {/* Animated gold light streaks — reduced for elegance */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden opacity-40">
        <span className="streak left-0 top-[22%] w-[60%]" style={{ animationDuration: "16s" }} />
        <span className="streak left-0 top-[55%] w-[48%]" style={{ animationDelay: "-4s", animationDuration: "20s" }} />
        <span className="streak left-0 top-[78%] w-[70%]" style={{ animationDelay: "-9s", animationDuration: "24s" }} />
      </div>

      {/* Floating particles — fewer, softer */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${70 + ((i * 13) % 25)}%`,
              animationDelay: `${-(i * 0.7) % 10}s`,
              animationDuration: `${8 + (i % 5)}s`,
              opacity: 0.35 + ((i % 4) * 0.08),
            }}
          />
        ))}
      </div>

      {/* Floating logo-inspired ring elements — refined scale */}
      <div className="pointer-events-none absolute right-[-14%] top-1/2 -z-0 hidden -translate-y-1/2 md:block">
        <div className="relative h-[600px] w-[600px]">
          <div className="anim-spin-slow absolute inset-0 rounded-full border border-gold/18" />
          <div className="anim-spin-reverse absolute inset-12 rounded-full border border-gold/10" />
          <div className="anim-spin-slow absolute inset-24 rounded-full border border-royal/30" style={{ animationDuration: "90s" }} />
          <div className="anim-spin-reverse absolute inset-40 rounded-full border border-gold/14" />
          <div className="absolute inset-56 rounded-full border border-gold/30 shadow-[0_0_100px_oklch(0.78_0.13_85_/_0.18)_inset]" />
          {/* Orbital nodes — softened */}
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_14px_oklch(0.85_0.14_88_/_0.7)]" />
          <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan/70 shadow-[0_0_10px_oklch(0.78_0.13_220_/_0.7)]" />
        </div>
      </div>

      
         <div className="hero-root relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-start justify-center px-5 pb-16 pt-28 md:px-6 md:pb-32 md:pt-36">
        <div ref={badgeRef} className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.36em] text-gold/95">
          <span className="h-1.5 w-1.5 rounded-full bg-gold anim-pulse-gold" />
          A Global Enterprise Group · Est. Vision
        </div>

        
          <h1 ref={headlineRef} className="mt-10 max-w-5xl font-display text-[clamp(2.25rem,8vw,7.5rem)] font-semibold leading-[1.08] tracking-[-0.022em] text-balance md:mt-24">
          Innovating
          <br />
          <span className="text-sheen-gold">Tomorrow's</span>{" "}
          <span className="text-foreground/95">Solutions</span>{" "}
          <span className="italic font-light text-foreground/65">Today.</span>
        </h1>

       
          <div ref={subtitleRef} className="mt-7 flex max-w-xl items-start gap-6 md:mt-16">
          <span className="mt-3 hidden h-px w-14 bg-gold/55 md:block" />
          <p className="text-[15px] font-light leading-[1.9] tracking-[0.01em] text-muted-foreground/95 md:text-base text-pretty">
            A multi-sector enterprise group fusing technological innovation with
            sustainable practice — engineered for the businesses, communities and
            planet of tomorrow.
          </p>
        </div>

        <div ref={ctaRef} className="mt-14 flex flex-wrap items-center gap-4">
             <a href="#about" className="btn-ghost-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide md:px-8 md:py-4">
            Explore the Group
            <span aria-hidden>→</span>
          </a>
          <a href="#about" className="btn-ghost-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium tracking-wide">
            Discover Ohreems
          </a>
        </div>

        {/* Stat strip */}
       
           <div ref={statsRef} className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl glass-strong md:mt-24 md:grid-cols-4">
          {[
            { k: "02", v: "Core Divisions" },
            { k: "15+", v: "Years of Vision" },
            { k: "100%", v: "Sustainable Intent" },
            { k: "24/7", v: "Global Operations" },
          ].map((s) => (
            <div key={s.v} className="group relative bg-background/30 px-7 py-5 transition-colors hover:bg-background/55">
              <div className="font-display text-3xl font-semibold text-gradient-gold">{s.k}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{s.v}</div>
              <span className="absolute inset-x-7 bottom-3 h-px w-0 bg-gold/50 transition-all duration-500 group-hover:w-10" />
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70">
          <span className="h-px w-10 bg-muted-foreground/40" />
          Scroll to explore
        </div>
      </div>

      <div className="gold-divider" />
    </section>
  );
}
