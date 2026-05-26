import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { GreencellFooter } from "@/components/site/Sections";
// greencell logo lives in the navbar (brand="greencell")
import greencellBanner from "@/assets/greencell-banner.jpg";
import { useInViewReveal } from "@/hooks/use-in-view-reveal";

export const Route = createFileRoute("/business/greencell")({
  head: () => ({
    meta: [
      { title: "Ohreems Greencell Tech — Battery Recycling & Resource Recovery" },
      { name: "description", content: "Ohreems Green-Cell Technologies transforms end-of-life lithium-ion batteries into recovered critical metals — sustainably, responsibly, at scale." },
      { property: "og:title", content: "Ohreems Greencell Tech" },
      { property: "og:description", content: "Closing the loop on clean energy through advanced battery recycling." },
      { property: "og:url", content: "https://ohreems-elevate-next.lovable.app/business/greencell" },
    ],
    links: [{ rel: "canonical", href: "https://ohreems-elevate-next.lovable.app/business/greencell" }],
  }),
  component: GreencellPage,
});

const recoveries = [
  { title: "Black Mass", desc: "Recovered cathode material containing lithium, nickel, cobalt, and manganese compounds essential for new battery manufacturing.", tag: "Li · Ni · Co · Mn" },
  { title: "Critical Minerals", desc: "Refined lithium carbonate, cobalt sulfate, and nickel sulfate — battery-grade materials ready for cell manufacturers worldwide.", tag: "Battery-grade purity" },
  { title: "By-Products", desc: "Copper foil, aluminium sheet, and reclaimed plastics recovered during processing — zero-waste outputs repurposed across industries.", tag: "Cu · Al · Polymers" },
];

const steps = [
  { n: "1", t: "Collection & intake", d: "Batteries collected from OEMs, fleet operators, and recyclers. Each batch logged and assessed on arrival." },
  { n: "2", t: "Safe discharge & dismantling", d: "Cells safely discharged and separated by chemistry type for targeted processing." },
  { n: "3", t: "Shredding & black mass recovery", d: "Mechanical shredding under inert atmosphere yields black mass with minimal contamination." },
  { n: "4", t: "Hydrometallurgical refining", d: "Leaching, solvent extraction, and precipitation produce battery-grade mineral outputs." },
];

const why = [
  { t: "Environmental protection", d: "Diverts hazardous materials from landfill. Recovering metals in-loop cuts lifecycle carbon by up to 70% versus virgin mining." },
  { t: "Resource sovereignty", d: "Reduces reliance on geopolitically sensitive mineral sources by creating a domestic, traceable supply of critical materials." },
  { t: "Economic value creation", d: "Recovered materials command commodity pricing. Battery recycling generates skilled employment and reduces raw-material costs industry-wide." },
  { t: "Circular economy", d: "Keeps high-value materials in productive use indefinitely — supporting a fully circular battery supply chain from cell to cell." },
];

function GreencellPage() {
  useInViewReveal();
  return (
    <main className="section-greencell relative min-h-screen text-foreground">
      <Navbar brand="greencell" />

      {/* Hero — light eco-luxury banner */}
      <section className="relative isolate overflow-hidden pt-40 pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <img
            src={greencellBanner}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-[0.38] anim-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F2FBF4]/70 via-[#F2FBF4]/60 to-[#E6F4EC]" />
        </div>
        <div className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-emerald-300/35 blur-[140px] gradient-drift" />
        <div className="pointer-events-none absolute -right-28 top-10 h-[24rem] w-[24rem] rounded-full bg-teal-300/30 blur-[120px] gradient-drift" style={{ animationDelay: "-6s" }} />
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-15" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-center text-center reveal-up">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.36em] text-green-accent">
              <span className="h-px w-10 bg-[oklch(0.55_0.16_152)]/50" />
              <span>● Battery Recycling & Resource Recovery</span>
              <span className="h-px w-10 bg-[oklch(0.55_0.16_152)]/50" />
            </div>

            <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.75rem,6vw,5.25rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-balance reveal-up-delay-1">
              Closing the loop on <span className="text-green-accent italic">clean energy</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg reveal-up-delay-2">
              Ohreems Green-Cell Technologies transforms end-of-life lithium-ion batteries into recovered critical metals — sustainably, responsibly, at scale.
            </p>
            <div className="mt-10 reveal-up-delay-3">
              <Link to="/contact" className="btn-green inline-flex items-center rounded-full px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] hover-lift-soft">
                Partner with us →
              </Link>
            </div>
          </div>


          <div className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-2xl glass sm:grid-cols-3 reveal-up-delay-3">
            {[
              { v: "98%", k: "Recovery rate" },
              { v: "3x", k: "Lower CO₂ vs mining" },
              { v: "100%", k: "Circular output" },
            ].map((s) => (
              <div key={s.k} className="bg-background/30 p-7 text-center sm:text-left">
                <div className="font-display text-4xl text-green-accent">{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recoveries */}
      <section className="relative overflow-hidden py-28 border-t border-[oklch(0.55_0.14_152)]/12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow text="What we recover" />
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em]">End-to-end battery recycling solutions</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Through advanced hydrometallurgical processes, we extract and purify materials ready for reuse in new battery manufacturing and beyond.
          </p>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {recoveries.map((r) => (
              <div key={r.title} className="in-view-reveal rounded-2xl glass p-8 transition duration-700 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_oklch(0.4_0.18_150_/_0.5)]">
                <div className="font-display text-2xl text-foreground">{r.title}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                <div className="mt-6 text-xs uppercase tracking-[0.22em] text-green-accent">{r.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden py-28 border-t border-[oklch(0.55_0.14_152)]/12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow text="Our process" />
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
            From spent cell to <span className="text-green-accent italic">refined metal</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A closed-loop process designed for maximum yield, minimal emissions, and full chain-of-custody traceability.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="in-view-reveal rounded-2xl glass p-7 transition duration-700 hover:-translate-y-1">
                <div className="font-display text-4xl text-green-accent">{s.n}</div>
                <div className="mt-4 font-display text-lg text-foreground">{s.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="relative overflow-hidden py-28 border-t border-[oklch(0.55_0.14_152)]/12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow text="Why it matters" />
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
            The case for lithium-ion battery recycling
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Demand for critical minerals is accelerating. Recycling is not a trade-off — it is the only viable path to a secure, sustainable supply chain.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {why.map((w) => (
              <div key={w.t} className="in-view-reveal rounded-2xl glass p-8 transition duration-700 hover:-translate-y-1">
                <div className="font-display text-xl text-foreground">{w.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 border-t border-[oklch(0.55_0.14_152)]/12">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <Eyebrow text="Get started" center />
          <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
            Ready to close the <span className="text-green-accent italic">battery loop?</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Partner with Ohreems Greencell Tech to build a more sustainable future — for your business and the planet.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/contact" className="btn-green inline-flex items-center rounded-full px-10 py-4 text-[13px] font-medium uppercase tracking-[0.18em]">
              Partner with us →
            </Link>
          </div>
        </div>
      </section>

      <GreencellFooter />
    </main>
  );
}

function Eyebrow({ text, center }: { text: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.36em] text-green-accent ${center ? "justify-center" : ""}`}>
      <span className="h-px w-10 bg-[oklch(0.55_0.16_152)]/50" />
      <span>{text}</span>
    </div>
  );
}
